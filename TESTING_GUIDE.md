# Testing Guide - Hero Section & Roof Estimator

## 🧪 Manual Testing Checklist

### Visual Testing

#### Desktop (≥1024px)
- [ ] Hero section displays in two-column layout
- [ ] Trust badge appears at top with emerald glow
- [ ] Headline text uses gradient effect on key phrase
- [ ] Three feature cards display in horizontal row
- [ ] Estimator card is positioned on right side
- [ ] Background shows subtle dot grid pattern
- [ ] All text is readable with proper contrast

#### Tablet (768px - 1023px)
- [ ] Layout transitions to narrower two-column
- [ ] Typography scales appropriately
- [ ] Feature cards adapt to 2-column grid
- [ ] Estimator card remains readable

#### Mobile (<768px)
- [ ] Layout stacks to single column
- [ ] Trust badge remains visible
- [ ] Feature cards stack vertically
- [ ] Estimator card is full-width
- [ ] All interactive elements are touch-friendly (44x44px min)

### Functional Testing

#### Step 1: Bill & ZIP
- [ ] ZIP code input accepts only numeric values
- [ ] ZIP code validates on blur and submit
- [ ] Error message displays for invalid ZIP (< 5 digits)
- [ ] Slider moves smoothly from $100 to $800
- [ ] Dollar amount updates in real-time above slider
- [ ] "Continue" button is disabled when ZIP is empty
- [ ] "Continue" button is disabled when ZIP is invalid
- [ ] Clicking "Continue" with valid data advances to Step 2

Test Cases:
```
Valid ZIP: 12345 ✓
Invalid ZIP: 123 ✗ (shows error)
Invalid ZIP: abcde ✗ (characters not accepted)
Empty ZIP: "" ✗ (button disabled)
Bill Range: $100-$800 (all values work)
```

#### Step 2: Roof Orientation
- [ ] Three orientation cards display
- [ ] Clicking a card selects it (visual feedback)
- [ ] Selected card shows emerald border and glow
- [ ] Selected card shows checkmark icon
- [ ] Only one card can be selected at a time
- [ ] "Back" button returns to Step 1 with data preserved
- [ ] "Calculate Savings" is disabled when no selection
- [ ] "Calculate Savings" advances to Step 3 when selected

Test Cases:
```
Select South: Shows 100% efficiency ✓
Select East/West: Shows 85% efficiency ✓
Select Complex: Shows 75% efficiency ✓
Click different option: Previous deselects ✓
```

#### Step 3: Results
- [ ] Results display immediately after Step 2
- [ ] 25-year savings displays in large format
- [ ] System size in kW displays correctly
- [ ] Monthly bill amount matches user input
- [ ] "Lock In This Rate" button is clickable
- [ ] "Start Over" button resets to Step 1
- [ ] All data clears when starting over

Calculation Verification:
```
Example Input:
- ZIP: 12345
- Monthly Bill: $200
- Orientation: South

Expected Output:
- System Size: ~10.9 kW
- 25-Year Savings: ~$123,600

Verify calculation is reasonable
```

### Interaction Testing

#### Keyboard Navigation
- [ ] Tab key moves focus through all interactive elements
- [ ] Focus indicators are visible (emerald ring)
- [ ] Enter key activates buttons
- [ ] Enter key submits Step 1 when valid
- [ ] Escape key does not interfere (no modals open)
- [ ] Arrow keys work on slider
- [ ] Keyboard can select orientation cards

#### Mouse/Touch Interactions
- [ ] All buttons respond to hover (visual feedback)
- [ ] Slider thumb responds to hover (scale effect)
- [ ] Orientation cards respond to hover
- [ ] All clickable areas have cursor pointer
- [ ] Touch targets are large enough on mobile
- [ ] No double-tap zoom issues on mobile

### Animation Testing

- [ ] Progress bar fills smoothly as steps advance
- [ ] Step content fades in (fadeIn animation)
- [ ] Slider thumb scales on hover
- [ ] Glow effects appear on selection
- [ ] Button glows intensify on hover
- [ ] Transitions are smooth (no jank)
- [ ] Animations complete in expected time (~300ms)

### State Management Testing

#### Forward Flow
1. Enter ZIP: 12345
2. Set bill: $300
3. Click Continue → Step 2 loads
4. Select South → Enabled Calculate button
5. Click Calculate → Step 3 shows results
6. Verify savings calculation

#### Backward Flow
1. Complete Step 1
2. Advance to Step 2
3. Click "Back" button
4. Verify Step 1 shows with previous data intact
5. Modify data
6. Advance again to Step 2
7. Verify can still complete flow

#### Reset Flow
1. Complete all 3 steps
2. View results on Step 3
3. Click "Start Over"
4. Verify returns to Step 1
5. Verify all fields are cleared
6. Verify can complete flow again

#### Error Handling
1. Try to continue Step 1 with invalid ZIP
2. Verify error message displays
3. Correct the ZIP
4. Verify error message clears
5. Verify can proceed normally

### Cross-Browser Testing

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

Check for:
- Layout consistency
- Slider functionality
- Focus indicators
- Backdrop blur support
- CSS gradient support
- SVG pattern rendering

### Performance Testing

- [ ] Page loads in < 3 seconds
- [ ] No layout shift (CLS) during load
- [ ] Animations are smooth (60fps)
- [ ] No console errors
- [ ] No console warnings
- [ ] Build size is reasonable (check Next.js output)

### Accessibility Testing

#### Screen Reader
- [ ] Hero headline is announced correctly
- [ ] Trust badge text is read
- [ ] Form labels are associated with inputs
- [ ] Step progress is announced
- [ ] Error messages are announced
- [ ] Results are announced
- [ ] Button purposes are clear

#### Color Contrast
- [ ] Headline text: #f8fafc on #020617 (21:1) ✓
- [ ] Body text: slate-300 on #020617 (>4.5:1) ✓
- [ ] Emerald text: #10b981 on #020617 (4.8:1) ✓
- [ ] Button text: white on emerald-500 (>4.5:1) ✓
- [ ] Input labels: slate-200 on dark (>4.5:1) ✓

#### Keyboard-Only Navigation
- [ ] Can complete entire flow with keyboard only
- [ ] All steps accessible
- [ ] Focus never gets trapped
- [ ] Skip links work (if implemented)

## 🐛 Common Issues to Check

### Issue: ZIP validation not working
**Fix:** Verify regex pattern is correct: `/^\d{5}$/`

### Issue: Slider not moving smoothly
**Fix:** Check for conflicting CSS on input[type="range"]

### Issue: Results calculation seems wrong
**Fix:** Verify orientation multiplier is applied correctly

### Issue: Progress bar not filling
**Fix:** Check that currentStep state is updating

### Issue: Animation not showing
**Fix:** Verify `animate-fadeIn` class is in globals.css

### Issue: Focus indicators not visible
**Fix:** Ensure focus:ring-2 is not being overridden

### Issue: Mobile layout broken
**Fix:** Check responsive breakpoint classes (lg:, md:)

## 📊 Expected Results

### Calculation Examples

**Example 1: High Usage**
- Input: ZIP 90210, $400/month, South
- Expected: ~21.8 kW, ~$247,200 savings

**Example 2: Medium Usage**
- Input: ZIP 12345, $200/month, South
- Expected: ~10.9 kW, ~$123,600 savings

**Example 3: Low Usage**
- Input: ZIP 10001, $100/month, East/West
- Expected: ~4.6 kW, ~$61,800 savings

**Example 4: Complex Roof**
- Input: ZIP 75001, $300/month, Complex
- Expected: ~12.3 kW, ~$185,400 savings

## ✅ Test Sign-Off

**Tested By:** _____________  
**Date:** _____________  
**Browser:** _____________  
**Device:** _____________  

**Result:** ☐ Pass  ☐ Fail  

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________

## 🚀 Next Steps After Testing

If all tests pass:
1. Mark Tasks 3 & 4 as verified ✅
2. Proceed to Task 5 (Energy Flow Visualizer)
3. Begin hardware section (Tasks 6-7)

If issues found:
1. Document in GitHub Issues or task tracker
2. Prioritize by severity (P0, P1, P2)
3. Fix critical issues before proceeding
4. Re-test after fixes
