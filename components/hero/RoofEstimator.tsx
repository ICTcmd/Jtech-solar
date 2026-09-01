'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui';

type Step = 1 | 2 | 3;

interface EstimatorData {
  zipCode: string;
  monthlyBill: number;
  roofOrientation: 'south' | 'east-west' | 'complex' | null;
}

interface EstimateResult {
  savings25Year: number;
  systemSizeKw: number;
}

export function RoofEstimator() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [data, setData] = useState<EstimatorData>({
    zipCode: '',
    monthlyBill: 200,
    roofOrientation: null,
  });
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [errors, setErrors] = useState<{ zipCode?: string }>({});

  const validateZipCode = (zip: string): boolean => {
    const zipRegex = /^\d{5}$/;
    return zipRegex.test(zip);
  };

  const calculateEstimate = (): EstimateResult => {
    const orientationMultiplier = {
      south: 1.0,
      'east-west': 0.85,
      complex: 0.75,
    };

    const multiplier = data.roofOrientation ? orientationMultiplier[data.roofOrientation] : 0.85;
    const annualUsageKwh = (data.monthlyBill / 0.13) * 12; // Assuming $0.13/kWh average
    const systemSizeKw = (annualUsageKwh / 1400) * multiplier; // 1400 kWh per kW per year average
    const annualSavings = data.monthlyBill * 12;
    const savings25Year = annualSavings * 25 * 1.03; // Accounting for utility inflation

    return {
      savings25Year: Math.round(savings25Year),
      systemSizeKw: Math.round(systemSizeKw * 10) / 10,
    };
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!validateZipCode(data.zipCode)) {
        setErrors({ zipCode: 'Please enter a valid 5-digit ZIP code' });
        return;
      }
      setErrors({});
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!data.roofOrientation) return;
      const result = calculateEstimate();
      setEstimate(result);
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setData({
      zipCode: '',
      monthlyBill: 200,
      roofOrientation: null,
    });
    setEstimate(null);
    setErrors({});
  };

  return (
    <div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-[#f8fafc]">
            Calculate Your Solar Savings
          </h3>
          <div className="text-sm text-slate-400">
            Step {currentStep} of 3
          </div>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                step <= currentStep
                  ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                  : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[280px]">
        {/* Step 1: Bill & Zip */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-slate-200 mb-2">
                Your ZIP Code
              </label>
              <input
                id="zipCode"
                type="text"
                maxLength={5}
                value={data.zipCode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setData({ ...data, zipCode: value });
                  if (errors.zipCode) setErrors({});
                }}
                placeholder="Enter ZIP code"
                className={`w-full bg-slate-800/50 border ${
                  errors.zipCode ? 'border-red-500' : 'border-slate-700'
                } rounded-lg px-4 py-3 text-[#f8fafc] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
              />
              {errors.zipCode && (
                <p className="mt-1 text-sm text-red-400">{errors.zipCode}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="monthlyBill" className="text-sm font-medium text-slate-200">
                  Average Monthly Utility Bill
                </label>
                <span className="text-2xl font-bold text-emerald-500">
                  ${data.monthlyBill}
                </span>
              </div>
              <input
                id="monthlyBill"
                type="range"
                min="100"
                max="800"
                step="10"
                value={data.monthlyBill}
                onChange={(e) => setData({ ...data, monthlyBill: parseInt(e.target.value) })}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${
                    ((data.monthlyBill - 100) / 700) * 100
                  }%, #334155 ${((data.monthlyBill - 100) / 700) * 100}%, #334155 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$100</span>
                <span>$800+</span>
              </div>
            </div>

            <div className="pt-4 text-sm text-slate-400 bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
              <p>💡 Your utility bill helps us estimate your energy usage and potential savings.</p>
            </div>
          </div>
        )}

        {/* Step 2: Roof Orientation */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="mb-4">
              <h4 className="text-sm font-medium text-slate-200 mb-1">
                Select Your Roof Orientation
              </h4>
              <p className="text-xs text-slate-400">
                This affects your system&apos;s energy production potential
              </p>
            </div>

            <div className="grid gap-3">
              <button
                onClick={() => setData({ ...data, roofOrientation: 'south' })}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  data.roofOrientation === 'south'
                    ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-base font-semibold text-[#f8fafc] mb-1">
                      South-Facing
                    </div>
                    <div className="text-sm text-slate-400">
                      Optimal production • 100% efficiency
                    </div>
                  </div>
                  {data.roofOrientation === 'south' && (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>

              <button
                onClick={() => setData({ ...data, roofOrientation: 'east-west' })}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  data.roofOrientation === 'east-west'
                    ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-base font-semibold text-[#f8fafc] mb-1">
                      East/West-Facing
                    </div>
                    <div className="text-sm text-slate-400">
                      Good production • 85% efficiency
                    </div>
                  </div>
                  {data.roofOrientation === 'east-west' && (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>

              <button
                onClick={() => setData({ ...data, roofOrientation: 'complex' })}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  data.roofOrientation === 'complex'
                    ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-base font-semibold text-[#f8fafc] mb-1">
                      Complex/Multi-Angle
                    </div>
                    <div className="text-sm text-slate-400">
                      Variable production • 75% efficiency
                    </div>
                  </div>
                  {data.roofOrientation === 'complex' && (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {currentStep === 3 && estimate && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 mb-4">
                <Zap className="w-8 h-8 text-emerald-500" />
              </div>
              <h4 className="text-lg font-semibold text-[#f8fafc] mb-2">
                Your Solar Potential
              </h4>
              <p className="text-sm text-slate-400">
                Based on your location and energy usage
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-5">
                <div className="text-sm text-slate-300 mb-1">
                  Estimated 25-Year Savings
                </div>
                <div className="text-4xl font-bold text-emerald-500">
                  ${estimate.savings25Year.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  vs. rising utility rates
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <div className="text-xs text-slate-400 mb-1">System Size</div>
                  <div className="text-2xl font-bold text-[#f8fafc]">
                    {estimate.systemSizeKw} kW
                  </div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <div className="text-xs text-slate-400 mb-1">Monthly Bill</div>
                  <div className="text-2xl font-bold text-[#f8fafc]">
                    ${data.monthlyBill}
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              onClick={() => {
                // CTA action - could open contact form or schedule consultation
                alert('Contact form would open here');
              }}
            >
              Lock In This Rate
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

            <button
              onClick={handleReset}
              className="w-full text-sm text-slate-400 hover:text-slate-300 transition-colors"
            >
              Start Over
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      {currentStep < 3 && (
        <div className="flex gap-3 mt-6 pt-6 border-t border-slate-700/50">
          {currentStep > 1 && (
            <Button
              variant="ghost"
              size="md"
              onClick={handleBack}
              className="flex-1"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
          )}
          <Button
            variant="primary"
            size="md"
            onClick={handleNext}
            disabled={
              (currentStep === 1 && !data.zipCode) ||
              (currentStep === 2 && !data.roofOrientation)
            }
            className="flex-1"
          >
            {currentStep === 2 ? 'Calculate Savings' : 'Continue'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
