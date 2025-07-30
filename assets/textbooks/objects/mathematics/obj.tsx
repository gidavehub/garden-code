export const textbook = {
  "name": "General Mathematics",
  "author": "Godswill Iyke Dave",
  "coverImage": "",
  "chapters": [
    {
      "name": "Chapter 1: Real Numbers and Operations",
      "image": "https://images.pexels.com/photos/5491026/pexels-photo-5491026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=VEY08fMYmEU",
        "https://www.youtube.com/watch?v=dAgfnK528RA",
        "https://www.youtube.com/watch?v=AFOnjvjU-Ck"
      ],
      "sections": [
        {
          "title": "1.1 Integers, Fractions, Decimals, and Their Conversions",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=-Xt4UDk7Kzw",
          "content": `Our number system is built upon various sets of numbers, each with unique characteristics.

Natural Numbers (Counting Numbers): These are the numbers we use for counting: {1, 2, 3, 4, ...}.

Whole Numbers: Natural numbers including zero: {0, 1, 2, 3, ...}.

Integers (Z): All whole numbers and their negative counterparts: {..., -3, -2, -1, 0, 1, 2, 3, ...}.

*   Positive integers: {1, 2, 3, ...} (same as natural numbers).
*   Negative integers: {..., -3, -2, -1}.
*   Zero is neither positive nor negative.

Operations on integers (addition, subtraction, multiplication) result in an integer. Division of two integers may or may not result in an integer (e.g., 6 ÷ 2 = 3, but 5 ÷ 2 = 2.5). Integers can be visualized on a number line, extending infinitely in both positive and negative directions.

Fractions (Rational Numbers, Q):
A fraction represents a part of a whole or, more generally, any number of equal parts. It is typically expressed in the form a/b, where:

*   a is the numerator (representing the number of parts being considered).

*   b is the denominator (representing the total number of equal parts the whole is divided into). The denominator cannot be zero (b ≠ 0).
Any number that can be expressed as a ratio of two integers a/b (where b ≠ 0) is called a rational number. This set includes all integers (e.g., 5 can be written as 5/1).

Types of Fractions:

*   **Proper Fraction:** The absolute value of the numerator is less than the absolute value of the denominator (e.g., 2/3, 5/8, -1/4). Its value is between -1 and 1 (excluding 0 if a ≠ 0).

*   **Improper Fraction:** The absolute value of the numerator is greater than or equal to the absolute value of the denominator (e.g., 5/3, 7/7, 9/4, -8/5). Its value is greater than or equal to 1, or less than or equal to -1.

*   **Mixed Number (or Mixed Fraction):** Consists of a whole number and a proper fraction (e.g., 1 ⅔, which means 1 + 2/3; -2 ¼, which means -(2 + ¼)). Improper fractions can be converted to mixed numbers and vice versa.

*   **Equivalent Fractions:** Fractions that represent the same value, even though they have different numerators and denominators (e.g., 1/2 = 2/4 = 5/10). Equivalent fractions are obtained by multiplying or dividing both the numerator and the denominator by the same non-zero number.

*   **Simplest Form (Lowest Terms):** A fraction is in its simplest form when its numerator and denominator have no common factors other than 1 (their greatest common divisor, GCD, or highest common factor, HCF, is 1).

Operations with Fractions:

*   **Addition/Subtraction:** Require a common denominator (usually the least common multiple, LCM, of the denominators). a/b ± c/d = (ad ± bc) / bd.

*   **Multiplication:** Multiply the numerators and multiply the denominators. (a/b) × (c/d) = ac / bd.

*   **Division:** Invert the second fraction (find its reciprocal) and multiply. (a/b) ÷ (c/d) = (a/b) × (d/c) = ad / bc (where c ≠ 0).

Decimals (Decimal Fractions):
A decimal is a way of representing numbers that are parts of a whole, using a decimal point to separate the whole number part from the fractional part. Each digit to the right of the decimal point represents a fraction whose denominator is a power of ten (tenths, hundredths, thousandths, etc.).

*   **Terminating Decimals:** Decimals that have a finite number of digits after the decimal point (e.g., 0.5, 0.75, 2.125). These arise from fractions whose denominators (in simplest form) have only prime factors of 2 and/or 5. They are rational numbers.

*   **Recurring (Repeating) Decimals:** Decimals that have a digit or a sequence of digits that repeats infinitely (e.g., 0.333... denoted as 0.overline{3}; 0.142857142857... denoted as 0.overline{142857}; 0.1666... denoted as 0.1overline{6}). All recurring decimals are rational numbers and can be expressed as fractions.

*   **Non-recurring, Non-terminating Decimals:** Decimals that continue infinitely without any repeating pattern of digits. These represent **irrational numbers** – numbers that cannot be expressed as a ratio of two integers (e.g., π ≈ 3.14159265..., √2 ≈ 1.41421356..., e ≈ 2.71828...).

**Real Numbers (R):** The set of all rational numbers (including integers, fractions, terminating and recurring decimals) and all irrational numbers combined. The real number line is a visual representation of all real numbers.

Conversions:

*   **Fraction to Decimal:** Perform the division of the numerator by the denominator.
    *   Example: 3/4 = 3 ÷ 4 = 0.75 (terminating).
    *   Example: 2/3 = 2 ÷ 3 = 0.666... = 0.overline{6} (recurring).

*   **Decimal to Fraction:**
    *   **Terminating Decimal:** Write the decimal digits over the appropriate power of 10 (determined by the number of decimal places), then simplify the fraction.
        *   Example: 0.75 = 75/100 = (25 × 3) / (25 × 4) = 3/4.
        *   Example: 0.125 = 125/1000 = (125 × 1) / (125 × 8) = 1/8.
    *   **Recurring Decimal:** Use an algebraic method.
        *   *Example for x = 0.overline{3} (or 0.333...):*
            Let x = 0.333...
            Then 10x = 3.333...
            Subtracting the first equation from the second: 10x - x = (3.333...) - (0.333...) => 9x = 3 => x = 3/9 = 1/3.
        *   *Example for x = 0.1overline{6} (or 0.1666...):*
            Let x = 0.1666...
            10x = 1.6666...
            100x = 16.6666...
            Subtracting 10x from 100x: 100x - 10x = (16.6666...) - (1.6666...) => 90x = 15 => x = 15/90 = 1/6.

*   **Mixed Number to Improper Fraction:** Multiply the whole number by the denominator of the fractional part, add the numerator of the fractional part, and place this sum over the original denominator.
    *   Example: 2 ¾ = (2 × 4 + 3) / 4 = (8 + 3) / 4 = 11/4.

*   **Improper Fraction to Mixed Number:** Divide the numerator by the denominator. The quotient is the whole number part, the remainder is the numerator of the fractional part, and the denominator remains the same.
    *   Example: 11/4: 11 ÷ 4 = 2 with a remainder of 3. So, 11/4 = 2 ¾.

(Suggested insertion: A number line diagram illustrating the positions of natural numbers, whole numbers, integers, and showing examples of rational (fractions/decimals) and irrational numbers. Worked examples for each type of conversion and common operations involving fractions and decimals.)`,
          "mcq": {
            "question": "What is the fractional equivalent of the recurring decimal 0.1overline{6}?",
            "options": [
              "1/60",
              "16/100",
              "1/6",
              "1/5"
            ],
            "correctAnswer": "1/6",
            "explanation": "Let x = 0.1666.... Then 10x = 1.6666... and 100x = 16.6666.... Subtracting 10x from 100x gives 90x = 15. Therefore, x = 15/90, which simplifies to 1/6."
          }
        },
        {
          "title": "1.2 Laws of Exponents and Radicals",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=JpnelUkttNQ",
          "content": `Exponents (Indices):
An exponent indicates the number of times a base number is multiplied by itself. In the expression aⁿ:

*   **a** is the **base**.

*   **n** is the **exponent** (or power or index).

*   aⁿ is read as "a raised to the power of n" or "a to the n-th power."
*   Example: 3⁴ = 3 × 3 × 3 × 3 = 81.

Laws of Exponents (Indices): These rules apply for real number bases a, b and rational exponents m, n (assuming expressions are defined, e.g., base is not zero for negative exponents, base is non-negative for even roots).

1.  **Product of Powers (Same Base):** \`aᵐ × aⁿ = aᵐ⁺ⁿ\`
    (When multiplying powers with the same base, add the exponents).
    *   Example: x³ × x⁵ = x³⁺⁵ = x⁸.
2.  **Quotient of Powers (Same Base):** \`aᵐ ÷ aⁿ = aᵐ⁻ⁿ\` (where \`a ≠ 0\`)
    (When dividing powers with the same base, subtract the exponent of the denominator from the exponent of the numerator).
    *   Example: y⁷ ÷ y² = y⁷⁻² = y⁵.
3.  **Power of a Power:** \`(aᵐ)ⁿ = aᵐⁿ\`
    (When raising a power to another power, multiply the exponents).
    *   Example: (z⁴)³ = z⁴ˣ³ = z¹².
4.  **Power of a Product:** \`(ab)ⁿ = aⁿbⁿ\`
    (The power of a product is the product of the powers of each factor).
    *   Example: (2p)³ = 2³p³ = 8p³.
5.  **Power of a Quotient:** \`(a/b)ⁿ = aⁿ/bⁿ\` (where \`b ≠ 0\`)
    (The power of a quotient is the quotient of the powers of the numerator and denominator).
    *   Example: (x/y)⁴ = x⁴/y⁴.
6.  **Zero Exponent:** \`a⁰ = 1\` (where a ≠ 0)
    (Any non-zero number raised to the power of zero is equal to 1).
    *   Example: 7⁰ = 1; (-5)⁰ = 1. (0⁰ is undefined or indeterminate).
7.  **Negative Exponent:** \`a⁻ⁿ = 1/aⁿ\` and \`1/a⁻ⁿ = aⁿ\` (where \`a ≠ 0\`)
    (A negative exponent indicates the reciprocal of the base raised to the corresponding positive exponent).
    *   Example: x⁻² = 1/x²; 3⁻¹ = 1/3¹ = 1/3.
8.  **Fractional Exponent (Rational Exponent):** \`a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ\`
    *   The denominator **n** of the fractional exponent becomes the **index** of the radical (root).
    *   The numerator **m** of the fractional exponent becomes the **power** to which the base (or its root) is raised.
    *   Requires a ≥ 0 if n is an even integer.
    *   In particular, a^(1/n) = ⁿ√a (the n-th root of a).
    *   Examples: 9^(1/2) = √9 = 3; 27^(2/3) = (³√27)² = (3)² = 9.

Radicals (Roots):
A radical expression, ⁿ√a, denotes the n-th root of a.

*   √a (or ²√a) denotes the **principal (non-negative) square root** of a.

*   ³√a denotes the **cube root** of a.
*   **n** is the **index** of the radical.

*   **a** is the **radicand** (the number or expression under the radical sign).

*   If n is even, a must be non-negative (a ≥ 0) for the n-th root to be a real number. The principal n-th root is non-negative.

*   If n is odd, a can be any real number, and the n-th root will have the same sign as a.

Properties of Radicals (Derived from laws of exponents, assuming radicals are defined as real numbers):

*   **Product Property:** ⁿ√(ab) = ⁿ√a × ⁿ√b
    (The n-th root of a product is the product of the n-th roots).

*   **Quotient Property:** ⁿ√(a/b) = ⁿ√a / ⁿ√b (where b ≠ 0)
    (The n-th root of a quotient is the quotient of the n-th roots).

*   **Nested Roots Property:** ᵐ√(ⁿ√a) = ᵐⁿ√a

*   **Simplification Identity:** ⁿ√(aⁿ) = a (if n is odd, or if n is even and a ≥ 0).
    *   If n is even and a can be negative, ⁿ√(aⁿ) = |a|. For introductory purposes, we often assume non-negative radicands when dealing with even roots to avoid complexity with absolute values, unless specified.

Simplifying Radicals:

*   **Removing Perfect n-th Powers from Radicands:** Factor the radicand into factors where at least one is a perfect n-th power.
    *   Example: √72 = √(36 × 2) = √36 × √2 = 6√2.
    *   Example: ³√54 = ³√(27 × 2) = ³√27 × ³√2 = 3³√2.

*   **Rationalizing the Denominator:** The process of eliminating radicals from the denominator of a fraction.
    *   **Single Radical Term in Denominator (e.g., c / ⁿ√aᵐ):** Multiply numerator and denominator by a radical that makes the radicand in the denominator a perfect n-th power. For c/√a, multiply by √a/√a.
        *   Example: 5/√3 = (5 × √3) / (√3 × √3) = 5√3 / 3.
    *   **Binomial Denominator with Square Roots (e.g., c / (√a ± √b) or c / (a ± √b)):** Multiply numerator and denominator by the **conjugate** of the denominator. The conjugate of (√a + √b) is (√a - √b), and vice-versa. The conjugate of (a + √b) is (a - √b). This uses the difference of squares: (x+y)(x-y) = x² - y².
        *   Example: 4 / (√5 - 1) = [4 × (√5 + 1)] / [(√5 - 1)(√5 + 1)] = 4(√5 + 1) / (5 - 1) = 4(√5 + 1) / 4 = √5 + 1.

(Suggested insertion: Numerous worked examples illustrating each law of exponents and each property/simplification technique for radicals. Ensure examples cover integer, negative, and fractional exponents.)`,
          "mcq": {
            "question": "Simplify the expression (x^6 * x^2) / x^4.",
            "options": [
              "x^2",
              "x^3",
              "x^4",
              "x^8"
            ],
            "correctAnswer": "x^4",
            "explanation": "According to the laws of exponents, when multiplying powers with the same base, you add the exponents (x^(6+2) = x^8). When dividing, you subtract the exponents (x^(8-4) = x^4)."
          }
        },
        {
          "title": "1.3 Approximations, Rounding, and Significant Figures",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=-X0amVzMKFo",
          "content": `In real-world applications and scientific measurements, exact values are often either impractical or impossible to obtain. Therefore, understanding how to work with approximations, how to round numbers appropriately, and how to express the precision of a number through significant figures is crucial.

Approximation: An estimation of a value that is close enough to the true value for a specific purpose. Calculations often involve approximations if exact values are complex or if input data is itself approximate. The symbol ≈ denotes "is approximately equal to."

Rounding Numbers:
The process of simplifying a number by reducing its digits while keeping its value close to the original. The specific digit to which a number is rounded depends on the context and the required level of precision.

General Rules for Rounding:

1.  **Identify the rounding digit:** The digit in the place value to which you are rounding (e.g., if rounding to the nearest tenth, the tenths digit is the rounding digit).
2.  **Examine the test digit:** Look at the digit immediately to the right of the rounding digit.
3.  **Rounding Up:** If the test digit is 5 or greater (5, 6, 7, 8, 9), increase the rounding digit by 1. If the rounding digit is 9 and rounds up to 10, carry over to the left.
4.  **Rounding Down (Keeping the Same):** If the test digit is less than 5 (0, 1, 2, 3, 4), keep the rounding digit as it is.
5.  **Replace/Drop Digits:** All digits to the right of the rounding digit become zeros if they are to the left of the decimal point. If they are to the right of the decimal point, they are simply dropped. Ensure the magnitude of the number is maintained by using zeros as placeholders if necessary for whole numbers.

Examples:
*   Round \`7,862\` to the nearest hundred: Rounding digit is 8 (hundreds). Test digit is 6 (≥ 5). Round 8 up to 9. Result: \`7,900\`.
*   Round \`3.14159\` to two decimal places (nearest hundredth): Rounding digit is 4 (hundredths). Test digit is 1 (< 5). Keep 4. Result: 3.14.
*   Round 28.972 to one decimal place (nearest tenth): Rounding digit is 9 (tenths). Test digit is 7 (≥ 5). Round 9 up to 10. Write 0 in tenths place, carry 1 to the 8. Result: 29.0. (The trailing zero is important to indicate rounding to one decimal place).
*   Round 498 to the nearest ten: Rounding digit is 9 (tens). Test digit is 8 (≥ 5). Round 9 up to 10. Result: 500.

Significant Figures (or Significant Digits):
The digits in a number that are considered reliable and contribute to its meaning in terms of precision. They include all digits known with certainty plus one estimated or uncertain digit.

Rules for Determining the Number of Significant Figures (s.f.):

1.  **Non-zero digits are always significant.**
    *   e.g., 123.45 has 5 s.f.
2.  **Zeros between non-zero digits (captive zeros) are always significant.**
    *   e.g., 7003 has 4 s.f.; \`5.008\` has 4 s.f.
3.  **Leading zeros (zeros to the left of the first non-zero digit) are NOT significant.** They only serve to locate the decimal point.
    *   e.g., 0.0052 has 2 s.f. (the 5 and 2); 0.02 has 1 s.f.
4.  **Trailing zeros (zeros at the end of a number):**
    *   Are **significant** IF the number contains a decimal point.
        *   e.g., 25.00 has 4 s.f.; 3.0 has 2 s.f.; 100.0 has 4 s.f.; \`0.0500\` has 3 s.f. (the 5, 0, 0).
    *   Are **ambiguous** IF the number is a whole number without a decimal point.
        *   e.g., 2500 could have 2 s.f. (if rounded to nearest hundred), 3 s.f. (if rounded to nearest ten and the tens digit happened to be zero), or 4 s.f. (if exact to the units place).
    *   To avoid ambiguity for trailing zeros in whole numbers:
        *   Use scientific notation: 2.5 × 10³ (2 s.f.), \`2.50 × 10³\` (3 s.f.), \`2.500 × 10³\` (4 s.f.).
        *   Place a decimal point at the end if all zeros are significant: \`2500.\` (indicates 4 s.f.).
        *   State the precision explicitly (e.g., "2500, measured to the nearest ten").

**Exact Numbers:** Numbers that are known with complete certainty (no measurement involved) are considered to have an **infinite** number of significant figures. This includes:
*   Numbers from definitions (e.g., 1 foot = 12 inches; 1 minute = 60 seconds).
*   Numbers from counting discrete objects (e.g., 3 apples, 25 students).
*   Integers in formulas (e.g., the '2' in ½bh or in C = 2πr).

Calculations Involving Significant Figures:
When performing calculations with measured numbers (which have limited significant figures), the result cannot be more precise than the least precise measurement used.

*   **Multiplication and Division:** The result should be rounded to have the **same number of significant figures** as the input number with the **fewest** significant figures.
    *   Example: \`(3.141 cm) × (2.5 cm) = 7.8525 cm².\` 3.141 has 4 s.f. 2.5 has 2 s.f. (least). Result should be rounded to 2 s.f.: \`7.9 cm²\`.

*   **Addition and Subtraction:** The result should be rounded to have the **same number of decimal places** as the input number with the **fewest** decimal places. (It's helpful to align numbers by their decimal points).
    *   Example: 12.573 m + 3.1 m + 0.04 m = 15.713 m.
        \`12.573\` has 3 decimal places. \`3.1\` has 1 decimal place (fewest). \`0.04\` has 2 decimal places. Result should be rounded to 1 decimal place: \`15.7 m\`.

**Rounding Procedure for Calculations:** It is generally best to carry extra digits through intermediate calculations and round **only the final answer** to the correct number of significant figures to avoid accumulating rounding errors.

When a calculation involves both multiplication/division and addition/subtraction, apply the rules in the order of operations, keeping track of significant figures at each type of operation (or better, keep extra guard digits until the very end and then determine the final precision based on the input numbers).

(Suggested insertion: More worked examples for rounding to different levels of precision. Clear, step-by-step examples of determining significant figures in various numbers. Detailed worked examples of calculations involving multiplication/division and addition/subtraction, showing how to apply the significant figure rules correctly.)`,
          "mcq": {
            "question": "A calculation involving measured numbers (3.12 cm * 4.5 cm) gives 14.04 cm². How should this answer be reported to the correct number of significant figures?",
            "options": [
              "14.04 cm²",
              "14.0 cm²",
              "14 cm²",
              "15 cm²"
            ],
            "correctAnswer": "14 cm²",
            "explanation": "In multiplication and division with measured numbers, the result should be rounded to the same number of significant figures as the measurement with the fewest significant figures. Here, 4.5 cm has two significant figures, which is the fewest. Therefore, 14.04 cm² must be rounded to two significant figures, which is 14 cm²."
          }
        },
        {
          "title": "1.4 Approaches to Problem Solving in Arithmetic",
          "image": "https://images.pexels.com/photos/6256077/pexels-photo-6256077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=Nx0SWj1y8jk",
          "content": `Many real-world problems, especially word problems, require more than just computational skill; they require understanding the problem, devising a strategy, executing it accurately, and reviewing the solution. A systematic approach can greatly enhance problem-solving effectiveness.

Polya's Four-Step Problem-Solving Process (A Widely Adopted Heuristic):
George Polya, a renowned mathematician, outlined a general framework for problem-solving:

**1. Understand the Problem (Devising a Plan for Understanding):**
*   **Read Carefully:** Read the problem statement thoroughly, perhaps several times, to ensure full comprehension.
*   **Identify the Unknown:** What exactly are you being asked to find or determine? Clearly state the goal.
*   **Identify the Given Information (Data and Conditions):** What facts, numbers, or conditions are provided in the problem? List them out.
*   **Identify Extraneous or Missing Information:** Is there any information given that is not needed? Is there any information missing that you need to find or assume (if appropriate)?
*   **Restate the Problem:** Try to explain the problem in your own words without changing its meaning.
*   **Visualize:** Can you draw a picture, diagram, table, or model to help represent the problem? For example, a number line, a bar model for fractions or ratios, or a simple sketch for geometry-related arithmetic problems.
*   **Clarify Terms:** Are there any words or terms you don't understand?

**2. Devise a Plan (Developing a Strategy):**
*   **Connect Given to Unknown:** Think about how the given information relates to what you need to find. What operations or concepts will link them?
*   **Look for Patterns:** Do you see any patterns in the numbers or conditions?
*   **Recall Similar Problems:** Have you solved a similar problem before? What methods did you use?
*   **Break Down the Problem:** If the problem is complex, break it into smaller, more manageable sub-problems. Solve each part.
*   **Work Backwards:** Sometimes it's helpful to start from the desired result and work backwards to the given information.
*   **Consider Different Strategies:** Could you:
    *   Use a formula directly?
    *   Make an organized list or table?
    *   Guess and check (systematically)?
    *   Look for a simpler case or an analogous problem?
    *   Write an equation (if variables are involved, more algebraic, but sometimes applicable to set up arithmetic steps)?
*   **Outline your Steps:** Mentally or on paper, outline the sequence of operations you plan to perform.

**3. Carry out the Plan (Executing the Strategy):**
*   Implement your chosen strategy step by step.
*   Perform calculations accurately. Double-check arithmetic.
*   Show your work clearly and neatly. This helps in tracking your steps and finding errors if any.
*   Keep track of units throughout the calculation.
*   Maintain appropriate precision (significant figures or decimal places) if dealing with measured quantities or approximations.
*   **Be persistent.** If one approach doesn't work, don't give up easily. Re-evaluate your plan or try another strategy.

**4. Look Back (Reviewing and Reflecting):** This is a crucial but often overlooked step.
*   **Check Your Answer:** Does the answer make sense in the context of the problem? Is it reasonable? (e.g., If you're calculating the number of buses needed, a fractional answer doesn't make sense).
*   **Verify:** Can you verify your solution by another method? Can you work the problem in reverse?
*   **Re-read the Question:** Did you answer the specific question that was asked?
*   **Units:** Is your answer in the correct units?
*   **Learn from the Process:** What did you learn from solving this problem? Could you have solved it more efficiently? Are there any key principles or techniques you can apply to future problems?
*   **Identify Errors:** If you made mistakes, try to understand why and learn from them.

Specific Arithmetic Problem-Solving Strategies and Tips:

*   **Keywords:** Be aware of keywords that often indicate specific mathematical operations (e.g., "sum," "total," "altogether" for addition; "difference," "less than," "how much more" for subtraction; "product," "times," "of" for multiplication; "quotient," "per," "ratio," "shared equally" for division).
*   **Order of Operations (BEDMAS/BODMAS/PEMDAS):** Crucial for complex calculations involving multiple operations: Brackets/Parentheses, Exponents/Orders, Division/Multiplication (left to right), Addition/Subtraction (left to right).
*   **Mental Math and Estimation:** Develop skills in mental arithmetic and estimation to quickly check the reasonableness of results.
*   **Multi-step Problems:** Break them down. Identify the information needed for each step.
*   **Practice Regularly:** Problem-solving skills improve with consistent practice across a variety of problem types.

By adopting a structured approach and practicing these strategies, students can build confidence and proficiency in solving arithmetic problems effectively.`,
          "mcqs": [
            {
              "question": "Which of the following numbers is an irrational number?",
              "options": [
                "√49",
                "3.14",
                "5/3",
                "√5"
              ],
              "correctAnswer": "√5",
              "explanation": "An irrational number cannot be expressed as a simple fraction and has a non-terminating, non-repeating decimal expansion. √49 = 7 (rational), 3.14 is a terminating decimal (rational), and 5/3 is a fraction (rational). √5 is irrational."
            },
            {
              "question": "What is the value of (16/81)^(-1/4)?",
              "options": [
                "2/3",
                "3/2",
                "4/9",
                "9/4"
              ],
              "correctAnswer": "3/2",
              "explanation": "The negative exponent inverts the base: (81/16)^(1/4). The exponent 1/4 means the 4th root. The 4th root of 81 is 3, and the 4th root of 16 is 2. So the answer is 3/2."
            },
            {
              "question": "How many significant figures are in the measurement 0.07020 grams?",
              "options": [
                "2",
                "3",
                "4",
                "5"
              ],
              "correctAnswer": "4",
              "explanation": "Leading zeros (0.0...) are not significant. Zeros between non-zero digits are significant. Trailing zeros after a decimal point are significant. Therefore, the digits 7, 0, 2, 0 are all significant, for a total of 4 significant figures."
            },
            {
              "question": "Which of the following is the first step in Polya's four-step problem-solving process?",
              "options": [
                "Devise a Plan",
                "Carry Out the Plan",
                "Look Back",
                "Understand the Problem"
              ],
              "correctAnswer": "Understand the Problem",
              "explanation": "Polya's four steps are: 1. Understand the Problem, 2. Devise a Plan, 3. Carry Out the Plan, and 4. Look Back. Understanding the problem is the essential first step."
            },
            {
              "question": "Rationalize the denominator of the expression 7 / (√5 + √2).",
              "options": [
                "7(√5 - √2) / 3",
                "7(√5 + √2) / 3",
                "√5 - √2",
                "7(√5 - √2)"
              ],
              "correctAnswer": "7(√5 - √2) / 3",
              "explanation": "To rationalize a binomial denominator, multiply the numerator and denominator by its conjugate, which is (√5 - √2). This gives [7(√5 - √2)] / [(√5 + √2)(√5 - √2)]. The denominator simplifies to (√5)² - (√2)² = 5 - 2 = 3."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 2: Ratio, Proportion, and Percentages",
      "image": "https://images.pexels.com/photos/5477714/pexels-photo-5477714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=djFApaAFIDY",
        "https://www.youtube.com/watch?v=JOZSFwuyqok",
        "https://www.youtube.com/watch?v=JeVSmq1Nrpw"
      ],
      "sections": [
        {
          "title": "2.1 Ratio and Proportional Reasoning",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=39GiaBZ5oKQ",
          "content": `In our daily lives and across various fields of study, we frequently encounter situations that require us to compare quantities, understand their relative sizes, or describe how they change in relation to one another. Ratios, proportions, and percentages are fundamental mathematical tools that provide precise ways to express these relationships. This chapter will explore the core concepts of ratio and proportional reasoning, distinguish between direct and inverse proportion, delve into calculations involving percentages (including common applications like percentage increase, decrease, profit, and loss), and apply these concepts to solve a variety of practical problems, such as those involving discounts, interest, and mixtures. Mastering these topics is essential for quantitative literacy and for problem-solving in many areas of mathematics and beyond.

Ratio:
A ratio is a comparison of two or more quantities of the same kind (i.e., measured in the same units, or capable of being converted to the same units). It indicates the relative sizes or amounts of these quantities.

Expressing Ratios:

*   Using a colon: a : b (read as "a is to b")

*   As a fraction: a/b

*   Using the word "to": "the ratio of a to b"

In the ratio a : b:

*   a is the first term or **antecedent**.
*   b is the second term or **consequent**.

Simplest Form: Ratios should always be expressed in their simplest form (or lowest terms) by dividing all parts of the ratio by their highest common factor (HCF) or greatest common divisor (GCD). The terms in a simplified ratio are co-prime.

*   Example: The ratio of 12 boys to 18 girls is 12 : 18. Dividing both by their HCF (6), the simplest form is 2 : 3.

Order Matters: The order of terms in a ratio is crucial. a : b is different from b : a unless a = b.

Comparing Quantities of the Same Kind: Ensure quantities are in the same units before forming a ratio.

*   Example: Ratio of 50 cm to 2 meters. Convert 2 meters to 200 cm. Ratio is 50 : 200, which simplifies to 1 : 4.

Continued Ratios: Used to compare more than two quantities (e.g., a : b : c). All parts are simplified by their HCF.

*   Example: If a recipe calls for 2 cups of flour, 1 cup of sugar, and 0.5 cups of butter, the ratio of flour to sugar to butter is 2 : 1 : 0.5. To express with integers, multiply all parts by 2: 4 : 2 : 1.

Using Ratios:

*   **Dividing a Quantity in a Given Ratio:** To divide a quantity Q in the ratio a : b, the parts will be:
    First part = (a / (a+b)) × Q
    Second part = (b / (a+b)) × Q
    The sum of the parts of the ratio (a+b) forms the denominator.
    *   Example: Divide $60 in the ratio 2 : 3.
        Sum of ratio parts = 2 + 3 = 5.
        First part = (2/5) × $60 = $24.
        Second part = (3/5) × $60 = $36. (Check: $24 + $36 = $60).
    This extends to ratios with more than two parts (e.g., for a : b : c, denominator is a+b+c).

*   **Comparing Ratios:** To compare two ratios, a : b and c : d, it is often easiest to express them as fractions (a/b and c/d) and then compare the fractions (e.g., by finding a common denominator or converting to decimals).

Rate:
A rate is a special type of ratio that compares two quantities of different kinds (i.e., measured in different units). The denominator is often a unit of time.

*   Examples: Speed (distance/time, e.g., km/hour), price rate (cost/item, e.g., $ per kg), flow rate (volume/time, e.g., liters/minute), heart rate (beats/minute).

*   A **unit rate** is a rate where the second quantity (denominator) is 1 unit (e.g., 60 km per 1 hour).

Proportional Reasoning:
This involves understanding and using the relationships expressed by ratios and rates to solve problems. It's about thinking multiplicatively rather than additively.

(Suggested insertion: Worked examples for simplifying ratios, dividing quantities in a given ratio, comparing ratios. Examples distinguishing between ratios and rates, and calculating unit rates.)`,
          "mcq": {
            "question": "A sum of $120 is to be divided between two people in the ratio 3:5. What is the value of the larger share?",
            "options": [
              "$45",
              "$60",
              "$75",
              "$90"
            ],
            "correctAnswer": "$75",
            "explanation": "The total number of parts in the ratio is 3 + 5 = 8. The larger share corresponds to the '5' part. The value of the larger share is (5/8) * $120 = $75."
          }
        },
        {
          "title": "2.2 Direct and Inverse Proportion",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=nOfnKgg2cEY",
          "content": `Proportion:
A proportion is a statement that two ratios (or two rates) are equal.

*   If the ratio a : b is equal to the ratio c : d, then a/b = c/d. This is a proportion.

*   In a proportion a : b = c : d (or a/b = c/d):
    *   a and d are called the **extremes**.
    *   b and c are called the **means**.

*   A key property: **Product of the extremes equals the product of the means.** ad = bc. This is useful for solving proportions.
    *   Example: Is 2 : 3 proportional to 4 : 6? Yes, because 2/3 = 4/6 (since 4/6 simplifies to 2/3). Also, 2 × 6 = 12 and 3 × 4 = 12. So ad = bc.

Types of Proportional Relationships between Two Variables (say, x and y):

**Direct Proportion (or Direct Variation):**

*   Two quantities x and y are in direct proportion if an increase in one quantity causes a proportional increase in the other quantity, and a decrease in one causes a proportional decrease in the other.

*   Their ratio is constant: **y/x = k** (where k is the constant of proportionality).

*   This can be written as **y = kx**.

*   Graphically, a direct proportion is represented by a straight line passing through the origin (0,0).

*   Keywords: "directly proportional to," "varies directly as."
*   Example: If you buy more apples (x), the total cost (y) increases proportionally (assuming a constant price per apple, k). The distance covered (y) is directly proportional to time (x) if speed (k) is constant.

*   If (x₁, y₁) and (x₂, y₂) are corresponding pairs of values in a direct proportion, then y₁/x₁ = y₂/x₂, or y₁/y₂ = x₁/x₂.

**Inverse Proportion (or Inverse Variation):**

*   Two quantities x and y are in inverse proportion if an increase in one quantity causes a proportional decrease in the other quantity, and a decrease in one causes a proportional increase in the other.

*   Their product is constant: **xy = k** (where k is the constant of proportionality).

*   This can be written as **y = k/x**.

*   Graphically, an inverse proportion is represented by a hyperbola.
*   Keywords: "inversely proportional to," "varies inversely as."

*   Example: If you increase the speed (x) to travel a fixed distance, the time taken (y) decreases proportionally. If more workers (x) are assigned to a task (assuming constant work rate), the time to complete the task (y) decreases.

*   If (x₁, y₁) and (x₂, y₂) are corresponding pairs of values in an inverse proportion, then x₁y₁ = x₂y₂, or y₁/y₂ = x₂/x₁.

Solving Proportion Problems:

1.  Identify the type of proportion (direct or inverse).
2.  Set up the proportion using ratios or the relationship y = kx (direct) or y = k/x (inverse).
3.  Use given information to find the constant of proportionality k if needed.
4.  Use the established relationship to find the unknown quantity.

**Compound Proportion:** Involves more than two quantities that are related by direct and/or inverse proportions.

(Suggested insertion: Tables comparing direct and inverse proportion (relationship, equation, graph). Worked examples for solving problems involving direct proportion and inverse proportion, including finding k and solving for unknowns.)`,
          "mcq": {
            "question": "If 8 workers can build a wall in 12 days, how long would it take 6 workers, assuming they work at the same rate?",
            "options": [
              "9 days",
              "16 days",
              "10 days",
              "18 days"
            ],
            "correctAnswer": "16 days",
            "explanation": "This is an inverse proportion. As the number of workers decreases, the time taken increases. The total work is 8 workers * 12 days = 96 worker-days. For 6 workers, the time taken is 96 worker-days / 6 workers = 16 days."
          }
        },
        {
          "title": "2.3 Percentage Calculations: Increase, Decrease, Profit & Loss",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=FbvsBnk2Btw",
          "content": `Percentage:
A percentage is a way of expressing a number as a fraction of 100.

*   The word "percent" means "per hundred" (from Latin "per centum"). The symbol for percent is %.

*   x% = x/100.

*   Percentages are commonly used to represent parts of a whole, changes in quantities, rates, and comparisons.

Conversions Involving Percentages:

*   **Percentage to Fraction:** Divide by 100 and simplify.
    *   Example: 75% = 75/100 = 3/4.

*   **Fraction to Percentage:** Multiply the fraction by 100%.
    *   Example: 2/5 = (2/5) × 100% = 40%.

*   **Percentage to Decimal:** Divide by 100 (or move the decimal point two places to the left).
    *   Example: 65% = 65/100 = 0.65. 8% = 0.08.

*   **Decimal to Percentage:** Multiply by 100% (or move the decimal point two places to the right).
    *   Example: 0.45 = 0.45 × 100% = 45%. 1.2 = 1.2 × 100% = 120%.

Basic Percentage Calculations:

*   **Finding a Percentage of a Quantity:** Convert the percentage to a fraction or decimal and multiply by the quantity.
    *   "What is P% of N?" Answer = (P/100) × N.
    *   Example: What is 20% of $80? (20/100) × $80 = 0.20 × $80 = $16.

*   **Expressing One Quantity as a Percentage of Another:** Divide the first quantity by the second, then multiply by 100%.
    *   "What percentage of B is A?" Answer = (A/B) × 100%.
    *   Example: What percentage of 50 is 10? (10/50) × 100% = 0.2 × 100% = 20%.

*   **Finding the Whole Quantity when a Percentage is Known:**
    *   "If P% of N is X, what is N?" (P/100) × N = X => N = X / (P/100) = (X × 100) / P.
    *   Example: If 25% of a number is 15, what is the number? N = (15 × 100) / 25 = 1500 / 25 = 60.

Percentage Increase and Decrease:
Measures the relative change in a quantity.

*   **Percentage Increase:**
    *   Percentage Increase = (Actual Increase / Original Value) × 100%
    *   where Actual Increase = New Value - Original Value.
    *   Alternatively, \`New Value = Original Value × (1 + Percentage Increase/100)\`.
    *   Example: Price increases from $40 to $50.
        Actual Increase = $50 - $40 = $10.
        Percentage Increase = ($10 / $40) × 100% = 0.25 × 100% = 25%.

*   **Percentage Decrease:**
    *   Percentage Decrease = (Actual Decrease / Original Value) × 100%
    *   where Actual Decrease = Original Value - New Value.
    *   Alternatively, \`New Value = Original Value × (1 - Percentage Decrease/100)\`.
    *   Example: Population decreases from 2000 to 1500.
        Actual Decrease = 2000 - 1500 = 500.
        Percentage Decrease = (500 / 2000) × 100% = 0.25 × 100% = 25%.

Profit and Loss Calculations:
Based on Cost Price (CP) and Selling Price (SP).

*   **Profit:** Occurs when Selling Price > Cost Price.
    *   Profit = SP - CP
    *   Percentage Profit = (Profit / CP) × 100%

*   **Loss:** Occurs when Selling Price < Cost Price.
    *   Loss = CP - SP
    *   Percentage Loss = (Loss / CP) × 100%

Note: Percentage profit or loss is always calculated based on the Cost Price (CP) unless otherwise stated.

*   **Finding SP:** SP = CP × (1 + Percentage Profit/100) or SP = CP × (1 - Percentage Loss/100).

*   **Finding CP:** CP = SP / (1 + Percentage Profit/100) or CP = SP / (1 - Percentage Loss/100).

(Suggested insertion: Worked examples for all types of percentage conversions and calculations. Clear examples for percentage increase/decrease problems, and profit/loss calculations showing how to find profit, loss, SP, or CP.)`,
          "mcq": {
            "question": "An item bought for $80 is sold for $100. What is the percentage profit?",
            "options": [
              "20%",
              "25%",
              "125%",
              "80%"
            ],
            "correctAnswer": "25%",
            "explanation": "Profit = Selling Price - Cost Price = $100 - $80 = $20. Percentage Profit = (Profit / Cost Price) * 100% = ($20 / $80) * 100% = (1/4) * 100% = 25%."
          }
        },
        {
          "title": "2.4 Application Problems (Discounts, Interest, Mixtures)",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=a7UFdRYTYOU",
          "content": `The concepts of ratio, proportion, and percentage are widely applied in various real-life scenarios.

Discounts: A reduction in the original price of an item.

*   **Discount Amount** = Percentage Discount × Marked Price.
*   **Selling Price (Sale Price)** = Marked Price - Discount Amount.
*   Or, **Selling Price** = Marked Price × (1 - Discount%/100).
*   Example: A shirt marked at $40 is offered at a 15% discount.
    Discount Amount = 15% of $40 = 0.15 × $40 = $6.
    Selling Price = $40 - $6 = $34.

Simple Interest (SI):

*   Interest calculated only on the original principal amount borrowed or invested.
*   **SI = P × R × T**
    *   where: P = Principal (initial amount), R = Rate of interest per year (as a decimal or fraction), T = Time period (in years).
*   **Amount (A)** = Principal (P) + Simple Interest (SI).
*   Example: Calculate simple interest on $500 at 6% per annum for 3 years.
    SI = 500 × 0.06 × 3 = $90.
    Amount = $500 + $90 = $590.

Compound Interest (CI):

*   Interest calculated on the initial principal and also on the accumulated interest of previous periods. "Interest on interest."
*   **Amount (A) = P (1 + R)ⁿ** (if compounded annually)
    *   where: P = Principal, R = Rate of interest per period, n = Number of periods.
*   If interest is compounded more frequently (e.g., half-yearly, quarterly, monthly):
    *   **A = P (1 + R/m)^(mt)**
    *   where R is annual rate, t is years, and m is the number of times interest is compounded per year.
*   **Compound Interest (CI)** = Amount (A) - Principal (P).
*   Example: $1000 invested at 5% per annum compounded annually for 2 years.
    A = 1000 (1 + 0.05)² = 1000 (1.05)² = 1000 × 1.1025 = $1102.50.
    CI = $1102.50 - $1000 = $102.50. (Compare with SI for same: SI = 1000 × 0.05 × 2 = $100).

Mixture Problems:

*   Involve combining two or more substances with different properties (e.g., different prices, different concentrations) to form a mixture.
*   Often require setting up equations based on the quantities and values (or concentrations) of the components and the resulting mixture.
*   Ratio and percentage concepts are frequently used.
*   Example: How many kilograms of tea costing $10/kg must be mixed with 20 kg of tea costing $15/kg to get a mixture costing $12/kg?
    Let x kg be the amount of $10/kg tea.
    Total value of components = Total value of mixture
    10(x) + 15(20) = 12(x + 20)
    10x + 300 = 12x + 240
    60 = 2x
    x = 30 kg.
    So, 30 kg of the $10/kg tea is needed.

Rates:

*   A ratio that compares two quantities measured in different units (e.g., speed in km/hour, flow rate in liters/minute, price in $/kg).
*   Problems often involve direct or inverse proportion.
*   **Unitary Method:** Finding the value of one unit first, then multiplying to find the required value.
    *   Example: If 5 pens cost $2.50, what is the cost of 8 pens?
        Cost of 1 pen = $2.50 / 5 = $0.50.
        Cost of 8 pens = 8 × $0.50 = $4.00.

Other applications include scale drawings, currency conversions, population density, etc.

(Suggested insertion: Worked examples for discount calculations, simple interest, compound interest (annually and more frequently), and different types of mixture and rate problems. Emphasize setting up the problem clearly using the principles of ratio, proportion, or percentage.)`,
          "mcqs": [
            {
              "question": "Simplify the ratio 75 cm to 3 meters.",
              "options": [
                "1:4",
                "75:3",
                "3:1",
                "4:1"
              ],
              "correctAnswer": "1:4",
              "explanation": "To form a ratio, quantities must be in the same units. 3 meters = 300 cm. The ratio is 75 cm : 300 cm. Dividing both sides by their HCF (75) gives 1:4."
            },
            {
              "question": "If y is directly proportional to x, and y = 20 when x = 4, what is the value of y when x = 7?",
              "options": [
                "28",
                "35",
                "40",
                "23"
              ],
              "correctAnswer": "35",
              "explanation": "In direct proportion, y = kx. Using the given values, 20 = k * 4, so the constant of proportionality k = 5. The relationship is y = 5x. When x = 7, y = 5 * 7 = 35."
            },
            {
              "question": "A shirt marked at $50 is sold with a 20% discount. What is the selling price?",
              "options": [
                "$10",
                "$30",
                "$40",
                "$60"
              ],
              "correctAnswer": "$40",
              "explanation": "The discount amount is 20% of $50, which is 0.20 * $50 = $10. The selling price is the marked price minus the discount: $50 - $10 = $40."
            },
            {
              "question": "What is the simple interest on a principal of $1000 at a rate of 5% per annum for 4 years?",
              "options": [
                "$50",
                "$200",
                "$1200",
                "$20"
              ],
              "correctAnswer": "$200",
              "explanation": "Simple Interest (SI) = P * R * T. SI = $1000 * (5/100) * 4 = $1000 * 0.05 * 4 = $200."
            },
            {
              "question": "A population of 5000 increases by 10%. What is the new population?",
              "options": [
                "500",
                "4500",
                "5010",
                "5500"
              ],
              "correctAnswer": "5500",
              "explanation": "The increase is 10% of 5000, which is 0.10 * 5000 = 500. The new population is the original population plus the increase: 5000 + 500 = 5500."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 3: Sets, Venn Diagrams, and Logic",
      "image": "https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=xZELQc11ACY",
        "https://www.youtube.com/watch?v=qoT42mKVf6c",
        "https://www.youtube.com/watch?v=iQx8cEqtbNM"
      ],
      "sections": [
        {
          "title": "3.1 Definitions: Sets, Subsets, Universal Sets",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=dApQL3JuHH0",
          "content": `The concept of a set is fundamental to mathematics, providing a basic way to group objects or ideas. Set theory, developed primarily by Georg Cantor in the late 19th century, is a cornerstone upon which many other mathematical disciplines are built. Venn diagrams offer a visual way to represent sets and their relationships. Alongside sets, basic logical principles allow us to analyze and construct valid arguments. This chapter introduces the definitions related to sets, explores operations on sets using Venn diagrams, and touches upon the basics of propositional logic.

Set:
A set is a **well-defined collection of distinct objects**, considered as an object in its own right. The objects in a set are called its **elements** or **members**.

*   **Well-defined:** means it must be clear whether a particular object belongs to the set or not. There should be no ambiguity.

*   **Distinct objects:** Each element in a set is unique; elements are not repeated. The order in which elements are listed does not matter.

Notation:

*   Sets are usually denoted by capital letters (e.g., A, B, S).

*   Elements are usually denoted by lowercase letters (e.g., a, b, x).

*   If x is an element of set A, we write **x ∈ A** (read as "x belongs to A" or "x is an element of A").

*   If y is not an element of set A, we write **y ∉ A** (read as "y does not belong to A").

Ways to Describe a Set:

1.  **Roster Method (or Tabulation Method):** Listing all the elements of the set, separated by commas, within curly braces {}.
    *   Example: Set A of vowels in English alphabet: A = {a, e, i, o, u}.
    *   Example: Set B of even numbers between 1 and 10: B = {2, 4, 6, 8}.

2.  **Set-Builder Notation (or Rule Method):** Describing the elements of the set by stating a property or rule that they must satisfy.
    *   Example: A = {x | x is a vowel in the English alphabet} (read as "A is the set of all x such that x is a vowel in the English alphabet").
    *   Example: B = {x | x is an even integer and 1 < x < 10}.

Types of Sets:

*   **Finite Set:** A set that contains a limited, countable number of distinct elements.
    *   Example: {1, 2, 3, 4}.

*   **Infinite Set:** A set that contains an unlimited number of distinct elements (elements cannot be counted).
    *   Example: The set of natural numbers N = {1, 2, 3, ...}. The set of real numbers.

*   **Empty Set (or Null Set):** A set that contains no elements.
    *   Denoted by **∅** or **{}**.
    *   Example: The set of whole numbers less than 0.

*   **Singleton Set:** A set that contains only one element.
    *   Example: {5}.

**Cardinality of a Set (n(A) or |A|):** The number of distinct elements in a set A.

*   Example: If A = {a, e, i, o, u}, then n(A) = 5.

*   n(∅) = 0.

**Subsets (⊂ or ⊆):**
Set A is a subset of set B if every element of A is also an element of B.

*   Notation: **A ⊆ B** (A is a subset of B, allowing A = B).

*   Notation: **A ⊂ B** (A is a **proper subset** of B, meaning A is a subset of B, and A ≠ B; i.e., B contains at least one element not in A).

*   Example: If A = {1, 2} and B = {1, 2, 3}, then A ⊂ B and A ⊆ B.

*   The empty set ∅ is a subset of every set.

*   Every set is a subset of itself (A ⊆ A).

**Power Set (P(A)):** The set of all possible subsets of a set A, including the empty set and the set itself. If a set A has n elements, then its power set P(A) has **2ⁿ** elements (subsets).

*   Example: If A = {1, 2}, then P(A) = {∅, {1}, {2}, {1, 2}}. n(A)=2, n(P(A))=2²=4.

**Universal Set (U or ξ):**
In a particular discussion or problem involving sets, the universal set is a larger, fixed set that contains all the elements or objects under consideration. All other sets in that context are subsets of the universal set.

*   The choice of the universal set depends on the context.
*   Example: If discussing vowels, U might be the set of all letters in the English alphabet. If discussing students in a school, U might be all students in that school.

**Equal Sets:** Two sets A and B are equal (A = B) if and only if they have exactly the same elements. The order of elements does not matter.

(Suggested insertion: Examples illustrating each definition (finite, infinite, empty sets, singleton, subset, proper subset, power set, universal set). Emphasis on notation.)`,
          "mcq": {
            "question": "If a set A has 4 elements, how many subsets does its power set P(A) contain?",
            "options": [
              "4",
              "8",
              "16",
              "24"
            ],
            "correctAnswer": "16",
            "explanation": "The number of subsets in the power set of a set with n elements is 2^n. If n=4, the number of subsets is 2^4 = 16."
          }
        },
        {
          "title": "3.2 Venn Diagrams for One, Two, Three Sets",
          "image": "https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=usDgoQUlojc",
          "content": `Venn Diagram: A pictorial representation of sets and the relationships between them.

*   Developed by John Venn.

*   The **universal set U** is usually represented by a rectangle.

*   **Sets** within the universal set are represented by circles (or other closed shapes) drawn inside the rectangle.

*   Elements of a set are typically represented by points within the circle representing that set (though more often, the regions are discussed in terms of properties or operations).

*   Overlapping regions of circles indicate common elements (intersection).

Representing Sets and Regions with Venn Diagrams:

*   **One Set (A):** A circle representing A inside the rectangle U.
    *   Region 1: Elements in A (A).
    *   Region 2: Elements not in A but in U (A').

*   **Two Sets (A and B):** Two (usually overlapping) circles representing A and B within U. This divides U into 4 distinct regions:
    1.  Elements in B only (B ∩ A').
    2.  Elements in A only (A ∩ B').
    3.  Elements in both A and B (A ∩ B).
    4.  Elements in neither A nor B (but in U) ((A ∪ B)' or A' ∩ B').

*   **Three Sets (A, B, and C):** Three (usually overlapping) circles. This divides U into 8 distinct regions, representing all possible combinations of membership:
    1.  Elements in A only.
    2.  Elements in B only.
    3.  Elements in C only.
    4.  Elements in A and B, but not C.
    5.  Elements in A and C, but not B.
    6.  Elements in B and C, but not A.
    7.  Elements in A and B and C (the central overlap).
    8.  Elements in U but in none of A, B, or C.

Venn diagrams are useful for visualizing set operations and for solving problems involving the number of elements in different combinations of sets (cardinality problems).

(Suggested insertion: Clear Venn diagrams for one set (shading A and A'), two overlapping sets (labeling and shading each of the 4 distinct regions like "A only", "B only", "A and B", "neither"), and three overlapping sets (labeling and possibly shading various combinations of the 8 distinct regions).)`,
          "mcq": {
            "question": "In a Venn diagram with two overlapping sets A and B, which region represents elements that are in B but not in A?",
            "options": [
              "A ∩ B",
              "A ∪ B",
              "A ∩ B'",
              "B ∩ A'"
            ],
            "correctAnswer": "B ∩ A'",
            "explanation": "The region representing elements in B only (in B but not in A) is the intersection of set B and the complement of set A, denoted as B ∩ A'."
          }
        },
        {
          "title": "3.3 Operations on Sets: Union, Intersection, Complement",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=ExleInzaBTI",
          "content": `These are basic operations that combine or modify sets.

**Union (∪):**

*   The union of two sets A and B, denoted by **A ∪ B**, is the set of all elements that are in set A, **or** in set B, **or** in both.

*   A ∪ B = {x | x ∈ A or x ∈ B}. (The "or" is inclusive).

*   In a Venn diagram, A ∪ B is represented by the entire area covered by circles A and B combined.

*   Properties: A ∪ B = B ∪ A (Commutative), A ∪ A = A, A ∪ ∅ = A, A ∪ U = U.

**Intersection (∩):**

*   The intersection of two sets A and B, denoted by **A ∩ B**, is the set of all elements that are in **both** set A **and** set B (i.e., common elements).

*   A ∩ B = {x | x ∈ A and x ∈ B}.

*   In a Venn diagram, A ∩ B is represented by the overlapping region of circles A and B.

*   **Disjoint Sets (or Mutually Exclusive Sets):** If two sets A and B have no elements in common, their intersection is the empty set (A ∩ B = ∅). Their circles in a Venn diagram do not overlap.

*   Properties: A ∩ B = B ∩ A (Commutative), A ∩ A = A, A ∩ ∅ = ∅, A ∩ U = A.

**Complement (A' or Aᶜ or A̅ ):**

*   The complement of a set A (with respect to a universal set U), denoted by **A'**, is the set of all elements in the universal set U that are **not** in set A.

*   A' = {x | x ∈ U and x ∉ A}.

*   In a Venn diagram, A' is represented by the region inside the rectangle (U) but outside the circle A.

*   Properties: (A')' = A, A ∪ A' = U, A ∩ A' = ∅, U' = ∅, ∅' = U.

**Set Difference (A - B or A \\ B):**

*   The difference of set A and set B, denoted A - B, is the set of all elements that are in A but not in B.

*   A - B = {x | x ∈ A and x ∉ B}.

*   This can also be expressed as **A - B = A ∩ B'**.

*   In a Venn diagram, A - B is the region of circle A that does not overlap with circle B.

*   Note: A - B ≠ B - A (unless A = B or both are empty).

**Cardinality of Set Operations (Inclusion-Exclusion Principle):**
Helps find the number of elements in the union of sets.

*   For two sets: **n(A ∪ B) = n(A) + n(B) - n(A ∩ B)**.
    (We subtract n(A ∩ B) because elements in the intersection are counted twice when we add n(A) and n(B) individually).

*   For three sets: **n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C)**.

**De Morgan's Laws (for sets):**
Relate union, intersection, and complement.

1.  **(A ∪ B)' = A' ∩ B'** (The complement of the union is the intersection of the complements).

2.  **(A ∩ B)' = A' ∪ B'** (The complement of the intersection is the union of the complements).

(Suggested insertion: Venn diagrams clearly illustrating (by shading) A∪B, A∩B, A', A-B. Example Venn diagrams shaded to show and verify De Morgan's laws. Worked examples of word problems involving finding cardinalities of different regions using Venn diagrams and the inclusion-exclusion principle for two and three sets.)`,
          "mcq": {
            "question": "According to De Morgan's Laws, what is (A ∪ B)' equivalent to?",
            "options": [
              "A' ∪ B'",
              "A' ∩ B'",
              "A ∩ B",
              "A ∪ B"
            ],
            "correctAnswer": "A' ∩ B'",
            "explanation": "De Morgan's Laws state that the complement of a union is the intersection of the complements, i.e., (A ∪ B)' = A' ∩ B'."
          }
        },
        {
          "title": "3.4 Basic Propositional Logic and Truth Tables",
          "image": "https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=TI8Swa-kFiw",
          "content": `**Proposition (Statement):** A declarative sentence that is either **true (T)** or **false (F)**, but not both. This truth value (T or F) is its defining characteristic.

*   Examples: "Accra is the capital of Ghana." (Proposition, True) "3 + 5 = 7." (Proposition, False)

*   Non-examples (not propositions): "What time is it?" (Question) "Close the door." (Command) "This statement is false." (Paradox - not simply T or F). "Mathematics is interesting." (Opinion - truth value is subjective).

**Logical Connectives (Operators):** Symbols or words used to combine or modify propositions to form compound propositions.

**Negation (NOT):** Symbolized by **¬** or **~**. Reverses the truth value of a proposition.

*   ¬P means "not P". If P is true, ¬P is false. If P is false, ¬P is true.

*   Truth Table for Negation:
    | P | ¬P |
    |---|----|
    | T | F  |
    | F | T  |

**Conjunction (AND):** Symbolized by **∧**. P ∧ Q means "P and Q".

*   P ∧ Q is **true if and only if both P and Q are true**. It is false otherwise.

*   Truth Table for Conjunction:
    | P | Q | P ∧ Q |
    |---|---|-------|
    | T | T | T     |
    | T | F | F     |
    | F | T | F     |
    | F | F | F     |

**Disjunction (OR):** Symbolized by **∨**. P ∨ Q means "P or Q" (this is an **inclusive OR**, meaning P or Q or both).

*   P ∨ Q is **true if at least one of P or Q is true** (i.e., if P is true, or Q is true, or both are true). It is false only if both P and Q are false.

*   Truth Table for Disjunction:
    | P | Q | P ∨ Q |
    |---|---|-------|
    | T | T | T     |
    | T | F | T     |
    | F | T | T     |
    | F | F | F     |

**Conditional (IMPLICATION, IF...THEN...):** Symbolized by **→**. P → Q means "If P, then Q".

*   P is called the **antecedent** (or hypothesis). Q is called the **consequent** (or conclusion).

*   P → Q is **false only when P is true and Q is false**. In all other cases, it is true. (This can be thought of as a promise: "If P happens (True), then Q will happen (True)." The only way the promise is broken (False) is if P happens but Q does not).

*   Truth Table for Conditional:
    | P | Q | P → Q |
    |---|---|-------|
    | T | T | T     |
    | T | F | F     |
    | F | T | T     |
    | F | F | T     |

**Biconditional (IF AND ONLY IF, IFF):** Symbolized by **↔**. P ↔ Q means "P if and only if Q".

*   P ↔ Q is **true if and only if P and Q have the same truth value** (i.e., both are true, or both are false).

*   It is equivalent to (P → Q) ∧ (Q → P).

*   Truth Table for Biconditional:
    | P | Q | P ↔ Q |
    |---|---|-------|
    | T | T | T     |
    | T | F | F     |
    | F | T | F     |
    | F | F | T     |

**Truth Tables for Compound Propositions:**
Truth tables are used to determine the truth value of a compound proposition for all possible combinations of truth values of its simple components.

*   A statement that is always true, regardless of the truth values of its components, is a **tautology**.

*   A statement that is always false is a **contradiction**.

*   A statement that can be true or false is a **contingency**.

**Logical Equivalence (≡):** Two compound propositions are logically equivalent if they have the same truth values for all possible combinations of truth values of their simple components (i.e., their truth tables have identical final columns).

Examples of important equivalences:

*   **De Morgan's Laws (for logic):**
    *   ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
    *   ¬(P ∨ Q) ≡ ¬P ∧ ¬Q

*   **Conditional equivalence:** P → Q ≡ ¬P ∨ Q

*   **Contrapositive:** P → Q is logically equivalent to its contrapositive **¬Q → ¬P**.

*   **Converse** of P → Q is **Q → P**. (Not equivalent to original).

*   **Inverse** of P → Q is **¬P → ¬Q**. (Not equivalent to original, but equivalent to converse).

(Suggested insertion: Clearly constructed truth tables for all basic connectives. Examples of forming simple compound propositions and determining their truth values from given P and Q values. An example of constructing a full truth table for a more complex compound statement, e.g., (P ∧ ¬Q) → (P ∨ Q), and identifying it as a tautology, contradiction, or contingency. Examples showing logical equivalence (e.g., conditional and its contrapositive) using truth tables.)`,
          "mcqs": [
            {
              "question": "If P is True and Q is False, what is the truth value of the proposition P → Q?",
              "options": [
                "True",
                "False",
                "Both True and False",
                "Cannot be determined"
              ],
              "correctAnswer": "False",
              "explanation": "The conditional statement (implication) P → Q is only false when the antecedent (P) is true and the consequent (Q) is false. In all other cases, it is true."
            },
            {
              "question": "What does n(A ∪ B) equal, according to the Inclusion-Exclusion Principle?",
              "options": [
                "n(A) + n(B)",
                "n(A) + n(B) + n(A ∩ B)",
                "n(A) + n(B) - n(A ∩ B)",
                "n(A) * n(B)"
              ],
              "correctAnswer": "n(A) + n(B) - n(A ∩ B)",
              "explanation": "The Inclusion-Exclusion Principle for two sets states that the number of elements in the union of A and B is the sum of their individual elements minus the number of elements in their intersection (to avoid double-counting)."
            },
            {
              "question": "Which of the following represents the empty set?",
              "options": [
                "{0}",
                "0",
                "{}",
                "{∅}"
              ],
              "correctAnswer": "{}",
              "explanation": "The empty set, which is a set containing no elements, is denoted by ∅ or {}. {0} is a set with one element (zero), and {∅} is a set with one element (the empty set symbol itself)."
            },
            {
              "question": "In a Venn diagram for three sets A, B, and C, how many distinct regions are there in total within the universal set?",
              "options": [
                "3",
                "6",
                "7",
                "8"
              ],
              "correctAnswer": "8",
              "explanation": "Three overlapping circles divide the universal set into 8 distinct regions, representing all possible combinations of membership, including the region outside all three circles."
            },
            {
              "question": "A statement that is always true regardless of the truth values of its components is called a:",
              "options": [
                "Contradiction",
                "Contingency",
                "Proposition",
                "Tautology"
              ],
              "correctAnswer": "Tautology",
              "explanation": "A tautology is a compound proposition that is always true. A contradiction is always false, and a contingency can be either true or false."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 4: Algebraic Expressions and Formulae",
      "image": "https://images.pexels.com/photos/6256072/pexels-photo-6256072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=OF2GtIinL_s",
        "https://www.youtube.com/watch?v=NybHckSEQBI",
        "https://www.youtube.com/watch?v=m3pUbUBJpDk"
      ],
      "sections": [
        {
          "title": "4.1 Algebraic Identities and Factorization",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=Q3GDZrnLtE8",
          "content": `Algebra extends arithmetic by using letters (variables) and other symbols to represent numbers and quantities, allowing us to express general relationships and solve for unknown values. An algebraic expression is a combination of variables, constants, and algebraic operations. A formula is a specific type of algebraic equation that expresses a relationship between two or more quantities. This chapter will cover the manipulation of algebraic expressions, including the use of algebraic identities, factorization techniques, simplification of rational expressions, and operations involving surds and indices. It will also emphasize the practical application of formulae in various real-life contexts.

**Algebraic Expression:** A mathematical phrase that can contain ordinary numbers (constants), variables (letters representing numbers), and operators (like +, –, ×, ÷, exponents, roots).

*   **Terms:** Parts of an expression separated by addition (+) or subtraction (–) signs. Each term is a product of constants and/or variables.
    *   Example: In 3x² - 5xy + 7, the terms are 3x², -5xy, and 7.
*   **Coefficient:** The numerical part of a term that includes variables (e.g., in 3x², the coefficient is 3).
*   **Like Terms:** Terms that have the exact same variable parts raised to the exact same powers (e.g., 3x²y and -2x²y are like terms; 3x²y and 3xy² are not). Like terms can be combined by adding or subtracting their coefficients.

**Polynomial:** An algebraic expression consisting of one or more terms, where each term is a constant, a variable, or a product of constants and variables raised to non-negative integer powers.

*   **Monomial:** A polynomial with one term (e.g., 5x, 7, -2ab²).
*   **Binomial:** A polynomial with two unlike terms (e.g., x + 3, 2a² - b).
*   **Trinomial:** A polynomial with three unlike terms (e.g., x² + 5x + 6).
*   **Degree of a Term:** The sum of the exponents of the variables in that term.
*   **Degree of a Polynomial:** The highest degree of any of its terms.

**Algebraic Identities (Special Products):**
Equations that are true for all possible values of the variables involved. These are fundamental for expanding products and for factorization.

*   Square of a Sum: **(a + b)² = a² + 2ab + b²**
*   Square of a Difference: **(a - b)² = a² - 2ab + b²**
*   Difference of Two Squares: **(a + b)(a - b) = a² - b²**
*   Cube of a Sum: **(a + b)³ = a³ + 3a²b + 3ab² + b³**
*   Cube of a Difference: **(a - b)³ = a³ - 3a²b + 3ab² - b³**
*   Sum of Two Cubes: **a³ + b³ = (a + b)(a² - ab + b²)**
*   Difference of Two Cubes: **a³ - b³ = (a - b)(a² + ab + b²)**
*   Product of Binomials (general form leading to quadratic trinomial): **(x + a)(x + b) = x² + (a + b)x + ab**

**Factorization (Factoring):**
The process of writing an algebraic expression as a product of its factors (simpler expressions which, when multiplied together, give the original expression). It is the reverse of expansion.
Common Factorization Techniques:

1.  **Highest Common Factor (HCF or GCF):** Find the greatest factor (numerical and/or variable) common to all terms in the expression and "factor it out" using the distributive property in reverse.
    *   Example: 6x²y - 9xy³ + 3xy = 3xy(2x - 3y² + 1).

2.  **Difference of Two Squares:** Apply a² - b² = (a + b)(a - b).
    *   Example: x² - 25 = x² - 5² = (x + 5)(x - 5).
    *   Example: 16p⁴ - 81q² = (4p²)² - (9q)² = (4p² + 9q)(4p² - 9q) = (4p² + 9q)(2p + 3q)(2p - 3q).

3.  **Quadratic Trinomials of the form x² + bx + c:** Look for two numbers, p and q, such that p × q = c (their product is the constant term) and p + q = b (their sum is the coefficient of the x-term). If such numbers are found, then x² + bx + c = (x + p)(x + q).
    *   Example: x² + 7x + 10. Numbers are 2 and 5 (2×5=10, 2+5=7). So, (x + 2)(x + 5).
    *   Example: x² - 3x - 18. Numbers are -6 and 3 (-6×3=-18, -6+3=-3). So, (x - 6)(x + 3).

4.  **Quadratic Trinomials of the form ax² + bx + c (where a ≠ 1):**
    *   **Trial and Error (or Inspection):** Systematically test combinations of factors for the ax² term and the c term.
    *   **Grouping Method (AC Method):** Find two numbers, p and q, such that p × q = ac and p + q = b. Then rewrite the middle term bx as px + qx, and factor by grouping.
        *   Example: 2x² + 11x + 12. ac = 2×12 = 24. Find factors of 24 that sum to 11 (which are 3 and 8).
            2x² + 3x + 8x + 12 = x(2x + 3) + 4(2x + 3) = (x + 4)(2x + 3).

5.  **Perfect Square Trinomials:** Recognize and apply a² + 2ab + b² = (a + b)² or a² - 2ab + b² = (a - b)².
    *   Example: 9x² - 12xy + 4y² = (3x)² - 2(3x)(2y) + (2y)² = (3x - 2y)².

6.  **Sum or Difference of Two Cubes:** Apply a³ + b³ = (a + b)(a² - ab + b²) or a³ - b³ = (a - b)(a² + ab + b²).
    *   Example: 8p³ + 27 = (2p)³ + 3³ = (2p + 3)((2p)² - (2p)(3) + 3²) = (2p + 3)(4p² - 6p + 9).

7.  **Factorization by Grouping (for expressions with four or more terms):** Group terms that have common factors, factor out the HCF from each group, and then look for a common binomial factor.
    *   Example: ax - ay + bx - by = a(x - y) + b(x - y) = (a + b)(x - y).

(Suggested insertion: For each algebraic identity, provide examples showing how to expand a product and how to factor an expression. Offer step-by-step worked examples for each factorization technique, starting with simpler cases and moving to more complex ones.)`,
          "mcq": {
            "question": "What is the complete factorization of the expression x² - 36?",
            "options": [
              "(x - 6)²",
              "(x + 6)²",
              "(x - 6)(x + 6)",
              "x(x - 36)"
            ],
            "correctAnswer": "(x - 6)(x + 6)",
            "explanation": "This expression is a difference of two squares, a² - b², where a=x and b=6. The factorization is (a - b)(a + b), which is (x - 6)(x + 6)."
          }
        },
        {
          "title": "4.2 Simplifying Rational Expressions",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=e1nXKl3yvWc",
          "content": `**Rational Algebraic Expression:** An algebraic fraction where both the numerator and the denominator are polynomials (and the denominator is not equal to zero).

*   Examples: (x + 2) / (x - 3), (y² - 4) / (y² + 5y + 6), (5a) / (a²b).

**Simplifying Rational Expressions (Reducing to Lowest Terms):**

1.  Factor the numerator completely.
2.  Factor the denominator completely.
3.  Cancel out (divide out) any common factors that appear in both the numerator and the denominator. Remember k/k = 1 for k ≠ 0.
4.  State any restrictions on the variables that would make the original denominator(s) zero (as these values are not permissible).

*   Example: Simplify (x² - 4) / (x² + x - 6).
    Factor numerator: x² - 4 = (x - 2)(x + 2).
    Factor denominator: x² + x - 6 = (x + 3)(x - 2).
    So, [(x - 2)(x + 2)] / [(x + 3)(x - 2)].
    Cancel common factor (x - 2) (provided x - 2 ≠ 0, i.e., x ≠ 2).
    Simplified form: (x + 2) / (x + 3), for x ≠ 2 and x ≠ -3 (from original denominator).

**Operations with Rational Expressions:**

**Multiplication:**

*   (A/B) × (C/D) = (A × C) / (B × D).

*   Steps:
    1.  Factor all numerators and denominators.
    2.  Multiply the numerators. Multiply the denominators.
    3.  Cancel out common factors from the combined numerator and denominator. (It's often easier to cancel common factors before fully multiplying).
    *   Example: [(x² - 1)/(x² + 4x + 3)] × [(x + 3)/(x - 1)²]
        = [((x-1)(x+1))/((x+1)(x+3))] × [(x+3)/((x-1)(x-1))]
        Cancel (x-1), (x+1), (x+3).
        Result: 1 / (x-1), for x ≠ 1, -1, -3.

**Division:**

*   (A/B) ÷ (C/D) = (A/B) × (D/C) = (A × D) / (B × C).

*   Steps:
    1.  Invert the second fraction (the divisor) to find its reciprocal.
    2.  Change the division operation to multiplication.
    3.  Proceed as with multiplication (factor, multiply, cancel).

**Addition and Subtraction:**

*   Require a common denominator, preferably the **Least Common Denominator (LCD)**. The LCD is the Least Common Multiple (LCM) of the denominators.

*   Steps:
    1.  Factor each denominator completely.
    2.  Find the LCD.
    3.  Rewrite each fraction as an equivalent fraction with the LCD (by multiplying its numerator and denominator by the necessary factors).
    4.  Add or subtract the numerators, keeping the common denominator.
    5.  Simplify the resulting numerator, and then simplify the entire rational expression if possible by factoring and canceling.
    *   Example: (3 / (x + 1)) + (2 / (x - 2))
        LCD = (x + 1)(x - 2).
        = [3(x - 2) / ((x + 1)(x - 2))] + [2(x + 1) / ((x + 1)(x - 2))]
        = [3x - 6 + 2x + 2] / [(x + 1)(x - 2)]
        = (5x - 4) / ((x + 1)(x - 2)).

**Complex Fractions (or Compound Fractions):** Rational expressions that have fractions in their numerator, denominator, or both.

*   To simplify, multiply the main numerator and main denominator by the LCD of all the "minor" fractions within the expression.

(Suggested insertion: Step-by-step worked examples for each operation (simplification, multiplication, division, addition, subtraction) with rational expressions, ensuring different factoring techniques are demonstrated. Include an example of simplifying a complex fraction.)`,
          "mcq": {
            "question": "Simplify the rational expression (x² - 9) / (x + 3).",
            "options": [
              "x + 3",
              "x - 3",
              "x - 9",
              "Cannot be simplified"
            ],
            "correctAnswer": "x - 3",
            "explanation": "First, factor the numerator: x² - 9 = (x - 3)(x + 3). The expression becomes [(x - 3)(x + 3)] / (x + 3). The common factor (x + 3) can be canceled, leaving x - 3 (for x ≠ -3)."
          }
        },
        {
          "title": "4.3 Surds and Indices (Fractional and Negative)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=GipavLCnke0",
          "content": `(This section builds upon Chapter 1.2, focusing on algebraic manipulation.)
**Surd:** An expression involving an irrational root of a rational number (e.g., √3, 5√2, ³√7). Usually implies square roots unless specified.
**Indices (Exponents):** As defined previously. Here we apply rules to algebraic terms.

**Simplifying and Operating with Surds in Algebraic Contexts:**

*   **Simplifying Surds with Variables:** √(a²b) = √(a²) × √b = |a|√b. If a is assumed positive, then a√b.
    *   Example: √(18x³y⁴) = √(9x²y⁴ × 2x) = 3|x|y²√(2x). (Assume x≥0 for simplicity: 3xy²√(2x)).

*   **Like Surds:** Surds with the same radicand and the same index can be added or subtracted by combining their coefficients.
    *   Example: 5x√y - 2x√y = (5x - 2x)√y = 3x√y.

*   **Multiplication of Surds:** aⁿ√x × bⁿ√y = abⁿ√(xy).
    *   Example: (2√a)(3b√c) = 6b√(ac).
    *   Expanding expressions like (√x + √y)(√x - √y) = (√x)² - (√y)² = x - y.

*   **Division and Rationalizing Denominators with Variables:**
    *   Example: p / √q = (p√q) / q.
    *   Example: x / (√y + z) = [x(√y - z)] / [(√y + z)(√y - z)] = [x(√y - z)] / (y - z²).

**Manipulation with Fractional and Negative Indices in Algebraic Expressions:**
Apply the laws of exponents (from Chapter 1.2) to terms with variables.

*   Product Rule: xᵐ ⋅ xⁿ = xᵐ⁺ⁿ
*   Quotient Rule: xᵐ / xⁿ = xᵐ⁻ⁿ
*   Power Rule: (xᵐ)ⁿ = xᵐⁿ
*   Power of a Product: (xy)ⁿ = xⁿyⁿ
*   Power of a Quotient: (x/y)ⁿ = xⁿ/yⁿ
*   Zero Exponent: x⁰ = 1 (for x ≠ 0)
*   Negative Exponent: x⁻ⁿ = 1/xⁿ and 1/x⁻ⁿ = xⁿ
*   Fractional Exponent: x^(m/n) = ⁿ√(xᵐ) = (ⁿ√x)ᵐ

**Simplifying Complex Expressions:** Combine rules.

*   Example: Simplify (a^(3/2) b⁻¹) / (a^(1/2) b²)²
    Denominator: (a^(1/2) b²)² = (a^(1/2))² (b²)² = a¹b⁴ = ab⁴.
    Expression: (a^(3/2) b⁻¹) / (ab⁴) = a^((3/2)-1) b^(-1-4) = a^(1/2) b⁻⁵ = √a / b⁵.

*   Example: Express with positive indices only: (2x⁻³y²) / (4x²y⁻⁴) = (2/4) x⁻³⁻² y²⁻⁽⁻⁴⁾ = (1/2) x⁻⁵ y⁶ = y⁶ / (2x⁵).

(Suggested insertion: Further worked examples covering algebraic terms with surds, operations involving algebraic surds (including binomials with surds), and simplification of complex algebraic expressions using various laws of indices for fractional and negative powers.)`,
          "mcq": {
            "question": "Simplify the expression (27x^6)^(1/3).",
            "options": [
              "9x²",
              "3x²",
              "3x³",
              "9x³"
            ],
            "correctAnswer": "3x²",
            "explanation": "Apply the exponent (1/3) to both parts of the product. The cube root of 27 is 3. For the variable, multiply the exponents: 6 * (1/3) = 2. The result is 3x²."
          }
        },
        {
          "title": "4.4 Use of Formulae in Real‐Life Contexts",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=DHTfWycghDo",
          "content": `A **formula** is an algebraic equation that expresses a concise relationship between two or more variable quantities. Formulae are used extensively to model real-world phenomena in fields like science, engineering, finance, business, and everyday life.

**Understanding a Formula:**

1.  Identify each variable and what it represents (including units).
2.  Understand the relationship expressed by the formula.

**Using a Formula (Substitution):**

1.  Write down the formula clearly.
2.  Identify the values of the known variables given in the problem. Ensure they are in consistent units.
3.  Substitute these known values into the formula.
4.  Perform the arithmetic operations carefully (following order of operations) to find the value of the unknown variable (the subject of the formula).
5.  State the answer with the correct units.

**Changing the Subject of a Formula (Rearranging):**
Often, you need to find the value of a variable that is not the original subject of the formula. This requires rearranging the formula to make the desired variable the subject.

*   Use inverse algebraic operations to isolate the target variable on one side of the equation. Apply operations to both sides to maintain equality.
*   Think of "undoing" the operations in reverse order (e.g., undo addition/subtraction first, then multiplication/division, then exponents/roots, then brackets from outside in).

*   **Example 1:** Formula for circumference of a circle: C = 2πr.
    *   Make r the subject: Divide both sides by 2π => r = C / (2π).

*   **Example 2:** Formula for area of a trapezium: A = ½ (a + b) h.
    *   Make h the subject:
        Multiply by 2: 2A = (a + b) h
        Divide by (a + b): h = 2A / (a + b).
    *   Make a the subject:
        2A = (a + b) h
        2A/h = a + b
        a = (2A/h) - b.

*   **Example 3:** Kinetic energy formula: K = ½ mv².
    *   Make v the subject (assuming v > 0):
        2K = mv²
        2K/m = v²
        v = √(2K/m).

**Application Contexts for Formulae:**

*   **Geometry:** Area, perimeter, volume of various shapes.
*   **Physics:** Equations of motion (e.g., v = u + at, s = ut + ½at²), Ohm's Law (V = IR), density (ρ = m/V), energy (E = mc², K = ½mv²).
*   **Finance:** Simple interest (I = PRT/100), compound interest (A = P(1 + r/n)^(nt)), currency conversion rates.
*   **Business:** Profit (P = Revenue - Cost), break-even analysis.
*   **Health and Everyday Life:** Body Mass Index (BMI), temperature conversion (C to F), dosage calculations, fuel consumption.

Being able to select, substitute into, and manipulate formulae confidently is a key mathematical skill for practical problem-solving.

(Suggested insertion: A variety of real-life word problems that require selecting an appropriate (given or commonly known) formula, substituting values, solving for an unknown, and changing the subject of the formula. Ensure different contexts like geometry, basic physics, and finance are covered.)`,
          "mcqs": [
            {
              "question": "Factorize the quadratic trinomial x² + 5x + 6.",
              "options": [
                "(x + 6)(x + 1)",
                "(x + 5)(x + 1)",
                "(x + 2)(x + 3)",
                "(x - 2)(x - 3)"
              ],
              "correctAnswer": "(x + 2)(x + 3)",
              "explanation": "We need two numbers that multiply to 6 and add to 5. These numbers are 2 and 3. Therefore, the factorization is (x + 2)(x + 3)."
            },
            {
              "question": "What is the result of (2/x) + (3/(x+1))?",
              "options": [
                "5 / (2x+1)",
                "(5x + 2) / (x(x+1))",
                "5 / (x(x+1))",
                "(2x + 5) / (x(x+1))"
              ],
              "correctAnswer": "(5x + 2) / (x(x+1))",
              "explanation": "The least common denominator (LCD) is x(x+1). The expression becomes [2(x+1) / x(x+1)] + [3x / x(x+1)]. Adding the numerators gives (2x + 2 + 3x) / x(x+1), which simplifies to (5x + 2) / (x(x+1))."
            },
            {
              "question": "Simplify √50.",
              "options": [
                "2√5",
                "5√2",
                "10√5",
                "25√2"
              ],
              "correctAnswer": "5√2",
              "explanation": "To simplify a surd, find the largest perfect square factor of the radicand. 50 = 25 * 2. So, √50 = √(25 * 2) = √25 * √2 = 5√2."
            },
            {
              "question": "The formula for the area of a triangle is A = (1/2)bh. If you make 'h' the subject of the formula, what is the result?",
              "options": [
                "h = 2A/b",
                "h = A/(2b)",
                "h = 2Ab",
                "h = Ab/2"
              ],
              "correctAnswer": "h = 2A/b",
              "explanation": "Start with A = (1/2)bh. Multiply both sides by 2 to get 2A = bh. Then, divide both sides by b to isolate h, resulting in h = 2A/b."
            },
            {
              "question": "Which algebraic identity represents the difference of two squares?",
              "options": [
                "(a + b)² = a² + 2ab + b²",
                "(a - b)² = a² - 2ab + b²",
                "a² - b² = (a - b)(a + b)",
                "a³ - b³ = (a - b)(a² + ab + b²)"
              ],
              "correctAnswer": "a² - b² = (a - b)(a + b)",
              "explanation": "The difference of two squares identity states that a² - b² can be factored into the product of (a - b) and (a + b)."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 5: Equations and Inequalities",
      "image": "https://images.pexels.com/photos/18069230/pexels-photo-18069230.png?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=DrZJKdXlZ3I",
        "https://www.youtube.com/watch?v=e_tY6X5PwWw",
        "https://www.youtube.com/watch?v=VLxGvhm-myQ"
      ],
      "sections": [
        {
          "title": "5.1 Linear Equations in One Variable",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=Ft2_QtXAnh8",
          "content": `Equations and inequalities are fundamental tools in algebra used to model and solve a wide range of problems where relationships between quantities exist, and unknown values need to be determined. An equation asserts that two algebraic expressions are equal, while an inequality describes a relationship where one expression is greater than, less than, greater than or equal to, or less than or equal to another. This chapter focuses on methods for solving linear equations, systems of simultaneous linear equations, quadratic equations, and both linear and quadratic inequalities.

A linear equation in one variable is an equation that can be written in the standard form:
**ax + b = c**
or more commonly **ax + b = 0** (where a ≠ 0), where x is the variable, and a, b, and c are constants. The highest power of the variable x is 1. The "solution" or "root" of such an equation is the value of x that makes the equation a true statement.

**Solving Linear Equations in One Variable:**
The goal is to isolate the variable x on one side of the equation. This is achieved by applying inverse operations to both sides of the equation to maintain equality.

1.  **Simplify Both Sides:** If necessary, use the distributive property to remove any parentheses. Combine any like terms on each side of the equation separately.
2.  **Isolate the Variable Term:** Use addition or subtraction to move all terms containing the variable to one side of the equation and all constant terms to the other side.
3.  **Solve for the Variable:** Use multiplication or division to make the coefficient of the variable equal to 1.

*   **Example 1:** Solve 5x - 7 = 13
    5x - 7 + 7 = 13 + 7 (Add 7 to both sides)
    5x = 20
    5x / 5 = 20 / 5 (Divide by 5)
    x = 4

*   **Example 2:** Solve 3(y + 2) - 5 = 2y + 9
    3y + 6 - 5 = 2y + 9 (Distribute)
    3y + 1 = 2y + 9 (Combine like terms)
    3y - 2y + 1 = 2y - 2y + 9 (Subtract 2y from both sides)
    y + 1 = 9
    y + 1 - 1 = 9 - 1 (Subtract 1 from both sides)
    y = 8

**Equations with Fractions:** It's often easiest to first eliminate the denominators by multiplying every term in the equation by the Least Common Denominator (LCD) of all the fractions.

**Checking the Solution:** Substitute the found value of the variable back into the original equation to verify that it makes the equation true.

**Word Problems Leading to Linear Equations:**
A common application is translating real-world problems into algebraic equations.

1.  Read the problem carefully to understand what is being asked and what information is given.
2.  Define a variable (e.g., x) to represent the unknown quantity.
3.  Translate the words and relationships in the problem into an algebraic equation involving the variable.
4.  Solve the equation using the methods above.
5.  Answer the question posed in the problem, including appropriate units if applicable, and check if the answer is reasonable.

(Suggested insertion: Multiple worked examples of solving linear equations of increasing complexity, including those with fractions, decimals, and parentheses on both sides. Examples of setting up and solving word problems.)`,
          "mcq": {
            "question": "What is the solution to the equation 5x - 8 = 2x + 7?",
            "options": [
              "x = 3",
              "x = 5",
              "x = -1",
              "x = 1"
            ],
            "correctAnswer": "x = 5",
            "explanation": "Subtract 2x from both sides to get 3x - 8 = 7. Add 8 to both sides to get 3x = 15. Divide by 3 to get x = 5."
          }
        },
        {
          "title": "5.2 Simultaneous Linear Equations: Elimination and Substitution",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=oKqtgz2eo-Y",
          "content": `Simultaneous linear equations (or a system of linear equations) involve two or more linear equations with two or more variables that are to be solved together. A solution to such a system is a set of values for the variables that satisfies all equations in the system simultaneously. This chapter focuses on systems of two linear equations in two variables (e.g., x and y).
Standard form:
  a₁x + b₁y = c₁
  a₂x + b₂y = c₂
(where a₁, b₁, c₁, a₂, b₂, c₂ are constants).

Geometrically, each linear equation in two variables represents a straight line on a coordinate plane. The solution to the system corresponds to the point(s) of intersection of these lines:

*   **One unique solution:** Lines intersect at one point.
*   **No solution:** Lines are parallel and distinct.
*   **Infinitely many solutions:** Lines are coincident (the same line).

**Methods for Solving Systems of Two Linear Equations:**

**Substitution Method:**

1.  Solve one of the equations for one variable in terms of the other variable (e.g., solve for y in terms of x, or x in terms of y).
2.  Substitute this expression into the other equation. This will result in a single linear equation with only one variable.
3.  Solve this new equation for that variable.
4.  Substitute the value found back into either of the original equations (or the expression from step 1) to find the value of the other variable.
5.  Check the solution by substituting both values into both original equations.

*   Example:
    x + y = 5 (1)
    2x - y = 4 (2)
    From (1), y = 5 - x.
    Substitute into (2): 2x - (5 - x) = 4
    2x - 5 + x = 4 => 3x - 5 = 4 => 3x = 9 => x = 3.
    Substitute x = 3 into y = 5 - x: y = 5 - 3 = 2.
    Solution: x = 3, y = 2.

**Elimination Method (or Addition/Subtraction Method):**

1.  If necessary, multiply one or both equations by suitable non-zero constants so that the coefficients of one of the variables in both equations are either the same or additive inverses (opposites).
2.  Add or subtract the (modified) equations to eliminate one variable. This results in a single linear equation with the remaining variable.
3.  Solve this equation for that variable.
4.  Substitute the value found back into either of the original equations to find the value of the other variable.
5.  Check the solution.

*   Example:
    3x + 2y = 7 (1)
    5x - 2y = 1 (2)
    Coefficients of y are +2 and -2 (additive inverses). Add equations (1) and (2):
    (3x + 2y) + (5x - 2y) = 7 + 1
    8x = 8 => x = 1.
    Substitute x = 1 into (1): 3(1) + 2y = 7 => 3 + 2y = 7 => 2y = 4 => y = 2.
    Solution: x = 1, y = 2.

*   Example where multiplication is needed:
    2x + 3y = 8 (1)
    x - 2y = -3 (2)
    Multiply (2) by 2: 2x - 4y = -6 (3)
    Subtract (3) from (1): (2x + 3y) - (2x - 4y) = 8 - (-6)
    2x + 3y - 2x + 4y = 8 + 6 => 7y = 14 => y = 2.
    Substitute y = 2 into (2): x - 2(2) = -3 => x - 4 = -3 => x = 1.
    Solution: x = 1, y = 2.

Word problems can also lead to systems of linear equations.

(Suggested insertion: Step-by-step worked examples for solving systems using both the substitution method and the elimination method, including cases where initial multiplication is needed. Include a graphical interpretation showing intersecting lines. Discuss cases of no solution (parallel lines) and infinite solutions (same line).) `,
          "mcq": {
            "question": "Using the elimination method, what is the value of x for the system: x + y = 10 and x - y = 4?",
            "options": [
              "x = 3",
              "x = 6",
              "x = 7",
              "x = 14"
            ],
            "correctAnswer": "x = 7",
            "explanation": "By adding the two equations together, the y terms are eliminated: (x + y) + (x - y) = 10 + 4, which simplifies to 2x = 14. Therefore, x = 7."
          }
        },
        {
          "title": "5.3 Quadratic Equations: Factorization, Completing the Square, and Formula",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=IlNAJl36-10",
          "content": `A quadratic equation is a polynomial equation of the second degree, meaning it can be written in the standard form:
**ax² + bx + c = 0**
where x is the variable, and a, b, and c are constants with a ≠ 0.
The solutions to a quadratic equation are called its **roots** (or sometimes zeros). A quadratic equation can have two real roots, one real repeated root, or two complex conjugate roots (not typically covered in detail in "General Mathematics" unless complex numbers are introduced).

**Methods for Solving Quadratic Equations:**

**1. Factorization Method:**

*   This method relies on the **zero product property**: If A × B = 0, then A = 0 or B = 0 (or both).
*   Steps:
    1.  Write the quadratic equation in standard form ax² + bx + c = 0.
    2.  Factor the quadratic expression ax² + bx + c into two linear factors (if possible over integers or rationals).
    3.  Set each linear factor equal to zero.
    4.  Solve the resulting linear equations to find the roots.
*   Example: Solve x² - 5x + 6 = 0
    Factor: (x - 2)(x - 3) = 0
    Set factors to zero: x - 2 = 0 or x - 3 = 0
    Solutions: x = 2 or x = 3.
*   This method is efficient when the quadratic expression is easily factorable.

**2. Completing the Square Method:**

*   This method transforms the quadratic equation into the form (x + p)² = q or (x - p)² = q, from which x can be easily solved by taking the square root.
*   Steps (for ax² + bx + c = 0, often easier if a=1 first by dividing by a):
    1.  If a ≠ 1, divide the entire equation by a: x² + (b/a)x + (c/a) = 0.
    2.  Move the constant term (c/a) to the right side: x² + (b/a)x = -c/a.
    3.  Take half of the coefficient of the x term, square it, and add this value to both sides of the equation.
        Half of (b/a) is (b/2a). Square it: (b/2a)² = b²/(4a²).
        x² + (b/a)x + b²/(4a²) = -c/a + b²/(4a²).
    4.  The left side is now a perfect square trinomial: (x + b/2a)² = (b² - 4ac) / (4a²).
    5.  Take the square root of both sides (remembering ±): x + b/2a = ±√(b² - 4ac) / (2a).
    6.  Solve for x: x = -b/2a ± √(b² - 4ac) / (2a) = [-b ± √(b² - 4ac)] / 2a.
*   This method always works and is the basis for deriving the quadratic formula.

**3. Quadratic Formula Method:**

*   The quadratic formula provides a direct way to find the roots of any quadratic equation ax² + bx + c = 0. It is derived by completing the square on the general quadratic equation.
    **x = [-b ± √(b² - 4ac)] / 2a**
*   Steps:
    1.  Write the equation in standard form ax² + bx + c = 0.
    2.  Identify the values of a, b, and c.
    3.  Substitute these values into the quadratic formula.
    4.  Simplify to find the two roots (which may be the same if b² - 4ac = 0).

**The Discriminant (Δ or D):** The expression b² - 4ac under the square root in the quadratic formula is called the discriminant. It determines the nature of the roots:

*   If **Δ > 0**: Two distinct real roots.
*   If **Δ = 0**: One real repeated root (or two equal real roots).
*   If **Δ < 0**: No real roots (two complex conjugate roots - involving imaginary numbers).

(Suggested insertion: Step-by-step worked examples for solving quadratic equations using factorization (for various trinomial types), completing the square, and the quadratic formula. Include examples showing how the discriminant determines the nature of roots.)`,
          "mcq": {
            "question": "What are the roots of the quadratic equation x² - 8x + 15 = 0?",
            "options": [
              "x = 3, x = 5",
              "x = -3, x = -5",
              "x = 2, x = 6",
              "x = -2, x = -6"
            ],
            "correctAnswer": "x = 3, x = 5",
            "explanation": "By factoring, we look for two numbers that multiply to 15 and add to -8. These numbers are -3 and -5. The equation factors to (x - 3)(x - 5) = 0. The roots are x = 3 and x = 5."
          }
        },
        {
          "title": "5.4 Linear and Quadratic Inequalities; Graphical Solutions",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=cskHdgwB5k8",
          "content": `**Inequality:** A mathematical statement that compares two expressions using inequality symbols:

*   < (less than)
*   > (greater than)
*   ≤ (less than or equal to)
*   ≥ (greater than or equal to)
*   ≠ (not equal to - less common in "solving inequalities")

**Linear Inequalities in One Variable:**
Can be written in forms like ax + b < c, ax + b ≤ c, ax + b > c, ax + b ≥ c.

*   **Solving Linear Inequalities:** Similar to solving linear equations, with one crucial difference:
    *   You can add or subtract the same quantity to both sides without changing the inequality direction.
    *   You can multiply or divide both sides by the same **positive** quantity without changing the inequality direction.
    *   If you multiply or divide both sides by a **negative** quantity, you **must reverse the direction of the inequality sign**.
*   The solution is usually an interval of numbers, which can be represented on a number line or using interval notation.
*   Example: Solve 3x - 5 > 7
    3x > 12
    x > 4. Solution set: {x | x > 4} or (4, ∞).
*   Example: Solve -2x + 1 ≤ 7
    -2x ≤ 6
    Divide by -2 (and reverse inequality): x ≥ -3. Solution set: {x | x ≥ -3} or [-3, ∞).

**Quadratic Inequalities in One Variable:**
Can be written in forms like ax² + bx + c < 0, ax² + bx + c > 0, etc.

*   **Methods for Solving Quadratic Inequalities:**
    1.  **Find Critical Points (Roots):** First, solve the corresponding quadratic equation ax² + bx + c = 0 to find its roots (say x₁ and x₂). These roots divide the number line into intervals.
    2.  **Test Intervals:** Choose a test value from within each interval (and outside the roots) and substitute it into the original inequality to see if it makes the inequality true or false.
    3.  **Write the Solution Set:** The intervals where the inequality is true form the solution set.

*   Alternatively, consider the graph of the quadratic function y = ax² + bx + c (a parabola).
    *   If a > 0, parabola opens upwards. ax² + bx + c > 0 where the parabola is **above** the x-axis. ax² + bx + c < 0 where it is **below**.
    *   If a < 0, parabola opens downwards.

*   Example: Solve x² - 3x - 4 > 0
    *   Find roots of x² - 3x - 4 = 0: (x - 4)(x + 1) = 0. Roots are x = 4, x = -1.
    *   Intervals: (-∞, -1), (-1, 4), (4, ∞).
    *   Test values:
        *   x = -2 in (-∞, -1): (-2)² - 3(-2) - 4 = 4 + 6 - 4 = 6 > 0 (True)
        *   x = 0 in (-1, 4): (0)² - 3(0) - 4 = -4 > 0 (False)
        *   x = 5 in (4, ∞): (5)² - 3(5) - 4 = 25 - 15 - 4 = 6 > 0 (True)
    *   Solution set: {x | x < -1 or x > 4} or (-∞, -1) ∪ (4, ∞).

**Graphical Solutions of Inequalities (Two Variables):**
Linear inequalities in two variables (e.g., y < mx + c, ax + by ≥ d) and systems of linear inequalities.

1.  **Graph the Boundary Line:** Graph the corresponding equation (replace inequality sign with =).
    *   Use a **dashed line** if inequality is < or > (line not included in solution).
    *   Use a **solid line** if inequality is ≤ or ≥ (line is included).
2.  **Test a Point:** Choose a test point not on the line (e.g., (0,0) if line doesn't pass through it). Substitute its coordinates into the original inequality.
3.  **Shade the Solution Region:**
    *   If the test point makes the inequality true, shade the region containing the test point.
    *   If it makes it false, shade the region on the other side of the line.
*   For a system of inequalities, the solution region is the intersection (overlap) of the shaded regions for each individual inequality.

(Suggested insertion: Number line graphs for solutions of linear inequalities. Examples of solving quadratic inequalities using both interval testing and graphical method (sketching parabola). Examples of graphing linear inequalities in two variables and systems of them, showing shaded solution regions.)`,
          "mcqs": [
            {
              "question": "What is the solution to the linear inequality -3x + 5 < 14?",
              "options": [
                "x < -3",
                "x > -3",
                "x < 3",
                "x > 3"
              ],
              "correctAnswer": "x > -3",
              "explanation": "Subtract 5 from both sides: -3x < 9. Divide by -3 and reverse the inequality sign: x > -3."
            },
            {
              "question": "For the quadratic equation 2x² + 5x - 3 = 0, what is the value of the discriminant (b² - 4ac)?",
              "options": [
                "1",
                "23",
                "49",
                "-19"
              ],
              "correctAnswer": "49",
              "explanation": "Here, a=2, b=5, c=-3. The discriminant is b² - 4ac = (5)² - 4(2)(-3) = 25 - (-24) = 25 + 24 = 49. Since it's positive, there are two distinct real roots."
            },
            {
              "question": "Which method can be used to solve ANY quadratic equation?",
              "options": [
                "Factorization",
                "Graphing",
                "Completing the Square",
                "Taking the square root"
              ],
              "correctAnswer": "Completing the Square",
              "explanation": "While the quadratic formula is derived from it and also works for any quadratic, completing the square is a fundamental method that always works. Factorization only works for factorable quadratics."
            },
            {
              "question": "Solve for y in the system of equations: 2x + y = 7 and 3x - 2y = 0.",
              "options": [
                "y = 1",
                "y = 2",
                "y = 3",
                "y = 4"
              ],
              "correctAnswer": "y = 3",
              "explanation": "Multiply the first equation by 2 to get 4x + 2y = 14. Add this to the second equation (3x - 2y = 0) to get 7x = 14, so x = 2. Substitute x=2 into the first equation: 2(2) + y = 7, so 4 + y = 7, which means y = 3."
            },
            {
              "question": "The solution to the quadratic inequality x² - 4 < 0 is:",
              "options": [
                "x < -2 or x > 2",
                "-2 < x < 2",
                "x < 2",
                "x > -2"
              ],
              "correctAnswer": "-2 < x < 2",
              "explanation": "The corresponding equation x² - 4 = 0 has roots x=-2 and x=2. These are the critical points. Testing a value between them, like x=0, gives 0² - 4 = -4, which is less than 0. So the solution is the interval between the roots: -2 < x < 2."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 6: Progressions and Series",
      "image": "https://images.pexels.com/photos/5995311/pexels-photo-5995311.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=XZJdyPkCxuE",
        "https://www.youtube.com/watch?v=gua96ju_FBk",
        "https://www.youtube.com/watch?v=Tj89FA-d0f8"
      ],
      "sections": [
        {
          "title": "6.1 Arithmetic Progression (AP): nth Term, Sum of n Terms",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=S8Y9EAWlRIw",
          "content": `**Sum of the First n Terms of an AP (Sₙ):**
The sum Sₙ = a₁ + a₂ + ... + aₙ.
There are two common formulas for the sum:

1.  When the first term (a₁ or just a) and the common difference (d) are known:
    **Sₙ = n/2 [2a₁ + (n - 1)d]**
    *Derivation idea: Write the sum forwards and backwards, then add the two series term by term. Each pair sums to 2a₁ + (n-1)d, and there are n such pairs. 2Sₙ = n[2a₁ + (n-1)d].*

2.  When the first term (a₁) and the last term (aₙ or l) of the n terms are known:
    **Sₙ = n/2 (a₁ + aₙ) or Sₙ = n/2 (a + l)**
    This formula is derived from the first one by substituting aₙ = a₁ + (n - 1)d.

**Arithmetic Mean:** If a, b, c are three consecutive terms of an AP, then b is the arithmetic mean of a and c, and **b = (a + c) / 2**.

(Suggested insertion: Worked examples showing how to find a specific term in an AP, find the number of terms, find the common difference, and calculate the sum of the first n terms using both formulas. Problems involving finding the first term or common difference given other information.)`,
          "mcq": {
            "question": "What is the 10th term of the arithmetic progression 3, 7, 11, 15, ...?",
            "options": [
              "39",
              "43",
              "35",
              "40"
            ],
            "correctAnswer": "39",
            "explanation": "The first term a = 3 and the common difference d = 7 - 3 = 4. The formula for the nth term is a_n = a + (n-1)d. For the 10th term, a_10 = 3 + (10-1)*4 = 3 + 9*4 = 3 + 36 = 39."
          }
        },
        {
          "title": "6.2 Geometric Progression (GP): nth Term, Sum of n Terms",
          "image": "https://images.pexels.com/photos/5722457/pexels-photo-5722457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=L7-sAi4bOoY",
          "content": `A sequence of numbers in which the ratio between any two consecutive terms is constant. This constant ratio is called the **common ratio (r)**.

*   The terms must be non-zero.

*   If a₁, a₂, a₃, ..., aₙ is a GP, then a₂/a₁ = a₃/a₂ = ... = aₙ/aₙ₋₁ = r.

Examples:

*   2, 6, 18, 54, ... (Common ratio r = 3)
*   80, 40, 20, 10, 5, ... (Common ratio r = 1/2)
*   3, -6, 12, -24, ... (Common ratio r = -2)
*   5, 5, 5, 5, ... (Common ratio r = 1)

**The n-th Term of a GP (aₙ or Tₙ):**
Let a₁ (or a) be the first term and r be the common ratio.

*   a₁ = a
*   a₂ = ar
*   a₃ = ar²
*   a₄ = ar³
*   ...

The formula for the n-th term is: **aₙ = a₁rⁿ⁻¹** (or aₙ = arⁿ⁻¹)

**Sum of the First n Terms of a GP (Sₙ):**
The sum Sₙ = a₁ + a₁r + a₁r² + ... + a₁rⁿ⁻¹.
The formula for the sum (when r ≠ 1):
**Sₙ = a₁ (rⁿ - 1) / (r - 1)** or equivalently **Sₙ = a₁ (1 - rⁿ) / (1 - r)**
(The second form is often preferred when |r| < 1 to keep the denominator positive).

*Derivation idea: Multiply Sₙ by r, then subtract Sₙ from rSₙ (or vice versa). Most terms cancel out.*

If r = 1, then Sₙ = na₁ (since all terms are a₁).

**Sum to Infinity of a GP (S∞):**
If the common ratio r is between -1 and 1 (i.e., **|r| < 1** or -1 < r < 1), the GP is a convergent series, and its terms get progressively smaller in magnitude. In this case, the sum of an infinite number of terms approaches a finite value.
The formula for the sum to infinity:
**S∞ = a₁ / (1 - r)**, provided |r| < 1.
If |r| ≥ 1, the sum to infinity does not exist (the series diverges).

**Geometric Mean:** If a, b, c are three consecutive positive terms of a GP, then b is the geometric mean of a and c, and **b = √(ac)** (or b² = ac).

(Suggested insertion: Worked examples showing how to find a specific term in a GP, the common ratio, the sum of the first n terms, and the sum to infinity (where applicable). Problems involving geometric means and practical applications of GPs.)`,
          "mcq": {
            "question": "What is the sum to infinity of the geometric progression 16, 8, 4, 2, ...?",
            "options": [
              "32",
              "24",
              "30",
              "The sum does not exist"
            ],
            "correctAnswer": "32",
            "explanation": "The first term a = 16 and the common ratio r = 8/16 = 1/2. Since |r| < 1, the sum to infinity exists. The formula is S_∞ = a / (1 - r) = 16 / (1 - 1/2) = 16 / (1/2) = 32."
          }
        },
        {
          "title": "6.3 Special Series: Harmonic Series, Telescoping Series (Introductory)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=9KH3eqlLvaU",
          "content": `(This section often introduces types of series encountered in more advanced mathematics or specific contexts. For General Mathematics, the depth might be introductory.)

**Harmonic Progression (HP):**
A sequence of numbers is said to be in harmonic progression if their **reciprocals are in arithmetic progression**.

*   There is no simple direct formula for the sum of n terms of an HP. To solve problems involving HP, first convert the terms to their reciprocals (which form an AP), solve using AP formulas, and then convert back if needed.

*   Example: If 1/2, 1/5, 1/8, ... is an HP, then 2, 5, 8, ... is an AP with a₁ = 2, d = 3.

**The Harmonic Series:** The specific series formed by the sum of the reciprocals of the positive integers:
1 + 1/2 + 1/3 + 1/4 + ... + 1/n + ...

*   This series is famously **divergent** (its sum approaches infinity), even though the terms get progressively smaller. This is a key counter-intuitive result.

**Telescoping Series (Sum):**
A series where most of the terms cancel out in successive partial sums, leaving only a few terms.

*   The general form involves terms like (bₖ - bₖ₊₁).

*   Sₙ = Σ [from k=1 to n] (bₖ - bₖ₊₁) = (b₁ - b₂) + (b₂ - b₃) + ... + (bₙ - bₙ₊₁) = b₁ - bₙ₊₁.

*   Often involves expressing the general term aₖ using partial fraction decomposition or other algebraic manipulation to get it into the form bₖ - bₖ₊₁.

*   Example: Find the sum of Σ [from k=1 to n] (1 / (k(k+1))).
    Using partial fractions: 1/(k(k+1)) = 1/k - 1/(k+1).
    So Sₙ = (1/1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + ... + (1/n - 1/(n+1)).
    Most terms cancel: Sₙ = 1 - 1/(n+1).
    The sum to infinity (if n→∞) is 1.

**Sums of Powers of Integers (Common Formulas):**
(These are useful but may be more for "Further Mathematics" curricula if too advanced for "General Math").

*   Sum of the first n integers: Σk = 1 + 2 + ... + n = n(n+1)/2 (This is an AP sum).

*   Sum of the first n squares: Σk² = 1² + 2² + ... + n² = n(n+1)(2n+1)/6.

*   Sum of the first n cubes: Σk³ = 1³ + 2³ + ... + n³ = [n(n+1)/2]².

(Suggested insertion: An example illustrating HP by converting to AP. A clear step-by-step example of a telescoping sum. Brief mention or listing of the sums of powers formulas if relevant to the curriculum.)`,
          "mcq": {
            "question": "A sequence is a Harmonic Progression (HP) if its reciprocals form what type of progression?",
            "options": [
              "Geometric Progression (GP)",
              "Arithmetic Progression (AP)",
              "Another Harmonic Progression (HP)",
              "A constant sequence"
            ],
            "correctAnswer": "Arithmetic Progression (AP)",
            "explanation": "By definition, a sequence is a Harmonic Progression if the reciprocals of its terms form an Arithmetic Progression."
          }
        },
        {
          "title": "6.4 Applications of Progressions in Finance and Population Growth",
          "image": "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=ai_WeRKVgUk",
          "content": `Arithmetic and geometric progressions have numerous applications in modeling real-world phenomena.

**Finance:**

*   **Simple Interest (AP):**
    *   If simple interest I = PRT/100 is calculated for a fixed principal P and rate R for successive years T=1, 2, 3, ..., the amounts of interest earned each year form an AP (PR/100, PR/100, PR/100, ... with d=0).
    *   The total amount A = P + n(PR/100) after n periods (where interest for each period is added to previous accumulated amount without compounding on interest itself) would represent amounts increasing in an AP manner from the starting principal if P is considered the 0th term and amounts are P + PR/100, P + 2PR/100, ... The interest amounts themselves PR/100, 2PR/100, 3PR/100... are an AP.
    *   Regular savings (annuities where contributions form an AP) can sometimes be modeled.

*   **Compound Interest (GP):**
    *   If a principal P is invested at a rate R% per period, compounded per period, the amounts at the end of each successive period form a GP.
        *   Amount after 1 period: A₁ = P(1 + R/100)¹
        *   Amount after 2 periods: A₂ = P(1 + R/100)²
        *   Amount after n periods: Aₙ = P(1 + R/100)ⁿ
    *   The common ratio is r = (1 + R/100).
    *   This is fundamental to calculating future values of investments, loan repayments, etc.
    *   **Annuities (Regular Deposits/Payments):** The sum of future values or present values of a series of equal payments made at regular intervals can often be calculated using formulas for the sum of a GP.
    *   **Depreciation:** The value of an asset may decrease by a fixed percentage each year (e.g., reducing balance depreciation), which can be modeled by a GP with 0 < r < 1.

**Population Growth (and Decay):**

*   **Linear Growth (AP - less common for biological populations):** If a population increases by a fixed number of individuals each time period.
    *   Pₙ = P₀ + nd (where P₀ is initial population, d is constant increase per period, n is number of periods).

*   **Exponential Growth (GP):** If a population increases by a fixed percentage (or growth rate) each time period. This is more common for populations with abundant resources.
    *   Pₙ = P₀ (1 + g)ⁿ or Pₙ = P₀ rⁿ
    *   where P₀ is initial population, g is growth rate per period (as a decimal), r = 1 + g is the common ratio (growth factor).
    *   This is analogous to compound interest.

*   **Radioactive Decay (GP):** The amount of a radioactive substance remaining after n half-lives decreases geometrically. If N₀ is initial amount and T½ is half-life, amount after n half-lives is N = N₀ (½)ⁿ. This is a GP with r = ½.

**Other Applications:**

*   Spread of information or diseases (can sometimes be modeled by GP in early stages).
*   Patterns in nature (e.g., spirals in shells, branching of trees can sometimes exhibit sequences).
*   Depreciation of machinery.
*   Bouncing ball (heights of successive bounces often form a GP).

(Suggested insertion: Worked examples for each application type: compound interest calculations using GP formulas, calculating future population based on a growth rate, depreciation problems. Perhaps a simple bouncing ball problem.)`,
          "mcqs": [
            {
              "question": "The amounts at the end of each year for an investment with compound interest form what type of progression?",
              "options": [
                "Arithmetic Progression",
                "Geometric Progression",
                "Harmonic Progression",
                "Telescoping Series"
              ],
              "correctAnswer": "Geometric Progression",
              "explanation": "With compound interest, the amount is multiplied by a constant factor (1 + rate) each period, which is the definition of a Geometric Progression."
            },
            {
              "question": "What is the sum of the first 20 terms of an AP with first term 5 and common difference 3?",
              "options": [
                "670",
                "620",
                "640",
                "124"
              ],
              "correctAnswer": "670",
              "explanation": "The formula for the sum is S_n = n/2 [2a + (n-1)d]. Here, n=20, a=5, d=3. S_20 = 20/2 [2*5 + (20-1)*3] = 10 [10 + 19*3] = 10 [10 + 57] = 10 * 67 = 670."
            },
            {
              "question": "Find the 5th term of a GP where the first term is 2 and the common ratio is 3.",
              "options": [
                "162",
                "54",
                "81",
                "30"
              ],
              "correctAnswer": "162",
              "explanation": "The formula for the nth term of a GP is a_n = ar^(n-1). Here, a=2, r=3, n=5. The 5th term is 2 * 3^(5-1) = 2 * 3^4 = 2 * 81 = 162."
            },
            {
              "question": "A population of 10,000 grows at a rate of 5% per year. What is the population after 2 years?",
              "options": [
                "11000",
                "10500",
                "11025",
                "11050"
              ],
              "correctAnswer": "11025",
              "explanation": "This is a GP application. The growth factor (common ratio) is 1.05. After 2 years, the population is P_2 = P_0 * r^2 = 10000 * (1.05)^2 = 10000 * 1.1025 = 11025."
            },
            {
              "question": "What is the arithmetic mean of 10 and 30?",
              "options": [
                "15",
                "20",
                "25",
                "40"
              ],
              "correctAnswer": "20",
              "explanation": "The arithmetic mean of two numbers a and c is (a+c)/2. So, (10+30)/2 = 40/2 = 20."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 7: Functions and Mappings",
      "image": "https://images.pexels.com/photos/5477714/pexels-photo-5477714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=lGfsp2CWjok",
        "https://www.youtube.com/watch?v=52tpYl2tTqk",
        "https://www.youtube.com/watch?v=V3DJAHkSbNU"
      ],
      "sections": [
        {
          "title": "7.1 Definition of a Function, Domain, Range",
          "image": "https://images.pexels.com/photos/8471854/pexels-photo-8471854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=zUdGBgedKUE",
          "content": `The concept of a function is one of the most central and unifying ideas in all of mathematics. A function describes a specific relationship between two sets of values, where each input value is associated with exactly one output value. This chapter introduces the definition of a function, its associated terminology like domain and range, explores various types of common functions (linear, quadratic, polynomial, rational), and examines operations such as forming composite functions and finding inverse functions. Piecewise-defined functions and absolute value functions will also be discussed.

**Relation:**
A relation is any set of ordered pairs (x, y). It simply shows a relationship between elements of a first set (the set of x-values) and elements of a second set (the set of y-values).

**Function (Mapping):**
A function is a special type of relation where **each element in the first set (the input set) is associated with exactly one element in the second set (the output set)**.

*   If f is a function that maps an element x from a set D (domain) to an element y from a set C (codomain), we write **f: D → C**.
*   The unique output y corresponding to an input x is denoted by **f(x)** (read as "f of x" or "f at x"). So, y = f(x).
*   **x** is called the **independent variable** (or argument).
*   **y** is called the **dependent variable** (its value depends on x).

*   **Key property of a function:** For any given input x from the domain, there is only one output f(x). (One-to-one or many-to-one, but not one-to-many).

*   **Vertical Line Test (for graphs):** A graph represents a function if and only if no vertical line intersects the graph at more than one point.

**Terminology:**

*   **Domain (D_f or Dom(f)):** The set of all possible input values (x-values) for which the function is defined.
    *   When defining a function, if the domain is not explicitly stated, it is usually assumed to be the largest set of real numbers for which the function rule produces a real output value (e.g., avoid division by zero, even roots of negative numbers).

*   **Codomain (C):** The set of all potential output values that the function could produce. The range is a subset of the codomain. (Sometimes not heavily emphasized in introductory courses unless distinguishing from range is critical).

*   **Range (R_f or Ran(f) or Im(f) for Image):** The set of all **actual** output values (y-values or f(x)-values) that the function produces when x takes on all values in the domain. Range = {f(x) | x ∈ Domain}.

*   **Mapping Diagram:** A visual representation of a function showing elements of the domain and codomain and arrows connecting inputs to their corresponding outputs. Each element in the domain must have exactly one arrow originating from it.

(Suggested insertion: Examples of relations that are functions and relations that are not functions (using ordered pairs and mapping diagrams). Clear visual explanation of the Vertical Line Test. Examples of finding the domain and range for simple functions, including those with restrictions like denominators or square roots.)`,
          "mcq": {
            "question": "What is the domain of the function f(x) = 1 / (x - 3)?",
            "options": [
              "All real numbers",
              "All real numbers except 0",
              "All real numbers except 3",
              "x > 3"
            ],
            "correctAnswer": "All real numbers except 3",
            "explanation": "The domain is the set of all possible input values. The function is undefined when the denominator is zero. x - 3 = 0 when x = 3. Therefore, the domain is all real numbers except for 3."
          }
        },
        {
          "title": "7.2 Linear, Quadratic, Polynomial, Rational Functions",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=fy45qX8cUwQ",
          "content": `Different types of functions are characterized by the form of their algebraic rules.

**Linear Function:**

*   A function that can be written in the form **f(x) = mx + c** (or y = mx + c).
*   **m** is the **slope (gradient)** of the line, representing the rate of change of y with respect to x.
*   **c** is the **y-intercept** (the value of y when x = 0).
*   **Domain:** All real numbers (ℝ), unless restricted by context.
*   **Range:** All real numbers (ℝ), unless m = 0 (horizontal line, range is {c}).
*   Graph is a straight line.
*   Constant function f(x) = c is a special case of a linear function where m = 0.

**Quadratic Function:**

*   A function that can be written in the standard form **f(x) = ax² + bx + c**, where a ≠ 0.
*   Graph is a **parabola**.
    *   If a > 0, parabola opens **upwards** (has a minimum point, the vertex).
    *   If a < 0, parabola opens **downwards** (has a maximum point, the vertex).
*   **Vertex form:** f(x) = a(x - h)² + k, where (h, k) is the vertex of the parabola. h = -b/(2a).
*   **Domain:** All real numbers (ℝ).
*   **Range:** If a > 0, range is [k, ∞). If a < 0, range is (-∞, k]. (Where k is the y-coordinate of the vertex).
*   Roots (x-intercepts) are found by solving ax² + bx + c = 0.

**Polynomial Function:**

*   A function of the form **f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀**, where n is a non-negative integer (the degree of the polynomial), and aₙ, aₙ₋₁, ..., a₀ are real constants (coefficients), with aₙ ≠ 0.
*   Linear functions (n=1) and quadratic functions (n=2) are types of polynomial functions.
*   Cubic functions (n=3), Quartic functions (n=4), etc.
*   **Domain:** All real numbers (ℝ).
*   **Range:** Depends on the degree and leading coefficient. For odd degree, range is ℝ. For even degree, range has a minimum or maximum value.
*   Graphs are smooth, continuous curves. End behavior (how f(x) behaves as x → ±∞) depends on the degree n and the sign of aₙ.

**Rational Function:**

*   A function that can be expressed as the ratio of two polynomial functions, P(x) and Q(x):
    **f(x) = P(x) / Q(x)**, where Q(x) ≠ 0.
*   **Domain:** All real numbers except the values of x for which the denominator Q(x) = 0. These values correspond to **vertical asymptotes** of the graph (lines the graph approaches but never touches).
*   Graphs can have vertical asymptotes, horizontal asymptotes (describing behavior as x → ±∞), slant (oblique) asymptotes, and holes (removable discontinuities).
*   Example: f(x) = 1/x. Domain: x ≠ 0. Vertical asymptote at x=0. Horizontal asymptote at y=0.
*   Example: f(x) = (x + 1) / (x² - 4). Denominator (x-2)(x+2) = 0 when x=2 or x=-2. Domain: x ≠ 2, x ≠ -2. Vertical asymptotes at x=2 and x=-2.

**Other Common Functions (Briefly):**

*   **Power Function:** f(x) = axⁿ (where n can be any real number).
*   **Root Function (Radical Function):** f(x) = ⁿ√x = x^(1/n). Domain restrictions for even n (e.g., f(x) = √x has domain x ≥ 0).
*   **Exponential Function:** f(x) = a^x (where a > 0, a ≠ 1). (See Ch. 8).
*   **Logarithmic Function:** f(x) = log_a(x) (inverse of exponential). (See Ch. 8).
*   **Trigonometric Functions:** sin(x), cos(x), tan(x), etc. (See Ch. 9, 10).

(Suggested insertion: For each function type (linear, quadratic, general polynomial, rational), provide graph sketches illustrating key features like intercepts, vertex (for quadratics), asymptotes (for rationals), end behavior (for polynomials). List standard forms and domain/range characteristics.)`,
          "mcq": {
            "question": "The graph of a quadratic function f(x) = ax² + bx + c is called a:",
            "options": [
              "Circle",
              "Hyperbola",
              "Straight Line",
              "Parabola"
            ],
            "correctAnswer": "Parabola",
            "explanation": "A quadratic function's graph is always a U-shaped or inverted U-shaped curve known as a parabola."
          }
        },
        {
          "title": "7.3 Composite and Inverse Functions",
          "image": "https://images.pexels.com/photos/9052534/pexels-photo-9052534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=2zeYEx4eTdc",
          "content": `**Composite Function (Function of a Function):**
Given two functions f and g, the composite function, denoted by **f ∘ g** (read as "f composed with g" or "f of g of x"), is defined as:
**(f ∘ g)(x) = f(g(x))**

To evaluate (f ∘ g)(x):

1.  First, apply the inner function g to x to get g(x).
2.  Then, apply the outer function f to the result g(x).

*   The domain of f ∘ g consists of all x in the domain of g such that g(x) is in the domain of f.
*   Composition is generally **not commutative**: (f ∘ g)(x) ≠ (g ∘ f)(x) in most cases.

*   Example: If f(x) = 2x + 1 and g(x) = x².
    (f ∘ g)(x) = f(g(x)) = f(x²) = 2(x²) + 1 = 2x² + 1.
    (g ∘ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)² = 4x² + 4x + 1.

**Inverse Function (f⁻¹):**
If a function f maps elements from its domain D to its range R, its inverse function, denoted **f⁻¹**, "reverses" this mapping. f⁻¹ maps elements from R back to D.

*   **f⁻¹(y) = x if and only if f(x) = y.**

*   For an inverse function f⁻¹ to exist, the original function f must be **one-to-one** (injective).
    *   A function is one-to-one if each output value (y) in the range corresponds to exactly one input value (x) in the domain. (No two different inputs produce the same output).

*   **Horizontal Line Test:** A function is one-to-one if and only if no horizontal line intersects its graph at more than one point.

If f is one-to-one, then:

*   Domain of f⁻¹ = Range of f.
*   Range of f⁻¹ = Domain of f.
*   (f⁻¹ ∘ f)(x) = x for all x in the domain of f.
*   (f ∘ f⁻¹)(y) = y for all y in the domain of f⁻¹ (i.e., range of f).
*   The graph of f⁻¹ is the reflection of the graph of f across the line **y = x**.

**Steps to Find the Inverse Function f⁻¹(x) for a given f(x):**

1.  Replace f(x) with y. (So, y = f(x)).
2.  Swap x and y in the equation. (So, x = f(y)).
3.  Solve the new equation for y. The resulting expression for y is f⁻¹(x).
4.  Verify that the domain and range are correctly interchanged and that f was one-to-one (or restrict domain if necessary).

*   Example: Find the inverse of f(x) = 2x + 3. (This is one-to-one).
    1.  y = 2x + 3.
    2.  Swap: x = 2y + 3.
    3.  Solve for y: x - 3 = 2y => y = (x - 3) / 2.
    So, f⁻¹(x) = (x - 3) / 2.

(Suggested insertion: Diagrams illustrating function composition using mapping diagrams. Examples of determining if a function is one-to-one using the horizontal line test. Graph of a function and its inverse showing reflection across y=x. Step-by-step examples of finding inverse functions.)`,
          "mcq": {
            "question": "If f(x) = 2x and g(x) = x + 3, what is the composite function (f ∘ g)(x)?",
            "options": [
              "2x + 3",
              "2x + 6",
              "2(x+3)",
              "x + 6"
            ],
            "correctAnswer": "2(x+3)",
            "explanation": "(f ∘ g)(x) means f(g(x)). We substitute the entire function g(x) into f(x). So, f(g(x)) = f(x + 3) = 2(x + 3), which is also 2x + 6."
          }
        },
        {
          "title": "7.4 Piecewise‐Defined Functions and Absolute Value Functions",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=ld4UD98yHio",
          "content": `**Piecewise-Defined Function:**
A function that is defined by different formulas or rules for different parts (sub-intervals) of its domain.

*   The rule used depends on the input value x.

*   Example:
    f(x) = { x² if x < 0
           { x + 1 if x ≥ 0
    To evaluate:
    *   If x = -2 (which is < 0), use f(x) = x². So f(-2) = (-2)² = 4.
    *   If x = 3 (which is ≥ 0), use f(x) = x + 1. So f(3) = 3 + 1 = 4.

*   Graphs of piecewise functions consist of different segments or curves joined together (may have "jumps" or "breaks" at the transition points if not continuous).

**Absolute Value Function:**
A common piecewise-defined function. The absolute value of a real number x, denoted **|x|**, is its distance from zero on the number line. It is always non-negative.

*   Definition:
    **|x| = { x if x ≥ 0
          {-x if x < 0**

*   Examples: |5| = 5, |-3| = -(-3) = 3, |0| = 0.

*   The graph of f(x) = |x| has a **V-shape** with its vertex at the origin (0,0).
    *   For x ≥ 0, graph is y = x. For x < 0, graph is y = -x.

*   Properties:
    *   |x| ≥ 0.
    *   |x| = |-x|.
    *   |xy| = |x||y|.
    *   |x/y| = |x|/|y| (for y ≠ 0).
    *   Triangle Inequality: |x + y| ≤ |x| + |y|.

**Solving Equations and Inequalities Involving Absolute Value:**

*   If **|ax + b| = c** (where c ≥ 0):
    Then **ax + b = c OR ax + b = -c**. (Solve two separate equations).

*   If **|ax + b| < c** (where c > 0):
    Then **-c < ax + b < c**. (Solve a compound inequality).

*   If **|ax + b| > c** (where c > 0):
    Then **ax + b > c OR ax + b < -c**. (Solve two separate inequalities).

(Suggested insertion: Examples of graphing piecewise-defined functions, showing how different rules apply over different domain intervals. Graph of f(x) = |x|. Worked examples of solving equations and inequalities involving absolute values, demonstrating how to split into cases.)`,
          "mcqs": [
            {
              "question": "What test is used on a graph to determine if it represents a function?",
              "options": [
                "Horizontal Line Test",
                "Vertical Line Test",
                "Diagonal Line Test",
                "Curve Test"
              ],
              "correctAnswer": "Vertical Line Test",
              "explanation": "The Vertical Line Test states that if any vertical line intersects a graph at more than one point, the graph does not represent a function. The Horizontal Line Test is used to determine if a function is one-to-one."
            },
            {
              "question": "What is the range of the function f(x) = x² + 2?",
              "options": [
                "All real numbers",
                "y ≥ 0",
                "y > 2",
                "y ≥ 2"
              ],
              "correctAnswer": "y ≥ 2",
              "explanation": "The minimum value of x² is 0. Therefore, the minimum value of f(x) = x² + 2 is 0 + 2 = 2. The range is all real numbers greater than or equal to 2."
            },
            {
              "question": "What is the inverse function, f⁻¹(x), of f(x) = 3x - 5?",
              "options": [
                "(x + 5) / 3",
                "3x + 5",
                "x/3 + 5",
                "5 - 3x"
              ],
              "correctAnswer": "(x + 5) / 3",
              "explanation": "To find the inverse, set y = 3x - 5. Swap x and y: x = 3y - 5. Solve for y: x + 5 = 3y, so y = (x + 5) / 3. Thus, f⁻¹(x) = (x + 5) / 3."
            },
            {
              "question": "What is the value of |-7| + |3|?",
              "options": [
                "-4",
                "4",
                "10",
                "-10"
              ],
              "correctAnswer": "10",
              "explanation": "The absolute value of a number is its distance from zero. |-7| = 7 and |3| = 3. So, 7 + 3 = 10."
            },
            {
              "question": "A rational function is defined as:",
              "options": [
                "A polynomial with a degree of 2",
                "The ratio of two polynomial functions",
                "A function with a square root",
                "A function with an absolute value"
              ],
              "correctAnswer": "The ratio of two polynomial functions",
              "explanation": "A rational function f(x) is defined as f(x) = P(x) / Q(x), where P(x) and Q(x) are polynomial functions and Q(x) is not the zero polynomial."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 8: Graphs of Functions",
      "image": "https://images.pexels.com/photos/7723394/pexels-photo-7723394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=NPwF2KUMlrw",
        "https://www.youtube.com/watch?v=pWsiB2-8qms",
        "https://www.youtube.com/watch?v=J1PGoNNhCyk"
      ],
      "sections": [
        {
          "title": "8.1 Cartesian Coordinate Plane and Plotting Points",
          "image": "https://images.pexels.com/photos/8482069/pexels-photo-8482069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=7YssQxYrmfM",
          "content": `Visualizing mathematical relationships is a powerful tool for understanding and analysis. The graph of a function provides a geometric representation of the relationship between its input (independent variable) and output (dependent variable). This chapter will cover the basics of the Cartesian coordinate plane, methods for sketching graphs of common functions like linear, quadratic, and exponential functions, explore how graphs can be transformed (shifted, reflected, stretched/compressed), and discuss how to interpret real-world data presented in graphical form.

**The Cartesian Coordinate Plane (Rectangular Coordinate System):**
Developed by René Descartes, this system uses two perpendicular number lines to specify the location (coordinates) of any point in a two-dimensional plane.

*   **Axes:**
    *   The horizontal number line is called the **x-axis**.
    *   The vertical number line is called the **y-axis**.

*   **Origin (0,0):** The point where the x-axis and y-axis intersect.

*   **Quadrants:** The two axes divide the plane into four regions called quadrants, numbered I, II, III, and IV, starting from the upper right and moving counterclockwise.
    *   Quadrant I: x > 0, y > 0 (+,+)
    *   Quadrant II: x < 0, y > 0 (-,+)
    *   Quadrant III: x < 0, y < 0 (-,-)
    *   Quadrant IV: x > 0, y < 0 (+,-)

*   **Ordered Pair (x, y):** The coordinates of a point, specifying its horizontal position (**x-coordinate** or **abscissa**) and its vertical position (**y-coordinate** or **ordinate**). The order matters.

*   To plot a point (x,y): Start at the origin, move x units horizontally (right if x>0, left if x<0), then move y units vertically (up if y>0, down if y<0).

**Graph of an Equation or Function:**
The set of all points (x,y) in the Cartesian plane whose coordinates satisfy the equation or function rule y = f(x).

**Key Features when Analyzing Graphs:**

*   **Intercepts:**
    *   **x-intercept(s):** Point(s) where the graph crosses or touches the x-axis. At these points, y = 0. Found by setting y = f(x) = 0 and solving for x. These are also called the **roots** or **zeros** of the function.
    *   **y-intercept:** The point where the graph crosses or touches the y-axis. At this point, x = 0. Found by setting x = 0 in y = f(x) and solving for y. A function can have at most one y-intercept.

*   **Symmetry:**
    *   Symmetry about the y-axis: If f(-x) = f(x) (**even function**).
    *   Symmetry about the origin: If f(-x) = -f(x) (**odd function**).

*   **Domain and Range from a Graph:**
    *   **Domain:** The set of all x-values for which the graph is defined (projection onto x-axis).
    *   **Range:** The set of all y-values covered by the graph (projection onto y-axis).

(Suggested insertion: A clear diagram of the Cartesian coordinate plane, labeling axes, origin, and quadrants. Examples of plotting various ordered pairs. A simple graph with x-intercepts and y-intercept clearly marked.)`,
          "mcq": {
            "question": "In which quadrant does the point (-4, 5) lie?",
            "options": [
              "Quadrant I",
              "Quadrant II",
              "Quadrant III",
              "Quadrant IV"
            ],
            "correctAnswer": "Quadrant II",
            "explanation": "The quadrants are numbered counterclockwise from the top right. Quadrant II is where the x-coordinate is negative and the y-coordinate is positive (-,+)."
          }
        },
        {
          "title": "8.2 Sketching Linear, Quadratic, and Exponential Graphs",
          "image": "https://images.pexels.com/photos/29264971/pexels-photo-29264971.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=2RY_5eyHtQc",
          "content": `**1. Sketching Linear Functions (f(x) = mx + c):**
The graph is a straight line.

*   **Using Slope (m) and y-intercept (c):**
    1.  Plot the y-intercept (0, c).
    2.  Use the slope m = rise/run to find another point. From (0,c), move 'run' units horizontally and 'rise' units vertically. (If m is negative, either rise or run is negative).
    3.  Draw a straight line through these two points.

*   **Using Two Intercepts:**
    1.  Find the y-intercept (set x=0, solve for y).
    2.  Find the x-intercept (set y=0, solve for x).
    3.  Plot these two points and draw a line through them. (This method fails if line passes through origin or is horizontal/vertical without both intercepts).

*   **Horizontal Lines:** y = c (slope m = 0).
*   **Vertical Lines:** x = a (undefined slope; not a function of x).

**2. Sketching Quadratic Functions (f(x) = ax² + bx + c):**
The graph is a parabola.

*   **Key Features to Determine for Sketching:**
    *   **Direction of Opening:**
        *   If a > 0, parabola opens **upwards** (U-shape).
        *   If a < 0, parabola opens **downwards** (∩-shape).
    *   **Vertex:** The turning point (minimum if a>0, maximum if a<0).
        *   x-coordinate of vertex: h = -b / (2a).
        *   y-coordinate of vertex: k = f(h) = f(-b/(2a)).
        *   Vertex form: f(x) = a(x - h)² + k.
    *   **Axis of Symmetry:** A vertical line passing through the vertex: x = h = -b / (2a).
    *   **y-intercept:** Set x = 0. f(0) = c. So, (0, c) is the y-intercept.
    *   **x-intercept(s) (Roots/Zeros):** Set f(x) = 0 (i.e., ax² + bx + c = 0) and solve for x using factorization, quadratic formula, or completing the square.
        *   Two distinct real roots: Parabola crosses x-axis at two points.
        *   One real repeated root: Vertex is on the x-axis.
        *   No real roots (discriminant b² - 4ac < 0): Parabola does not cross the x-axis.

*   **Sketching Process:**
    1.  Determine direction of opening.
    2.  Find and plot the vertex. Draw the axis of symmetry (lightly).
    3.  Find and plot the y-intercept.
    4.  Find and plot the x-intercepts (if they exist and are easy to find).
    5.  Plot a few additional points if needed (e.g., using symmetry around the axis).
    6.  Draw a smooth parabolic curve through the plotted points.

**3. Sketching Exponential Functions (f(x) = a^x or f(x) = ab^x, where base b > 0, b ≠ 1):**

*   **Key Features:**
    *   **Domain:** All real numbers (ℝ).
    *   **Range:** (0, ∞) if a > 0 (graph always above x-axis). (-∞, 0) if a < 0.
    *   **Horizontal Asymptote:** The x-axis (y = 0) is a horizontal asymptote if no vertical shift. (The graph approaches this line as x → -∞ if b>1, or as x → ∞ if 0<b<1).
    *   **y-intercept:** Set x = 0. f(0) = a b⁰ = a × 1 = a. So, (0, a) is the y-intercept.

*   **Behavior based on base b (assuming a > 0):**
    *   **Exponential Growth (b > 1):** Graph increases rapidly as x increases. Decreases towards 0 as x → -∞.
    *   **Exponential Decay (0 < b < 1):** Graph decreases towards 0 as x increases. Increases rapidly as x → -∞.

*   **Sketching Process:**
    1.  Identify the y-intercept (0, a).
    2.  Note the horizontal asymptote (y = 0, unless shifted).
    3.  Determine if it's growth or decay based on b.
    4.  Plot a few key points (e.g., for x = -1, 0, 1, 2). For f(x) = b^x: points (-1, 1/b), (0, 1), (1, b), (2, b²).
    5.  Draw a smooth curve through the points, approaching the asymptote.

(Suggested insertion: Clear, step-by-step examples of sketching each type of graph: linear (using slope-intercept and two-intercept methods), quadratic (showing vertex, intercepts, axis of symmetry), and exponential (for both b>1 and 0<b<1, showing asymptote and key points).)`,
          "mcq": {
            "question": "What is the y-intercept of the exponential function f(x) = 3 * (2^x)?",
            "options": [
              "(0, 2)",
              "(0, 3)",
              "(0, 6)",
              "(0, 1)"
            ],
            "correctAnswer": "(0, 3)",
            "explanation": "The y-intercept occurs when x = 0. f(0) = 3 * (2^0) = 3 * 1 = 3. So the y-intercept is at the point (0, 3)."
          }
        },
        {
          "title": "8.3 Transformations: Translations, Reflections, Dilations",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=fXo2DtmwEcY",
          "content": `Transformations allow us to obtain the graph of a related function from the graph of a basic parent function (e.g., y=x², y=|x|, y=√x, y=a^x).
Let y = f(x) be the parent function.

**Vertical Translations (Shifts):**

*   **y = f(x) + k:** Shifts the graph of f(x) vertically.
    *   If k > 0, shifts **upwards** by k units.
    *   If k < 0, shifts **downwards** by |k| units.

**Horizontal Translations (Shifts):**

*   **y = f(x - h):** Shifts the graph of f(x) horizontally.
    *   If h > 0, shifts to the **right** by h units. (e.g., f(x-2) shifts 2 units right).
    *   If h < 0, shifts to the **left** by |h| units. (e.g., f(x+2) = f(x-(-2)) shifts 2 units left).

**Reflections:**

*   **y = -f(x):** Reflects the graph of f(x) **across the x-axis**. (Changes sign of y-values).
*   **y = f(-x):** Reflects the graph of f(x) **across the y-axis**. (Changes sign of x-values).

**Vertical Stretches and Compressions (Dilations):**

*   **y = a f(x):** Stretches or compresses the graph of f(x) vertically.
    *   If |a| > 1, vertical **stretch** by a factor of |a|.
    *   If 0 < |a| < 1, vertical **compression** by a factor of |a|.
    *   If a < 0, also reflects across x-axis.

**Horizontal Stretches and Compressions (Dilations):**

*   **y = f(bx):** Stretches or compresses the graph of f(x) horizontally.
    *   If |b| > 1, horizontal **compression** by a factor of 1/|b|. (Opposite to intuition).
    *   If 0 < |b| < 1, horizontal **stretch** by a factor of 1/|b|.
    *   If b < 0, also reflects across y-axis.

**Combining Transformations:** Apply transformations in a specific order, typically:

1.  Horizontal shifts.
2.  Horizontal stretches/compressions and reflections across y-axis.
3.  Vertical stretches/compressions and reflections across x-axis.
4.  Vertical shifts.
(Order can matter, especially between stretches/compressions and shifts in the same direction. Often taught as "inside" transformations (affecting x) before "outside" transformations (affecting f(x) or y)).

(Suggested insertion: Visual examples for each type of transformation applied to a basic parent function graph (e.g., y=x², y=|x|, or y=√x). An example showing a sequence of combined transformations.)`,
          "mcq": {
            "question": "How does the graph of y = (x - 3)² relate to the graph of the parent function y = x²?",
            "options": [
              "Shifted 3 units up",
              "Shifted 3 units down",
              "Shifted 3 units left",
              "Shifted 3 units right"
            ],
            "correctAnswer": "Shifted 3 units right",
            "explanation": "A transformation of the form y = f(x - h) represents a horizontal shift. When h is positive (as in x - 3), the graph shifts h units to the right."
          }
        },
        {
          "title": "8.4 Interpreting Real‐World Data from Graphs",
          "image": "https://images.pexels.com/photos/5915301/pexels-photo-5915301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=YgyRmGSi6_Y",
          "content": `Graphs are widely used to represent data and relationships in science, business, economics, and everyday life. Being able to interpret information from graphs is a crucial skill.
**Types of Graphs for Data Representation:**

*   **Line Graphs:** Show trends or changes in a quantity over time or in relation to another continuous variable. Points are plotted and connected by line segments.
*   **Bar Charts (Bar Graphs):** Compare quantities for different categories. Bars can be vertical or horizontal. Length of bar represents magnitude. Gaps between bars for discrete categories.
*   **Histograms:** Similar to bar charts but represent the frequency distribution of continuous data grouped into intervals (bins). Bars are adjacent (no gaps).
*   **Pie Charts:** Show proportions of a whole. Circle is divided into sectors, with angle/area of sector proportional to the quantity it represents.
*   **Scatter Plots:** Show the relationship (correlation) between two sets of numerical data by plotting individual data points. Can reveal trends (positive, negative, no correlation).

**Interpreting Graphs:**

1.  **Read the Title and Labels:** Understand what the graph is about and what variables are being represented on each axis, including units.
2.  **Understand the Scale:** Note the range of values on each axis and the increments.
3.  **Identify Trends and Patterns:**
    *   Is the graph increasing, decreasing, or fluctuating?
    *   Are there any peaks, troughs, or plateaus?
    *   Is the relationship linear, curved, or cyclical?
    *   Is there a positive correlation, negative correlation, or no correlation (for scatter plots)?
4.  **Extract Specific Data Points:** Find the value of one variable corresponding to a given value of the other.
5.  **Calculate Rates of Change (Slope):** For line graphs, the slope of a segment represents the rate of change between those points.
6.  **Compare Values:** Compare data across different categories (bar charts) or time periods (line graphs).
7.  **Interpolation and Extrapolation (with caution):**
    *   **Interpolation:** Estimating values **between** plotted data points.
    *   **Extrapolation:** Estimating values **beyond** the range of plotted data points (less reliable).
8.  **Look for Outliers:** Data points that lie far away from the general trend. Consider possible reasons.
9.  **Understand the Context:** Relate the graphical information back to the real-world situation it represents.
10. **Be Critical:** Consider the source of the data, how it was collected, potential biases, and whether the graph might be misleading (e.g., truncated axis, inappropriate scale).

(Suggested insertion: Examples of different types of graphs (line, bar, pie, scatter plot) with real-world data. For each, pose questions that require interpretation of titles, labels, trends, specific values, and comparisons. Discuss how a graph could be misleading.)`,
          "mcqs": [
            {
              "question": "The point where a graph crosses the y-axis is called the:",
              "options": [
                "x-intercept",
                "y-intercept",
                "Origin",
                "Vertex"
              ],
              "correctAnswer": "y-intercept",
              "explanation": "The y-intercept is the point where the graph intersects the y-axis. At this point, the x-coordinate is always 0."
            },
            {
              "question": "The graph of the quadratic function y = -2x² + 4x + 1 will be a parabola that:",
              "options": [
                "Opens upwards and is wider than y = x²",
                "Opens upwards and is narrower than y = x²",
                "Opens downwards and is wider than y = x²",
                "Opens downwards and is narrower than y = x²"
              ],
              "correctAnswer": "Opens downwards and is narrower than y = x²",
              "explanation": "The coefficient of x² is a=-2. Since 'a' is negative, the parabola opens downwards. Since |a| = |-2| = 2, which is greater than 1, the graph is vertically stretched, making it narrower than the parent function y = x²."
            },
            {
              "question": "The transformation y = f(x) + 5 does what to the graph of y = f(x)?",
              "options": [
                "Shifts it 5 units right",
                "Shifts it 5 units left",
                "Shifts it 5 units up",
                "Shifts it 5 units down"
              ],
              "correctAnswer": "Shifts it 5 units up",
              "explanation": "Adding a constant 'k' to the function itself, y = f(x) + k, results in a vertical translation. If k is positive, the shift is upwards."
            },
            {
              "question": "A line graph is most suitable for displaying:",
              "options": [
                "Proportions of a whole",
                "Comparisons between discrete categories",
                "Trends over a continuous interval, like time",
                "The frequency distribution of continuous data"
              ],
              "correctAnswer": "Trends over a continuous interval, like time",
              "explanation": "Line graphs are ideal for showing how a quantity changes over time or another continuous variable, making it easy to see trends, increases, and decreases."
            },
            {
              "question": "What type of graph uses adjacent rectangular bars to show the frequency of continuous data grouped into intervals?",
              "options": [
                "Bar Chart",
                "Pie Chart",
                "Line Graph",
                "Histogram"
              ],
              "correctAnswer": "Histogram",
              "explanation": "A histogram is used for grouped continuous data. Its bars have no gaps between them to represent the continuous nature of the data on the horizontal axis."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 9: Trigonometric Ratios and Identities",
      "image": "https://images.pexels.com/photos/5477714/pexels-photo-5477714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=PUB0TaZ7bhA",
        "https://www.youtube.com/watch?v=-hnjIkMvNms",
        "https://www.youtube.com/watch?v=WvoFgL4P_rw"
      ],
      "sections": [
        {
          "title": "9.1 Definitions of Sine, Cosine, Tangent (Right‐Triangle Context)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=9-lYd0QSJRU",
          "content": `Trigonometry (from Greek "trigonon" = triangle, "metron" = measure) is the branch of mathematics that studies relationships between the angles and side lengths of triangles. It has vast applications in fields such as physics, engineering, navigation, surveying, astronomy, and even music and art. This chapter introduces the fundamental trigonometric ratios (sine, cosine, tangent) in the context of right-angled triangles, extends these concepts to angles of any magnitude using the unit circle and radian measure, and explores key trigonometric identities.

For an acute angle **θ** in a right-angled triangle:

*   **Hypotenuse (H):** The side opposite the right angle (longest side).
*   **Opposite Side (O):** The side opposite to the angle θ.
*   **Adjacent Side (A):** The side next to the angle θ (that is not the hypotenuse).

The three basic trigonometric ratios are defined as:

*   **Sine (sin):** sin(θ) = Length of Opposite Side / Length of Hypotenuse = **O / H**
*   **Cosine (cos):** cos(θ) = Length of Adjacent Side / Length of Hypotenuse = **A / H**
*   **Tangent (tan):** tan(θ) = Length of Opposite Side / Length of Adjacent Side = **O / A**

A common mnemonic to remember these is **SOH CAH TOA**.

**Reciprocal Trigonometric Ratios:**

*   **Cosecant (csc or cosec):** csc(θ) = 1 / sin(θ) = H / O
*   **Secant (sec):** sec(θ) = 1 / cos(θ) = H / A
*   **Cotangent (cot):** cot(θ) = 1 / tan(θ) = A / O

**Important Relationship:**
tan(θ) = sin(θ) / cos(θ) (since (O/H) / (A/H) = O/A).

**Trigonometric Ratios for Special Angles:**
Certain angles (30°, 45°, 60°) have exact trigonometric ratios that are frequently used and can be derived from specific right-angled triangles (isosceles right triangle for 45°; equilateral triangle halved for 30° and 60°).

| Angle (θ) | sin(θ)        | cos(θ)        | tan(θ)         |
|-----------|---------------|---------------|----------------|
| 0°        | 0             | 1             | 0              |
| 30° (π/6) | 1/2           | √3/2          | 1/√3 (or √3/3) |
| 45° (π/4) | 1/√2 (or √2/2)| 1/√2 (or √2/2)| 1              |
| 60° (π/3) | √3/2          | 1/2           | √3             |
| 90° (π/2) | 1             | 0             | Undefined      |

**Solving Right-Angled Triangles:**
If some sides and/or angles of a right-angled triangle are known, trigonometric ratios and the Pythagorean theorem (O² + A² = H²) can be used to find the unknown sides and angles.

*   Inverse trigonometric functions (sin⁻¹ or arcsin, cos⁻¹ or arccos, tan⁻¹ or arctan) are used to find an angle when the ratio of two sides is known.

(Suggested insertion: Clear diagrams of a right-angled triangle labeling opposite, adjacent, hypotenuse relative to angle θ. Table of trigonometric ratios for special angles. Worked examples of solving right-angled triangles given different combinations of sides/angles.)`,
          "mcq": {
            "question": "In a right-angled triangle, the ratio of the length of the opposite side to the length of the hypotenuse is called:",
            "options": [
              "Sine (sin)",
              "Cosine (cos)",
              "Tangent (tan)",
              "Cosecant (csc)"
            ],
            "correctAnswer": "Sine (sin)",
            "explanation": "This is the SOH part of the mnemonic SOH CAH TOA. Sine(θ) = Opposite / Hypotenuse."
          }
        },
        {
          "title": "9.2 Unit Circle and Radian Measure",
          "image": "https://images.pexels.com/photos/8471854/pexels-photo-8471854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=LQjZ6H_WKcg",
          "content": `**Radian Measure:**
An alternative unit for measuring angles, often preferred in higher mathematics and science.

*   **One radian (rad)** is the angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle.

*   Relationship between degrees and radians:
    **π radians = 180°**

*   **Conversions:**
    *   To convert degrees to radians: Multiply by π/180°.
    *   To convert radians to degrees: Multiply by 180°/π.

*   Common conversions: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π, 270° = 3π/2, 360° = 2π.

*   **Arc Length:** s = rθ (where θ is in radians, r is radius, s is arc length).
*   **Area of a Sector:** A = ½ r²θ (where θ is in radians).

**The Unit Circle:**
A circle with its center at the origin (0,0) of the Cartesian coordinate plane and a radius of 1 unit.

*   Used to define trigonometric ratios for angles of any magnitude (not just acute angles in a right triangle), including angles greater than 90° and negative angles.

*   **Definition of Ratios on Unit Circle:**
    Consider a point P(x, y) on the unit circle, reached by rotating a radius from the positive x-axis through an angle θ (measured counterclockwise as positive).

    *   Since r = 1, then **x = cos(θ)** and **y = sin(θ)**.
    *   So, P(x, y) = (cos(θ), sin(θ)).
    *   tan(θ) = y/x = sin(θ)/cos(θ) (for x ≠ 0).

*   **Signs of Trigonometric Ratios in Quadrants (ASTC Rule):**
    *   **Quadrant I** (0° < θ < 90°): **A**ll ratios positive. (x, y are both +)
    *   **Quadrant II** (90° < θ < 180°): **S**ine positive, Cosine and Tangent negative. (x is -, y is +)
    *   **Quadrant III** (180° < θ < 270°): **T**angent positive, Sine and Cosine negative. (x, y are both -)
    *   **Quadrant IV** (270° < θ < 360°): **C**osine positive, Sine and Tangent negative. (x is +, y is -)
    Mnemonic: "**A**ll **S**tudents **T**ake **C**alculus" or "**A**ll **S**tations **T**o **C**entral."

*   **Angles beyond 360° and Negative Angles:**
    *   Trigonometric functions are periodic. sin(θ + 360°n) = sin(θ), cos(θ + 360°n) = cos(θ) for integer n. (tan has period 180°).
    *   sin(-θ) = -sin(θ) (**odd** function)
    *   cos(-θ) = cos(θ) (**even** function)
    *   tan(-θ) = -tan(θ) (**odd** function)

*   **Reference Angle:** The acute angle formed by the terminal side of θ and the **x-axis**. Trigonometric ratios of θ can be found from those of its reference angle, with appropriate signs for the quadrant.

(Suggested insertion: A diagram of a circle showing the definition of a radian. A clear diagram of the unit circle, showing an angle θ, point P(x,y), and how x=cosθ, y=sinθ. The ASTC quadrant diagram for signs. Examples of finding trig ratios for angles beyond 90° using reference angles and quadrant signs.)`,
          "mcq": {
            "question": "How many degrees are in π radians?",
            "options": [
              "90°",
              "180°",
              "270°",
              "360°"
            ],
            "correctAnswer": "180°",
            "explanation": "The fundamental conversion between radians and degrees is that a full circle is 2π radians or 360°, which simplifies to π radians = 180°."
          }
        },
        {
          "title": "9.3 Fundamental Identities: Pythagorean, Sum‐and‐Difference, Double‐Angle",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=vNdpwaZgjLI",
          "content": `**Trigonometric Identities:** Equations involving trigonometric functions that are true for all values of the variables for which the functions are defined. Used to simplify expressions, solve equations, and prove other identities.

**Reciprocal Identities:**
*   csc(θ) = 1 / sin(θ)
*   sec(θ) = 1 / cos(θ)
*   cot(θ) = 1 / tan(θ)

**Quotient Identities:**
*   tan(θ) = sin(θ) / cos(θ)
*   cot(θ) = cos(θ) / sin(θ)

**Pythagorean Identities:** (Derived from x² + y² = 1 on unit circle, i.e., cos²θ + sin²θ = 1)
*   **sin²(θ) + cos²(θ) = 1**
*   Dividing by cos²(θ): **tan²(θ) + 1 = sec²(θ)**
*   Dividing by sin²(θ): **1 + cot²(θ) = csc²(θ)**

**Sum and Difference Identities (Addition/Subtraction Formulas):**
*   **sin(A ± B) = sinA cosB ± cosA sinB**
    *   sin(A + B) = sinA cosB + cosA sinB
    *   sin(A - B) = sinA cosB - cosA sinB
*   **cos(A ± B) = cosA cosB ∓ sinA sinB**
    *   cos(A + B) = cosA cosB - sinA sinB
    *   cos(A - B) = cosA cosB + sinA sinB
*   **tan(A ± B) = (tanA ± tanB) / (1 ∓ tanA tanB)**

**Double-Angle Identities:** (Derived from sum identities by letting A = B = θ)
*   **sin(2θ) = 2 sin(θ) cos(θ)**
*   **cos(2θ) = cos²(θ) - sin²(θ)**
    *   Can also be written as: **cos(2θ) = 2cos²(θ) - 1** (using sin²θ = 1 - cos²θ)
    *   Or: **cos(2θ) = 1 - 2sin²(θ)** (using cos²θ = 1 - sin²θ)
*   **tan(2θ) = (2 tan(θ)) / (1 - tan²(θ))**

**Half-Angle Identities** (less commonly required in Gen Math, but may appear):
*   sin²(θ/2) = (1 - cosθ) / 2
*   cos²(θ/2) = (1 + cosθ) / 2
*   tan(θ/2) = (1 - cosθ) / sinθ = sinθ / (1 + cosθ)

**Proving Identities:**
To prove a trigonometric identity, start with one side of the equation and use algebraic manipulation and known identities to transform it until it is identical to the other side. Or, work on both sides independently until they simplify to the same expression.

(Suggested insertion: Clear listing of all these identities. Worked examples of proving various trigonometric identities step-by-step.)`,
          "mcq": {
            "question": "Which of the following is a fundamental Pythagorean identity in trigonometry?",
            "options": [
              "sin²(θ) - cos²(θ) = 1",
              "sin(θ) + cos(θ) = 1",
              "tan²(θ) - 1 = sec²(θ)",
              "sin²(θ) + cos²(θ) = 1"
            ],
            "correctAnswer": "sin²(θ) + cos²(θ) = 1",
            "explanation": "Derived from the unit circle (x² + y² = 1), the primary Pythagorean identity is sin²(θ) + cos²(θ) = 1."
          }
        },
        {
          "title": "9.4 Solving Basic Trigonometric Equations",
          "image": "https://images.pexels.com/photos/6256077/pexels-photo-6256077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=7C8Bd1QmLbU",
          "content": `**Trigonometric Equation:** An equation that contains one or more trigonometric functions of a variable angle.
The goal is to find the values of the angle (usually within a specified interval, e.g., 0° ≤ θ < 360° or 0 ≤ θ < 2π) that make the equation true.

**General Strategies for Solving Basic Trigonometric Equations:**

1.  **Isolate the Trigonometric Function:** If the equation involves a single trigonometric function, rearrange the equation to isolate that function on one side.
    *   Example: Solve 2 sin(θ) - 1 = 0 for 0° ≤ θ < 360°.
        2 sin(θ) = 1 => sin(θ) = 1/2.

2.  **Find Principal Value / Reference Angle:** Use knowledge of special angles or an inverse trigonometric function to find the principal value or reference angle (α) that satisfies the basic equation (e.g., if sin(θ) = 1/2, then reference angle α = 30° or π/6).

3.  **Identify Quadrants:** Determine the quadrants where the trigonometric function has the required sign based on the value obtained in step 1 (using ASTC rule).
    *   For sin(θ) = 1/2 (positive): Sine is positive in Quadrant I and Quadrant II.

4.  **Find All Solutions in the Specified Interval:**
    *   Quadrant I solution: θ = α
    *   Quadrant II solution (for sine): θ = 180° - α (or π - α)
    *   Quadrant III solution (for tangent): θ = 180° + α (or π + α)
    *   Quadrant IV solution (for cosine): θ = 360° - α (or 2π - α)
    *   For our example (sin(θ) = 1/2, ref angle 30°):
        *   Q I: θ = 30°
        *   Q II: θ = 180° - 30° = 150°
        *   Solutions: 30°, 150°.

5.  **General Solutions** (if interval not specified or is broader): Add integer multiples of the period of the function to the solutions found in the basic interval.
    *   For sin(θ) and cos(θ), period is 360° or 2π. So, θ = solution + 360°n or solution + 2πn (where n is an integer).
    *   For tan(θ), period is 180° or π. So, θ = solution + 180°n or solution + πn.

**Equations involving multiples of angles** (e.g., sin(2θ)): Let u = 2θ, solve for u first, then find θ. Be sure to adjust the interval for u.

**Quadratic Trigonometric Equations:** May require factoring, quadratic formula, or using Pythagorean identities to express in terms of a single trigonometric function.

*   Example: 2sin²(θ) - sin(θ) - 1 = 0. Let x = sin(θ). Then 2x² - x - 1 = 0. Factor: (2x + 1)(x - 1) = 0. So x = -1/2 or x = 1.
    sin(θ) = -1/2 or sin(θ) = 1. Then solve for θ in each case.

**Using Identities to Simplify:** Sometimes identities are needed to transform the equation into a solvable form.

(Suggested insertion: Step-by-step worked examples for solving various types of basic trigonometric equations, including those requiring finding all solutions in [0, 360°), those involving multiples of angles, and simple quadratic trigonometric equations.)`,
          "mcqs": [
            {
              "question": "What is the exact value of cos(60°)?",
              "options": [
                "1/2",
                "√3/2",
                "√2/2",
                "1"
              ],
              "correctAnswer": "1/2",
              "explanation": "For a 30°-60°-90° triangle, the side lengths are in the ratio 1:√3:2. The cosine of 60° is the adjacent side (1) over the hypotenuse (2), which is 1/2."
            },
            {
              "question": "In which quadrant are both sine and cosine negative?",
              "options": [
                "Quadrant I",
                "Quadrant II",
                "Quadrant III",
                "Quadrant IV"
              ],
              "correctAnswer": "Quadrant III",
              "explanation": "Using the ASTC rule (All, Sine, Tangent, Cosine), sine is negative in III and IV, and cosine is negative in II and III. They are both negative only in Quadrant III."
            },
            {
              "question": "The identity cos(2θ) is equivalent to:",
              "options": [
                "2sin(θ)cos(θ)",
                "sin²(θ) + cos²(θ)",
                "1 - 2sin²(θ)",
                "2cos²(θ) + 1"
              ],
              "correctAnswer": "1 - 2sin²(θ)",
              "explanation": "cos(2θ) has three common forms: cos²(θ) - sin²(θ), 2cos²(θ) - 1, and 1 - 2sin²(θ). Of the options given, this is the correct one."
            },
            {
              "question": "Find a solution for θ in the equation 2cos(θ) = √2, for 0° ≤ θ < 360°.",
              "options": [
                "30°",
                "45°",
                "60°",
                "90°"
              ],
              "correctAnswer": "45°",
              "explanation": "First, isolate cos(θ) to get cos(θ) = √2 / 2. This is a standard value for the special angle 45°. Since it's positive, a solution exists in Quadrant I, which is θ = 45°."
            },
            {
              "question": "The expression tan(θ) is equivalent to:",
              "options": [
                "sin(θ) / cos(θ)",
                "cos(θ) / sin(θ)",
                "1 / sin(θ)",
                "1 / cos(θ)"
              ],
              "correctAnswer": "sin(θ) / cos(θ)",
              "explanation": "The quotient identity for tangent defines it as the ratio of sine to cosine: tan(θ) = sin(θ) / cos(θ)."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 10: Applications of Trigonometry",
      "image": "https://images.pexels.com/photos/6256066/pexels-photo-6256066.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=QmDhai2fKzk",
        "https://www.youtube.com/watch?v=PUB0TaZ7bhA",
        "https://www.youtube.com/watch?v=_374kRfv6hc"
      ],
      "sections": [
        {
          "title": "10.1 Heights and Distances Problems",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=oD6Jhh_7_lM",
          "content": `Trigonometry is not just an abstract mathematical system; it is a powerful tool for solving practical problems involving angles, distances, and periodic phenomena. This chapter explores some key applications of trigonometry, including solving problems related to heights and distances, bearings and navigation, understanding and graphing trigonometric functions, and using these functions to model real-world periodic behavior.

These problems typically involve using trigonometric ratios (SOH CAH TOA) in right-angled triangles to find unknown heights of objects or distances between points.

*   **Angle of Elevation:** The angle measured **upwards** from the horizontal line of sight to an object that is above the observer.

*   **Angle of Depression:** The angle measured **downwards** from the horizontal line of sight to an object that is below the observer.

*   **Note:** The angle of elevation from point A to point B is equal to the angle of depression from point B to point A (alternate interior angles if horizontal lines are parallel).

**General Approach:**

1.  **Draw a Diagram:** Sketch the situation described in the problem, clearly labeling known lengths and angles, and identifying the unknown quantity. Form right-angled triangle(s).
2.  **Identify the Relevant Trigonometric Ratio:** Based on the known and unknown sides relative to a known angle in a right triangle, choose sin, cos, or tan.
3.  **Set up an Equation:** Write an equation using the chosen trigonometric ratio.
4.  **Solve for the Unknown:** Use algebraic manipulation and a calculator (if needed for trig function values or inverse functions) to find the unknown.
5.  **Include Units and Check for Reasonableness.**

**Common Scenarios:**

*   Finding the height of a tree, building, or tower given the distance from its base and the angle of elevation to its top.
*   Finding the distance to an object given its height and the angle of depression from a higher point.
*   Problems involving two angles of elevation/depression from different points, or from the top and bottom of an object (often leading to systems of equations or using the sine/cosine rule if non-right triangles are formed more generally).

(Suggested insertion: Clear diagrams illustrating angle of elevation and angle of depression. Several worked examples of typical heights and distances problems, with diagrams and step-by-step solutions, covering various scenarios like single right triangle, two right triangles, etc.)`,
          "mcq": {
            "question": "From a point on the ground, the angle of elevation to the top of a 100m tall tower is 45°. How far is the point from the base of the tower?",
            "options": [
              "50m",
              "100m",
              "100√2 m",
              "200m"
            ],
            "correctAnswer": "100m",
            "explanation": "Let d be the distance. tan(45°) = Opposite/Adjacent = 100/d. Since tan(45°) = 1, we have 1 = 100/d, so d = 100m."
          }
        },
        {
          "title": "10.2 Bearing Problems and Navigation",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=cWj1CdtpQJU",
          "content": `Bearings are used to specify directions, especially in navigation (e.g., for ships, aircraft) and surveying.
**Types of Bearings:**

1.  **Compass Bearing (or True Bearing):** Measured **clockwise from North (000° or 360°)** as a three-figure bearing.
    *   Examples:
        *   North (N) = 000° or 360°
        *   East (E) = 090°
        *   South (S) = 180°
        *   West (W) = 270°
        *   Northeast (NE) = 045°
        *   Southeast (SE) = 135°
        *   Southwest (SW) = 225°
        *   Northwest (NW) = 315°
    *   A bearing of 060° means 60° clockwise from North.

2.  **Surveyor's Bearing (or Quadrant Bearing):** Expressed as an acute angle (less than 90°) measured east or west from the North-South line.
    *   Starts with N or S, then the acute angle, then E or W.
    *   Examples:
        *   N 30° E (30° East of North)
        *   S 45° W (45° West of South)
        *   N 70° W (70° West of North)

**Solving Bearing Problems:**

1.  **Draw a Diagram:** Essential. Start with a North line at the starting point. Measure bearings clockwise from North (for compass bearings). Clearly represent distances and paths.
2.  **Use Geometry:** Problems often involve forming triangles. Use:
    *   Properties of parallel lines (e.g., alternate interior angles, corresponding angles - since North lines at different points are parallel).
    *   Trigonometric ratios for right-angled triangles (if applicable).
    *   **Sine Rule and Cosine Rule** for non-right-angled triangles:
        *   **Sine Rule:** a/sinA = b/sinB = c/sinC (Used when you know two sides and a non-included angle, or two angles and a side).
        *   **Cosine Rule:** a² = b² + c² - 2bc cosA (or to find an angle: cosA = (b² + c² - a²)/(2bc)) (Used when you know two sides and the included angle, or all three sides).
3.  Break down complex journeys into simpler legs.

(Suggested insertion: Diagrams illustrating how to measure compass bearings and surveyor's bearings. Examples of converting between them. Worked examples of navigation problems using diagrams, sine rule, and cosine rule (e.g., finding distance between two points after traveling on different bearings, finding bearing of one point from another).)`,
          "mcq": {
            "question": "What is the three-figure bearing for the direction South-West (SW)?",
            "options": [
              "045°",
              "135°",
              "225°",
              "315°"
            ],
            "correctAnswer": "225°",
            "explanation": "Bearings are measured clockwise from North (000°). South is 180° and West is 270°. South-West is exactly halfway between them, which is 180° + 45° = 225°."
          }
        },
        {
          "title": "10.3 Graphs of Trigonometric Functions",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=pS62z5CEEJk",
          "content": `Understanding the graphs of sine, cosine, and tangent functions is crucial for visualizing their periodic nature and for modeling periodic phenomena. Angles are typically measured in radians for graphing.
**1. Graph of y = sin(x):**
*   **Period:** 2π (or 360°) - the graph repeats every 2π interval.
*   **Amplitude:** 1 (maximum value is 1, minimum value is -1).
*   **Domain:** All real numbers (ℝ).
*   **Range:** [-1, 1].
*   Passes through origin (0,0).
*   **x-intercepts (zeros):** ..., -π, 0, π, 2π, ... (i.e., nπ where n is an integer).
*   Maximum values at π/2 + 2nπ. Minimum values at 3π/2 + 2nπ.
*   **Odd function:** sin(-x) = -sin(x) (symmetric about the origin).
**2. Graph of y = cos(x):**
*   **Period:** 2π (or 360°).
*   **Amplitude:** 1.
*   **Domain:** All real numbers (ℝ).
*   **Range:** [-1, 1].
*   y-intercept at (0,1).
*   **x-intercepts (zeros):** ..., -π/2, π/2, 3π/2, ... (i.e., π/2 + nπ where n is an integer).
*   Maximum values at 2nπ. Minimum values at π + 2nπ.
*   **Even function:** cos(-x) = cos(x) (symmetric about the y-axis).
*   The graph of y = cos(x) is a horizontal shift of y = sin(x) by π/2 to the left (cos(x) = sin(x + π/2)).
**3. Graph of y = tan(x):**
*   tan(x) = sin(x) / cos(x).
*   **Period:** π (or 180°).
*   **Amplitude:** Undefined (ranges from -∞ to +∞).
*   **Domain:** All real numbers except where cos(x) = 0 (i.e., x ≠ π/2 + nπ, where n is an integer).
*   **Range:** All real numbers (ℝ).
*   **Vertical Asymptotes:** Occur where cos(x) = 0 (e.g., at x = ±π/2, ±3π/2, ...). The graph approaches these lines but never touches them.
*   **x-intercepts (zeros):** Where sin(x) = 0 (e.g., x = nπ).
*   **Odd function:** tan(-x) = -tan(x) (symmetric about the origin).

**Graphs of Transformed Trigonometric Functions:**
General forms:
*   **y = A sin(B(x - C)) + D**
*   **y = A cos(B(x - C)) + D**
Where:
*   **|A|** is the **Amplitude** (vertical stretch/compression). If A is negative, reflected across x-axis.
*   **B** affects the **Period**. Period = 2π / |B| (for sin, cos). Period = π / |B| (for tan).
    *   If |B| > 1, period is shorter (horizontal compression).
    *   If 0 < |B| < 1, period is longer (horizontal stretch).
*   **C** is the **Phase Shift** (horizontal translation). Shift is C units to the right if (x - C), C units to the left if (x + C).
*   **D** is the **Vertical Shift** (translation up/down). y = D is the midline of the oscillation.

(Suggested insertion: Clear graphs of y=sin(x), y=cos(x), and y=tan(x) over at least one full period, labeling key points (intercepts, maxima/minima) and asymptotes (for tan). Examples of graphing transformed functions like y=2sin(x), y=cos(3x), y=sin(x - π/4), y=cos(x) + 1, showing how A, B, C, D affect the graph.)`,
          "mcq": {
            "question": "What is the amplitude of the function y = 3sin(2x) + 5?",
            "options": [
              "3",
              "2",
              "5",
              "1"
            ],
            "correctAnswer": "3",
            "explanation": "In the general form y = Asin(B(x-C)) + D, the amplitude is |A|. In this case, A = 3, so the amplitude is 3."
          }
        },
        {
          "title": "10.4 Trigonometric Modeling of Periodic Phenomena",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=cEp7eQjOXjw",
          "content": `Many real-world phenomena exhibit periodic (cyclical) behavior that can be modeled using sinusoidal functions (sine and cosine).

**Periodic Phenomenon:** A phenomenon that repeats itself regularly over a fixed interval of time (its period).

Examples:
*   Oscillations of a simple harmonic motion (SHM) system (e.g., mass on a spring, pendulum with small swings).
*   Alternating current (AC) voltage and current.
*   Sound waves.
*   Tides (approximate).
*   Seasonal variations in temperature, daylight hours.
*   Biological rhythms (e.g., heartbeats, circadian rhythms - though often more complex).
*   Rotational motion (e.g., height of a point on a Ferris wheel).

**Modeling with Sinusoidal Functions:**
The general form y = A sin(B(t - C)) + D or y = A cos(B(t - C)) + D can be used, where t often represents time.

Identify Key Parameters from the Data or Situation:
*   **Amplitude (A):** (Maximum value - Minimum value) / 2.
*   **Vertical Shift (D) / Midline:** (Maximum value + Minimum value) / 2. This is the average value around which oscillation occurs.
*   **Period (P):** The time taken for one complete cycle.
*   **Frequency (B-related):** B = 2π / P (if t is in radians) or B = 360° / P (if t is in degrees, less common in modeling formula).
*   **Phase Shift (C):** The horizontal shift needed to align the model with the data. Often determined by identifying a starting point (e.g., maximum, minimum, or crossing midline) relative to the standard sine or cosine graph.
    *   A **cosine** function A cos(B(t - C)) + D starts at its maximum (if A>0) or minimum (if A<0) when B(t - C) = 0, i.e., t = C.
    *   A **sine** function A sin(B(t - C)) + D starts at its midline value going upwards (if A>0) or downwards (if A<0) when B(t - C) = 0, i.e., t = C.

**Choose Sine or Cosine:** Often either can be used with an appropriate phase shift. Cosine is convenient if the starting point of the cycle (at t=0 or a shifted t=C) corresponds to a maximum or minimum. Sine is convenient if it corresponds to crossing the midline.

**Write the Model Equation.**

**Use the Model:** To predict values at other times, find times for specific values, etc.

(Suggested insertion: Word problems involving periodic phenomena (e.g., tides, Ferris wheel, temperature variation). Step-by-step guide on how to extract A, B, C, D from the problem description or data, and then how to write the sinusoidal model and use it.)`,
          "mcqs": [
            {
              "question": "The angle measured downwards from a horizontal line of sight to an object below is called the:",
              "options": [
                "Angle of Elevation",
                "Angle of Depression",
                "Reference Angle",
                "Bearing Angle"
              ],
              "correctAnswer": "Angle of Depression",
              "explanation": "The angle of depression is the angle formed between the horizontal and a line of sight to a point below the horizontal."
            },
            {
              "question": "The Cosine Rule is used to find a missing side in a triangle when you are given:",
              "options": [
                "Two angles and one side",
                "Two sides and a non-included angle",
                "All three angles",
                "Two sides and the included angle"
              ],
              "correctAnswer": "Two sides and the included angle",
              "explanation": "The Cosine Rule (a² = b² + c² - 2bc cosA) directly relates two sides (b, c) and their included angle (A) to the third side (a). It can also be used when all three sides are known to find an angle."
            },
            {
              "question": "What is the period of the function y = cos(4x)?",
              "options": [
                "2π",
                "π/2",
                "4π",
                "π/4"
              ],
              "correctAnswer": "π/2",
              "explanation": "The period of a transformed cosine function y = Acos(Bx) is 2π / |B|. Here, B=4, so the period is 2π / 4 = π/2."
            },
            {
              "question": "Which of the following phenomena is LEAST likely to be modeled by a sinusoidal (trigonometric) function?",
              "options": [
                "The height of tides over 24 hours",
                "The number of daylight hours in a year",
                "The growth of a bacterial colony with unlimited resources",
                "The height of a person on a Ferris wheel"
              ],
              "correctAnswer": "The growth of a bacterial colony with unlimited resources",
              "explanation": "The growth of a bacterial colony with unlimited resources is typically modeled by an exponential function, not a periodic trigonometric function. The other options all exhibit cyclical behavior."
            },
            {
              "question": "The graph of y = sin(x) has a y-intercept at:",
              "options": [
                "(0, 1)",
                "(0, -1)",
                "(0, 0)",
                "It has no y-intercept"
              ],
              "correctAnswer": "(0, 0)",
              "explanation": "The y-intercept occurs when x=0. Since sin(0) = 0, the graph passes through the origin (0,0)."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 11: Coordinate Geometry of Lines",
      "image": "https://images.pexels.com/photos/28380105/pexels-photo-28380105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=YpYz9USHeUY",
        "https://www.youtube.com/watch?v=lz8zVJxRFX8",
        "https://www.youtube.com/watch?v=PEiTRWu85BY"
      ],
      "sections": [
        {
          "title": "11.1 Slope, Intercepts, and Equation of a Line",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=lz8zVJxRFX8",
          "content": `Coordinate geometry (also known as analytic geometry), pioneered by René Descartes and Pierre de Fermat, combines algebra and geometry by representing geometric shapes and figures as equations in a coordinate system. This powerful fusion allows us to use algebraic methods to solve geometric problems and to visualize algebraic relationships. This chapter focuses on the coordinate geometry of straight lines, including concepts of slope, intercepts, equations of lines, properties of parallel and perpendicular lines, and applications.

**Slope (Gradient, m) of a Straight Line:**
A measure of the steepness and direction of a line.
*   Defined as the ratio of the vertical change (**rise**) to the horizontal change (**run**) between any two distinct points on the line.
    **m = Rise / Run = Δy / Δx = (y₂ - y₁) / (x₂ - x₁)**
    where (x₁, y₁) and (x₂, y₂) are coordinates of two points on the line.

*   **Interpretation of Slope:**
    *   m > 0: Line slopes upwards from left to right.
    *   m < 0: Line slopes downwards from left to right.
    *   m = 0: Horizontal line.
    *   m is undefined: Vertical line (division by zero as Δx = 0).
    *   Larger |m| means a steeper line.

**Intercepts of a Line:**
*   **y-intercept (c or b):** The y-coordinate of the point where the line crosses the y-axis. At this point, x = 0.
*   **x-intercept (a):** The x-coordinate of the point where the line crosses the x-axis. At this point, y = 0.

**Equations of a Straight Line (Different Forms):**

1.  **Slope-Intercept Form:** y = mx + c
    *   m is the slope.
    *   c is the y-intercept.
    *   Most common form for quickly identifying slope and y-intercept, and for graphing.

2.  **Point-Slope Form:** y - y₁ = m(x - x₁)
    *   m is the slope.
    *   (x₁, y₁) is a known point on the line.
    *   Useful for finding the equation of a line when a point and the slope are known, or when two points are known (first find slope, then use one point).

3.  **General Form (Standard Form in some contexts):** Ax + By + C = 0 or Ax + By = C
    *   A, B, C are constants (usually integers, with A ≥ 0).
    *   Slope m = -A/B (if B ≠ 0).
    *   y-intercept c = -C/B (if B ≠ 0).
    *   Not as immediately intuitive for graphing but useful in some algebraic manipulations.

4.  **Two-Point Form (Derived from slope formula):**
    (y - y₁) / (x - x₁) = (y₂ - y₁) / (x₂ - x₁)
    Given two points (x₁, y₁) and (x₂, y₂).

5.  **Intercept Form:** x/a + y/b = 1
    *   a is the x-intercept, b is the y-intercept (assuming a, b ≠ 0).

**Horizontal and Vertical Lines:**
*   Horizontal Line: Equation **y = c** (slope m = 0).
*   Vertical Line: Equation **x = a** (slope is undefined). Cannot be written in slope-intercept form.

(Suggested insertion: Diagrams showing how to calculate slope from two points, and illustrating positive, negative, zero, and undefined slopes. Examples of finding the equation of a line given: slope and y-intercept; a point and slope; two points. Examples of converting between different forms of the equation.)`,
          "mcq": {
            "question": "What is the slope of the line passing through the points (2, 3) and (4, 7)?",
            "options": [
              "1/2",
              "2",
              "-2",
              "4"
            ],
            "correctAnswer": "2",
            "explanation": "The slope m = (y₂ - y₁) / (x₂ - x₁) = (7 - 3) / (4 - 2) = 4 / 2 = 2."
          }
        },
        {
          "title": "11.2 Parallel and Perpendicular Lines",
          "image": "https://images.pexels.com/photos/9052534/pexels-photo-9052534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=uPg4A7K8cPc",
          "content": `Relationships between the slopes of two lines determine if they are parallel or perpendicular.
Let two distinct non-vertical lines be L₁ with slope m₁ and L₂ with slope m₂.

**Parallel Lines:**
*   Two non-vertical lines are parallel if and only if their slopes are equal:
    **m₁ = m₂**
*   They must also have different y-intercepts (otherwise they are the same line).
*   Vertical lines (undefined slope) are parallel to each other.

**Perpendicular Lines:**
*   Two non-vertical lines are perpendicular if and only if the product of their slopes is -1 (i.e., their slopes are **negative reciprocals** of each other):
    **m₁ m₂ = -1** or **m₂ = -1/m₁** (and m₁ = -1/m₂)
*   A horizontal line (slope m=0) is perpendicular to a vertical line (undefined slope). This case is an exception to the m₁m₂ = -1 rule, but their perpendicularity is clear.

(Suggested insertion: Graphs showing examples of parallel lines (with same slope indicated) and perpendicular lines (with slopes m and -1/m indicated). Worked examples of: finding if two lines are parallel, perpendicular, or neither given their equations; finding the equation of a line parallel/perpendicular to a given line and passing through a given point.)`,
          "mcq": {
            "question": "A line is perpendicular to y = 2x + 5. What is the slope of this line?",
            "options": [
              "2",
              "-2",
              "1/2",
              "-1/2"
            ],
            "correctAnswer": "-1/2",
            "explanation": "Perpendicular lines have slopes that are negative reciprocals of each other. The slope of the given line is 2. The negative reciprocal is -1/2."
          }
        },
        {
          "title": "11.3 Distance Between Two Points, Midpoint Formula",
          "image": "https://images.pexels.com/photos/30901571/pexels-photo-30901571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=MQbDXDsdi5o",
          "content": `**Distance Formula (derived from Pythagorean theorem):**
The distance d between two points P₁(x₁, y₁) and P₂(x₂, y₂) in the Cartesian plane is given by:
**d = √[(x₂ - x₁)² + (y₂ - y₁)²]**

**Midpoint Formula:**
The coordinates of the midpoint M(x_m, y_m) of the line segment connecting two points P₁(x₁, y₁) and P₂(x₂, y₂) are given by the average of their respective coordinates:
**M = ((x₁ + x₂)/2 , (y₁ + y₂)/2)**

(Suggested insertion: A diagram showing two points and the right triangle formed by their x and y differences, illustrating the derivation of the distance formula. A diagram showing the midpoint of a line segment. Worked examples for calculating distance and finding midpoints.)`,
          "mcq": {
            "question": "What is the midpoint of the line segment with endpoints (1, 8) and (5, 2)?",
            "options": [
              "(3, 5)",
              "(6, 10)",
              "(4, 6)",
              "(2, 3)"
            ],
            "correctAnswer": "(3, 5)",
            "explanation": "The midpoint formula is ((x₁ + x₂)/2, (y₁ + y₂)/2). So, ((1 + 5)/2, (8 + 2)/2) = (6/2, 10/2) = (3, 5)."
          }
        },
        {
          "title": "11.4 Applications: Navigation, Optimization Problems",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=RaHRvnb0dY8",
          "content": `Coordinate geometry provides tools to model and solve various real-world problems.

**Navigation and Mapping:**
*   Representing locations as coordinates.
*   Calculating distances between locations.
*   Finding paths (equations of lines for straight paths).
*   Determining if paths are parallel or perpendicular.
*   Using GPS (Global Positioning System) which relies on coordinate geometry and trilateration/multilateration.

**Geometry Problems:**
*   Proving geometric properties of shapes using coordinates (e.g., showing a quadrilateral is a parallelogram by showing opposite sides are parallel, or diagonals bisect each other).
*   Finding areas of polygons using coordinates (e.g., shoelace formula).
*   Finding equations of medians, altitudes, perpendicular bisectors of triangles.

**Linear Programming / Optimization (Simple Cases):**
*   In problems involving maximizing or minimizing a linear objective function subject to linear inequality constraints, the feasible region is often a polygon. The optimal solution often occurs at one of the vertices (corners) of this feasible region, whose coordinates can be found by solving systems of linear equations representing the boundary lines. (More developed in higher math, but basics can be introduced).

**Physics and Engineering:**
*   Representing paths of objects.
*   Analyzing forces and vectors in a coordinate system.
*   Describing lines of sight, trajectories (though often more complex than straight lines, e.g., parabolas).

**Computer Graphics:** Lines, shapes, and transformations are heavily based on coordinate geometry.

(Suggested insertion: Word problems involving simple navigation (e.g., ship traveling from point A to B, calculate distance). A basic geometric proof using coordinates (e.g., showing diagonals of a rectangle are equal). A very simple optimization problem where feasible region vertices are found.)`,
          "mcqs": [
            {
              "question": "What is the equation of a line with a slope of 3 and a y-intercept of -4?",
              "options": [
                "y = -4x + 3",
                "y = 3x - 4",
                "y = 3x + 4",
                "y = 4x - 3"
              ],
              "correctAnswer": "y = 3x - 4",
              "explanation": "Using the slope-intercept form y = mx + c, where m is the slope and c is the y-intercept, we substitute m=3 and c=-4 to get y = 3x - 4."
            },
            {
              "question": "Two lines are parallel. If the equation of the first line is y = 5x + 2, which of the following could be the equation of the second line?",
              "options": [
                "y = -5x + 2",
                "y = (1/5)x + 3",
                "y = 5x - 3",
                "y = (-1/5)x + 2"
              ],
              "correctAnswer": "y = 5x - 3",
              "explanation": "Parallel lines must have the same slope. The slope of the first line is 5. Of the options, only y = 5x - 3 has a slope of 5."
            },
            {
              "question": "What is the distance between the points (0, 5) and (3, 1)?",
              "options": [
                "4",
                "5",
                "√7",
                "25"
              ],
              "correctAnswer": "5",
              "explanation": "Using the distance formula d = √[(x₂ - x₁)² + (y₂ - y₁)²], we get d = √[(3 - 0)² + (1 - 5)²] = √[3² + (-4)²] = √[9 + 16] = √25 = 5."
            },
            {
              "question": "What is the equation of a horizontal line passing through the point (2, -6)?",
              "options": [
                "x = 2",
                "y = -6",
                "y = 2x - 6",
                "y = -3x"
              ],
              "correctAnswer": "y = -6",
              "explanation": "A horizontal line has a constant y-value for all x-values. Since it passes through (2, -6), its y-value must be -6 everywhere. The equation is y = -6."
            },
            {
              "question": "Coordinate geometry is the study of geometry using:",
              "options": [
                "A compass and straightedge",
                "A coordinate system and algebra",
                "Three-dimensional models",
                "Logical proofs without numbers"
              ],
              "correctAnswer": "A coordinate system and algebra",
              "explanation": "Coordinate geometry, also known as analytic geometry, uses a coordinate system (like the Cartesian plane) to represent geometric figures as algebraic equations, allowing geometric problems to be solved with algebraic methods."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 12: Conic Sections (Introductory Overview)",
      "image": "https://images.pexels.com/photos/6956302/pexels-photo-6956302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=PLrgwD9TleU",
        "https://www.youtube.com/watch?v=0A7RR0oy2ho",
        "https://www.youtube.com/watch?v=JUvo3GrgWHk"
      ],
      "sections": [
        {
          "title": "12.1 Circle: Equation, Properties, Tangents",
          "image": "https://images.pexels.com/photos/8471854/pexels-photo-8471854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=vdgCNvNkPUc",
          "content": `Conic sections are curves formed by the intersection of a plane and a double-napped cone (two cones placed tip-to-tip). These curves – the circle, parabola, ellipse, and hyperbola – have been studied since ancient Greece and possess remarkable geometric properties and wide-ranging applications in physics (e.g., planetary orbits, telescope mirrors), engineering, and architecture. This chapter provides an introductory overview of the standard equations and key properties of these conic sections in the context of coordinate geometry.

(Note: The depth here will be introductory, focusing on standard forms centered at the origin or with simple translations, and key geometric properties. Detailed derivations or rotated conics are usually beyond "General Mathematics.")

A **circle** is the set of all points in a plane that are equidistant from a fixed point called the **center**. The fixed distance is called the **radius**.

**Standard Equation of a Circle (Center at Origin):**
If the center of the circle is at the origin (0,0) and the radius is r, the equation is:
**x² + y² = r²** (Derived from distance formula/Pythagorean theorem: √((x-0)² + (y-0)²) = r).

**Standard Equation of a Circle (Center at (h,k)):**
If the center of the circle is at (h,k) and the radius is r, the equation is:
**(x - h)² + (y - k)² = r²**

**General Form of the Equation of a Circle:**
**x² + y² + Dx + Ey + F = 0**
This can be converted to standard form by completing the square for the x-terms and y-terms separately.

**Properties:**
*   Center (h,k)
*   Radius r
*   Diameter d = 2r
*   Circumference C = 2πr
*   Area A = πr²

**Tangent to a Circle:** A line that intersects the circle at exactly one point (the point of tangency). The tangent line is **perpendicular** to the radius drawn to the point of tangency.

Problems may involve finding the equation of a tangent at a given point on the circle, or determining if a line is tangent.

(Suggested insertion: Diagrams showing a circle with center and radius labeled. Derivation of the standard equation. Examples of finding the equation of a circle given center and radius, or given endpoints of a diameter. Example of converting general form to standard form by completing the square. Diagram of a tangent to a circle.)`,
          "mcq": {
            "question": "What is the equation of a circle with its center at (2, -3) and a radius of 5?",
            "options": [
              "(x - 2)² + (y + 3)² = 5",
              "(x + 2)² + (y - 3)² = 25",
              "(x - 2)² + (y + 3)² = 25",
              "x² + y² = 25"
            ],
            "correctAnswer": "(x - 2)² + (y + 3)² = 25",
            "explanation": "The standard equation of a circle with center (h, k) and radius r is (x - h)² + (y - k)² = r². Substituting h=2, k=-3, and r=5 gives (x - 2)² + (y - (-3))² = 5², which simplifies to (x - 2)² + (y + 3)² = 25."
          }
        },
        {
          "title": "12.2 Parabola: Vertex Form, Focus‐Directrix Property",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=ocvHywoMCqc",
          "content": `A **parabola** is the set of all points in a plane that are equidistant from a fixed point called the **focus (F)** and a fixed line called the **directrix (d)**.

*   **Vertex (V):** The point on the parabola that lies midway between the focus and the directrix. It is the point where the parabola "turns."
*   **Axis of Symmetry:** The line passing through the focus and the vertex, perpendicular to the directrix. The parabola is symmetric about this axis.

**Standard Equations of a Parabola (Vertex at Origin (0,0)):**

1.  **Opens Upwards or Downwards** (Axis of symmetry is y-axis):
    *   Equation: **x² = 4py**
    *   Vertex: (0,0)
    *   Focus: (0, p)
    *   Directrix: y = -p
    *   If p > 0, opens upwards. If p < 0, opens downwards.
    *   |p| is the distance from vertex to focus, and from vertex to directrix.

2.  **Opens Rightwards or Leftwards** (Axis of symmetry is x-axis):
    *   Equation: **y² = 4px**
    *   Vertex: (0,0)
    *   Focus: (p, 0)
    *   Directrix: x = -p
    *   If p > 0, opens rightwards. If p < 0, opens leftwards.

**Parabola with Vertex at (h,k) (Vertex Form):**
*   **Opens Up/Down:** **(x - h)² = 4p(y - k)**
    *   Vertex: (h,k), Focus: (h, k+p), Directrix: y = k-p.
*   **Opens Right/Left:** **(y - k)² = 4p(x - h)**
    *   Vertex: (h,k), Focus: (h+p, k), Directrix: x = h-p.

(Note: Quadratic functions y = ax² + bx + c are parabolas opening up/down. x = ay² + by + c are parabolas opening left/right.)

**Applications:** Reflecting telescopes (parabolic mirrors focus parallel light to focus), satellite dishes, car headlights, paths of projectiles (under gravity, ignoring air resistance).

(Suggested insertion: Diagrams for parabolas opening up/down and left/right, showing vertex, focus, directrix, and axis of symmetry for vertex at origin and vertex at (h,k). Simple examples of finding focus/directrix given equation, or equation given vertex/focus.)`,
          "mcq": {
            "question": "A parabola is defined as the set of all points equidistant from a fixed point and a fixed line. What are the fixed point and fixed line called?",
            "options": [
              "Center and Radius",
              "Vertex and Axis of Symmetry",
              "Focus and Directrix",
              "Asymptote and Vertex"
            ],
            "correctAnswer": "Focus and Directrix",
            "explanation": "This is the fundamental definition of a parabola in coordinate geometry. The fixed point is the focus and the fixed line is the directrix."
          }
        },
        {
          "title": "12.3 Ellipse and Hyperbola: Standard Forms and Foci (Introductory)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=Bx6d0oUIVzw",
          "content": `**Ellipse:**
The set of all points in a plane such that the **sum** of the distances from each point to two fixed points (the **foci**, plural of focus, F₁ and F₂) is constant.

*   **Major Axis:** The longer axis of symmetry, passing through the foci. Length **2a**. Endpoints are **vertices**.
*   **Minor Axis:** The shorter axis of symmetry, perpendicular to major axis. Length **2b**.
*   **Center:** Midpoint of major and minor axes.
*   Relationship: **a² = b² + c²**, where c is distance from center to each focus (c < a).
*   **Eccentricity (e):** e = c/a (For ellipse, 0 ≤ e < 1. e=0 for a circle). Measures "ovalness."

**Standard Equations of an Ellipse (Center at Origin (0,0)):**
1.  **Major Axis along x-axis:**
    *   **x²/a² + y²/b² = 1** (where a > b)
    *   Vertices: (±a, 0)
    *   Foci: (±c, 0) where c² = a² - b².
    *   Endpoints of minor axis: (0, ±b)
2.  **Major Axis along y-axis:**
    *   **x²/b² + y²/a² = 1** (where a > b)
    *   Vertices: (0, ±a)
    *   Foci: (0, ±c) where c² = a² - b².
    *   Endpoints of minor axis: (±b, 0)
(If center is at (h,k), replace x² with (x-h)² and y² with (y-k)².)

**Applications:** Planetary orbits (Kepler's First Law), whispering galleries, some optical systems.

**Hyperbola:**
The set of all points in a plane such that the **absolute difference** of the distances from each point to two fixed points (the **foci**, F₁ and F₂) is constant.

*   Consists of two disconnected **branches**.
*   **Transverse Axis:** Line segment connecting the two **vertices** (turning points of branches), passing through foci. Length **2a**.
*   **Conjugate Axis:** Perpendicular to transverse axis through center. Length **2b**.
*   **Center:** Midpoint of transverse axis.
*   Relationship: **c² = a² + b²**, where c is distance from center to each focus (c > a).
*   **Asymptotes:** Two straight lines that the branches of the hyperbola approach as they extend to infinity. They pass through the center.
*   **Eccentricity (e):** e = c/a (For hyperbola, e > 1).

**Standard Equations of a Hyperbola (Center at Origin (0,0)):**
1.  **Transverse Axis along x-axis (Opens Left/Right):**
    *   **x²/a² - y²/b² = 1**
    *   Vertices: (±a, 0)
    *   Foci: (±c, 0) where c² = a² + b².
    *   Asymptotes: y = ±(b/a)x.
2.  **Transverse Axis along y-axis (Opens Up/Down):**
    *   **y²/a² - x²/b² = 1**
    *   Vertices: (0, ±a)
    *   Foci: (0, ±c) where c² = a² + b².
    *   Asymptotes: y = ±(a/b)x.
(If center is at (h,k), replace x² with (x-h)² and y² with (y-k)².)

**Applications:** Paths of some comets, LORAN navigation system, shape of cooling towers, some telescope designs.

(Suggested insertion: Diagrams for ellipse (showing center, foci, major/minor axes, vertices) and hyperbola (showing center, foci, vertices, asymptotes, branches) centered at origin for both horizontal and vertical orientations. Focus on identifying key parameters (a,b,c) from standard equations.)`,
          "mcq": {
            "question": "For the ellipse given by the equation x²/25 + y²/16 = 1, what is the length of the major axis?",
            "options": [
              "5",
              "10",
              "4",
              "8"
            ],
            "correctAnswer": "10",
            "explanation": "The equation is in the form x²/a² + y²/b² = 1. Here, a² = 25, so a = 5. The length of the major axis is 2a, which is 2 * 5 = 10."
          }
        },
        {
          "title": "12.4 Locus Problems Involving Conic Sections",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=OPSCKXXvWiM",
          "content": `A **locus** (plural: **loci**) is a set of points that satisfy a given geometric condition or property. The equations of conic sections are essentially descriptions of loci.

Understanding the definition of each conic section as a locus is key:
*   **Circle:** Locus of points equidistant from a fixed point (center).
*   **Parabola:** Locus of points equidistant from a fixed point (focus) and a fixed line (directrix).
*   **Ellipse:** Locus of points where the **sum** of distances to two fixed points (foci) is constant.
*   **Hyperbola:** Locus of points where the **absolute difference** of distances to two fixed points (foci) is constant.

**Solving Locus Problems:**
1.  **Understand the Condition:** Clearly identify the geometric condition that the points in the locus must satisfy.
2.  **Choose a Coordinate System:** Set up a Cartesian coordinate system appropriately (e.g., place known points or lines conveniently).
3.  **Represent a General Point:** Let P(x,y) be an arbitrary point in the locus.
4.  **Translate the Geometric Condition into an Algebraic Equation:** Use distance formula, properties of slope, etc., to express the given condition in terms of the coordinates x and y of point P and any given fixed points or lines.
5.  **Simplify the Algebraic Equation:** Manipulate the equation to obtain a standard form that can be recognized as the equation of a specific curve (often a line or a conic section).
6.  **Identify the Locus:** Name the curve and describe its key features (e.g., center, radius, foci, vertices, directrix, asymptotes).

**Examples of Locus Problems leading to Conics:**
*   Find the locus of a point P(x,y) that moves such that its distance from a fixed point (h,k) is always r. (Leads to circle equation).
*   Find the locus of a point P(x,y) that moves such that it is equidistant from a fixed point F(p,0) and a fixed line x = -p. (Leads to parabola equation y² = 4px).
*   Find the locus of a point P(x,y) such that the sum of its distances from two fixed points F₁(-c,0) and F₂(c,0) is 2a. (Leads to ellipse equation x²/a² + y²/b² = 1, where b² = a² - c²).
*   Find the locus of a point P(x,y) such that the difference of its distances from two fixed points F₁(-c,0) and F₂(c,0) is ±2a. (Leads to hyperbola equation x²/a² - y²/b² = 1, where b² = c² - a²).
*   More complex conditions involving ratios of distances can also lead to conics (e.g., PF = e·PD, where P is point, F is focus, D is foot of perpendicular to directrix, e is eccentricity. This definition unifies parabola (e=1), ellipse (0<e<1), and hyperbola (e>1)).

(Suggested insertion: A couple of worked examples of locus problems. Start with one that clearly derives the equation of a circle or parabola from its distance-based definition. Then perhaps one slightly more involved if the curriculum supports it, like deriving the ellipse equation, emphasizing the algebraic steps after translating the geometric condition.)`,
          "mcqs": [
            {
              "question": "What is the center and radius of the circle given by the equation x² + y² = 49?",
              "options": [
                "Center (7,7), Radius 49",
                "Center (0,0), Radius 49",
                "Center (7,7), Radius 7",
                "Center (0,0), Radius 7"
              ],
              "correctAnswer": "Center (0,0), Radius 7",
              "explanation": "The equation is in the form x² + y² = r². The center is at the origin (0,0). r² = 49, so the radius r = √49 = 7."
            },
            {
              "question": "The parabola with equation y² = 12x opens in which direction?",
              "options": [
                "Upwards",
                "Downwards",
                "To the right",
                "To the left"
              ],
              "correctAnswer": "To the right",
              "explanation": "The equation is in the form y² = 4px. Since the y term is squared, it opens horizontally. Since the coefficient of x (12) is positive, it opens to the right."
            },
            {
              "question": "Which conic section is formed when the sum of the distances from any point on the curve to two fixed points (foci) is constant?",
              "options": [
                "Circle",
                "Parabola",
                "Ellipse",
                "Hyperbola"
              ],
              "correctAnswer": "Ellipse",
              "explanation": "This is the locus definition of an ellipse. For a hyperbola, it's the difference of the distances that is constant."
            },
            {
              "question": "The lines that a hyperbola approaches but never touches are called its:",
              "options": [
                "Directrices",
                "Tangents",
                "Axes of symmetry",
                "Asymptotes"
              ],
              "correctAnswer": "Asymptotes",
              "explanation": "Asymptotes are a key feature of hyperbolas, guiding the shape of their two branches as they extend to infinity."
            },
            {
              "question": "A set of points that satisfy a given geometric condition is called a:",
              "options": [
                "Formula",
                "Locus",
                "Theorem",
                "Proof"
              ],
              "correctAnswer": "Locus",
              "explanation": "A locus is a collection of points whose location is determined by a specific rule or condition. The equations of conic sections are descriptions of specific loci."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 13: Data Collection and Presentation",
      "image": "https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=hcgThf5mv38",
        "https://www.youtube.com/watch?v=J_VOiNwARUA",
        "https://www.youtube.com/watch?v=Bh6wRep5IF4"
      ],
      "sections": [
        {
          "title": "13.1 Types of Data: Qualitative vs. Quantitative",
          "image": "https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=tNleWhS0JrY",
          "content": `Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data. Probability deals with the likelihood of events occurring. Both are crucial tools for making informed decisions in a world full of variability and uncertainty. This chapter focuses on the initial stages of the statistical process: understanding different types of data, methods for collecting data, and techniques for organizing and presenting data in meaningful ways, including frequency tables and various graphical representations. It also introduces fundamental measures to summarize data.

**Data:** Information, especially facts or numbers, collected for reference or analysis.

**Classification of Data:**

**Qualitative Data (Categorical Data):**
*   Describes qualities, characteristics, or categories. Cannot be measured numerically in a meaningful way, though categories can be assigned numerical codes.
    *   **Nominal Data:** Categories with no natural order or ranking.
        *   Examples: Gender (male, female), colors (red, blue, green), types of cars, nationality, marital status.
    *   **Ordinal Data:** Categories that can be ordered or ranked, but the differences between categories are not necessarily equal or meaningful.
        *   Examples: Educational levels (primary, secondary, tertiary), customer satisfaction ratings (poor, fair, good, excellent), socio-economic status (low, middle, high), grades (A, B, C).

**Quantitative Data (Numerical Data):**
*   Represents quantities that can be measured numerically. Arithmetic operations (addition, averaging) are meaningful.
    *   **Discrete Data:** Can only take specific, distinct numerical values (often whole numbers, resulting from counting). There are "gaps" between possible values.
        *   Examples: Number of students in a class, number of cars in a parking lot, number of goals scored, shoe size.
    *   **Continuous Data:** Can take any numerical value within a given range (resulting from measuring). Values are not restricted to whole numbers.
        *   Examples: Height of students, weight of objects, temperature, time taken to complete a task, length, volume. (Measurement precision is always limited by the measuring instrument).

**Sources of Data:**
*   **Primary Data:** Data collected firsthand by the researcher or investigator for a specific purpose (e.g., through surveys, experiments, direct observations).
*   **Secondary Data:** Data that has already been collected by someone else for another purpose but can be used for the current investigation (e.g., government publications, company records, published research articles, internet databases).

**Data Collection Methods:**
*   Surveys (Questionnaires, Interviews)
*   Experiments
*   Observations
*   Existing Records/Databases

(Suggested insertion: A table clearly differentiating between qualitative (nominal, ordinal) and quantitative (discrete, continuous) data with multiple examples for each. Brief mention of primary vs. secondary data sources.)`,
          "mcq": {
            "question": "The height of students in a class is an example of what type of data?",
            "options": [
              "Qualitative Nominal",
              "Qualitative Ordinal",
              "Quantitative Discrete",
              "Quantitative Continuous"
            ],
            "correctAnswer": "Quantitative Continuous",
            "explanation": "Height is a measurement that can take any value within a range, not just specific whole numbers. Therefore, it is quantitative and continuous."
          }
        },
        {
          "title": "13.2 Frequency Tables, Grouped vs. Ungrouped Data",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=cjvtXfgpwi8",
          "content": `Raw data (data in its original, unorganized form) is often difficult to interpret. Organizing data into tables and using graphical representations makes it more manageable and easier to understand patterns.

**Frequency Distribution Table:**
A table that displays the frequency (number of occurrences) of each distinct value or each category/class interval in a dataset.

*   **For Ungrouped Data** (Discrete data with a limited number of distinct values, or categorical data):
    *   List each distinct value or category in one column.
    *   Use tally marks (optional, for manual counting) in a second column to count occurrences.
    *   Write the frequency (f) for each value/category in a third column.
    *   The sum of frequencies (Σf) should equal the total number of data points (N).
    *   Can also include columns for:
        *   **Relative Frequency:** Frequency (f) / Total Frequency (N). (Often expressed as a decimal or percentage).
        *   **Cumulative Frequency:** The sum of frequencies up to and including the current value/category.

*   **For Grouped Data** (Continuous data or discrete data with a wide range of values):
    1.  **Determine the Range:** Highest Value - Lowest Value.
    2.  **Decide on the Number of Classes (Class Intervals):** Usually between 5 and 15 classes. Depends on dataset size. (Too few classes hide details; too many make it unwieldy).
    3.  **Determine the Class Width (Class Size):** Approximately Range / Number of Classes. Often rounded to a convenient number.
    4.  **Define Class Limits and Class Boundaries:**
        *   **Class Limits:** The smallest and largest data values that can fall into a class (e.g., 10-19, 20-29). Ensure classes are mutually exclusive and exhaustive.
        *   **Class Boundaries:** Values used to separate classes without gaps, ensuring continuous data is handled correctly. (e.g., for 10-19 and 20-29, boundaries might be 9.5, 19.5, 29.5). Used for constructing histograms.
    5.  **Tally and Find Frequencies:** Count the number of data values falling into each class interval.
    6.  **Class Midpoint (Class Mark):** The middle value of a class interval. (Lower Limit + Upper Limit) / 2. Used for calculating mean of grouped data and for frequency polygons.
    *   Can also include columns for relative frequency, cumulative frequency, and percentage cumulative frequency.

**Graphical Presentation of Data:**

*   **Bar Chart (Bar Graph):**
    *   Represents categorical data (nominal or ordinal) or ungrouped discrete data.
    *   Uses rectangular bars of equal width, with heights (or lengths) proportional to the frequencies or relative frequencies of the categories.
    *   Bars are usually separated by gaps. Can be vertical or horizontal.
    *   Clearly labeled axes and title.

*   **Pie Chart:**
    *   Represents parts of a whole (categorical data where categories are mutually exclusive).
    *   A circle is divided into sectors, where the angle (and thus area) of each sector is proportional to the frequency or percentage of the category it represents.
    *   **Angle of sector = (Frequency of Category / Total Frequency) × 360°**.
    *   Label sectors clearly with category names and percentages/frequencies.

*   **Histogram:**
    *   Represents the frequency distribution of grouped continuous data (or grouped discrete data).
    *   Uses rectangular bars of widths equal to the class intervals, with heights proportional to the frequencies (or frequency densities).
    *   Bars are **adjacent (no gaps between them)** because data is continuous or treated as such.
    *   Horizontal axis represents class boundaries (or midpoints). Vertical axis represents frequency (or frequency density if class widths vary).

*   **Frequency Polygon:**
    *   Line graph representing grouped data.
    *   Plot frequencies against the class midpoints.
    *   Join the plotted points with straight line segments.
    *   Often anchored to the horizontal axis by adding classes with zero frequency at both ends.
    *   Can be superimposed on a histogram.

*   **Cumulative Frequency Curve (Ogive):**
    *   Line graph representing cumulative frequencies.
    *   Plot cumulative frequencies against the upper class boundaries (for "less than" ogive) or lower class boundaries (for "more than" ogive).
    *   Useful for estimating medians, quartiles, and percentiles.

(Suggested insertion: An example of creating a frequency distribution table for ungrouped discrete data. A detailed example of constructing a grouped frequency distribution table from a raw dataset (showing range, class width, limits, boundaries, tally, frequency, midpoint). Examples of well-drawn bar charts, pie charts, histograms, frequency polygons, and ogives based on sample data.)`,
          "mcq": {
            "question": "What type of graph is most appropriate for displaying the frequency distribution of grouped continuous data?",
            "options": [
              "Bar Chart",
              "Pie Chart",
              "Histogram",
              "Scatter Plot"
            ],
            "correctAnswer": "Histogram",
            "explanation": "A histogram is specifically designed to represent the frequency of continuous data that has been grouped into class intervals. Its adjacent bars reflect the continuous nature of the data."
          }
        },
        {
          "title": "13.3 Measures of Central Tendency: Mean, Median, Mode",
          "image": "https://images.pexels.com/photos/9052534/pexels-photo-9052534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=eVfJ29OUXbA",
          "content": `Measures of central tendency (or averages) are single values that attempt to describe the "center" or "typical" value of a dataset.

**Mean (Arithmetic Mean):**
*   The sum of all data values divided by the number of data values.
*   **For Ungrouped Data:** **x̄ = (Σx) / n**
    (where x̄ is sample mean, Σx is sum of values, n is number of values).
*   **For Ungrouped Data with Frequencies (or from Frequency Table):** **x̄ = (Σfx) / Σf**
    (where f is frequency of each value x).
*   **For Grouped Data (from Frequency Table):** Use class midpoints (x_m) as representative values for each class.
    **x̄ ≈ (Σfx_m) / Σf** (This is an estimate of the mean).
*   **Properties:** Affected by every value in the dataset; **sensitive to extreme values (outliers)**; most commonly used measure of central tendency for quantitative data.

**Median:**
*   The middle value in a dataset that has been arranged in order of magnitude (ascending or descending).
*   **For Ungrouped Data:**
    *   If the number of values (n) is **odd**, the median is the ((n+1)/2)-th value in the ordered list.
    *   If n is **even**, the median is the average of the two middle values ((n/2)-th and (n/2 + 1)-th values).
*   **For Grouped Data (Estimate from Ogive or Formula):** Can be estimated by finding the value corresponding to the 50th percentile (N/2-th value) on a cumulative frequency curve (ogive). A formula can also be used:
    **Median = L + [((N/2) - F) / f_m] × w**
    (where L=lower class boundary of median class, N=total frequency, F=cumulative frequency of class before median class, f_m=frequency of median class, w=width of median class).
*   **Properties:** **Not affected by extreme values (outliers)**; good measure for skewed distributions.

**Mode:**
*   The value or category that occurs most frequently in a dataset.
*   **For Ungrouped Data:** Identify the value with the highest frequency.
*   **For Grouped Data:** The class interval with the highest frequency is the **modal class**. The mode can be estimated from a histogram (highest bar) or using a formula (less common in Gen Math).
*   **Properties:**
    *   Can be used for both quantitative and qualitative data.
    *   A dataset can have no mode (all values occur once), one mode (unimodal), two modes (bimodal), or more than two modes (multimodal).
    *   Not affected by extreme values.
    *   May not be unique or may not represent the center well if distribution is unusual.

**Choosing the Appropriate Measure:**
*   **Mean:** Good for symmetric distributions without outliers.
*   **Median:** Better for skewed distributions or data with outliers.
*   **Mode:** Useful for categorical data or when the most frequent value is of interest.

(Suggested insertion: Worked examples calculating mean, median, mode for ungrouped data. Step-by-step example of finding the mean of grouped data using midpoints. Illustration of estimating median from an ogive.)`,
          "mcq": {
            "question": "For the dataset {2, 5, 2, 8, 3}, what is the mode?",
            "options": [
              "2",
              "3",
              "4",
              "5"
            ],
            "correctAnswer": "2",
            "explanation": "The mode is the value that occurs most frequently. In this dataset, the number 2 appears twice, while all other numbers appear once. So, the mode is 2."
          }
        },
        {
          "title": "13.4 Measures of Dispersion: Range, Quartiles, Variance, Standard Deviation",
          "image": "https://images.pexels.com/photos/9052534/pexels-photo-9052534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=c5nx4IAxV2A",
          "content": `Measures of dispersion (or variability or spread) describe how spread out or scattered the data values are in a dataset. A small dispersion indicates data points are clustered closely around the center; a large dispersion indicates they are more spread out.

**Range:**
*   The simplest measure of dispersion.
*   **Range = Highest Value - Lowest Value.**
*   **Properties:** Easy to calculate but highly affected by extreme values (outliers) and only uses two data points.

**Quartiles and Interquartile Range (IQR):**
*   **Quartiles:** Values that divide an ordered dataset into four equal parts.
    *   **First Quartile (Q₁ or Lower Quartile):** The value below which 25% of the data lies (25th percentile). Median of the lower half of the data.
    *   **Second Quartile (Q₂):** The median of the entire dataset (50th percentile).
    *   **Third Quartile (Q₃ or Upper Quartile):** The value below which 75% of the data lies (75th percentile). Median of the upper half of the data.
*   **Interquartile Range (IQR):** The range of the middle 50% of the data.
    **IQR = Q₃ - Q₁.**
*   **Properties:** IQR is not affected by extreme outliers (more robust measure of spread than range). Used in constructing box plots (box-and-whisker plots).
*   **Semi-Interquartile Range (Quartile Deviation):** (Q₃ - Q₁) / 2.

**Variance (s² for sample, σ² for population):**
*   A measure of the average squared deviation of each data value from the mean of the dataset.
*   **For Ungrouped Data (Sample Variance):**
    **s² = Σ(x - x̄)² / (n - 1)** (The n-1 is for an unbiased estimate of population variance from a sample).
    Computational formula: s² = [Σx² - (Σx)²/n] / (n - 1).
*   **For Grouped Data (Sample Variance Estimate):**
    **s² ≈ [Σf(x_m - x̄)²] / (Σf - 1)** or **s² ≈ [Σfx_m² - (Σfx_m)²/N] / (N - 1)** (where N = Σf).
*   Units are the square of the original data units (e.g., cm² if data is in cm).

**Standard Deviation (s for sample, σ for population):**
*   The positive square root of the variance. It measures the typical or average deviation of data values from the mean, in the original units of the data.
*   **s = √s²** (for sample) or **σ = √σ²** (for population).
*   **Properties:**
    *   A small standard deviation indicates data points tend to be close to the mean.
    *   A large standard deviation indicates data points are spread out over a wider range of values.
    *   Affected by all data values and is sensitive to outliers (though less so than range because squaring deviations gives more weight to larger deviations).
    *   Most widely used measure of dispersion for quantitative data, especially with symmetric distributions.
*   For data that is approximately bell-shaped (**normal distribution**):
    *   About **68%** of data lies within 1 standard deviation of the mean (x̄ ± s).
    *   About **95%** of data lies within 2 standard deviations of the mean (x̄ ± 2s).
    *   About **99.7%** of data lies within 3 standard deviations of the mean (x̄ ± 3s). (**Empirical Rule**).

(Suggested insertion: Worked examples calculating range, quartiles, IQR, variance, and standard deviation for a small ungrouped dataset, and for a grouped frequency distribution. Interpretation of what standard deviation means in context.)`,
          "mcqs": [
            {
              "question": "Which of the following is an example of qualitative data?",
              "options": [
                "Number of books on a shelf",
                "Temperature in degrees Celsius",
                "Eye color (blue, brown, green)",
                "Time to run a race"
              ],
              "correctAnswer": "Eye color (blue, brown, green)",
              "explanation": "Qualitative (or categorical) data describes qualities or characteristics. Eye color fits this description. The other options are all numerical (quantitative) data."
            },
            {
              "question": "What is the median of the ordered dataset {3, 5, 8, 12, 15}?",
              "options": [
                "8",
                "9",
                "8.6",
                "12"
              ],
              "correctAnswer": "8",
              "explanation": "The median is the middle value in an ordered dataset. Since there are 5 values (an odd number), the median is the single middle value, which is 8."
            },
            {
              "question": "The Interquartile Range (IQR) is a measure of:",
              "options": [
                "The center of the data",
                "The spread of the middle 50% of the data",
                "The most frequent value",
                "The total spread of the data"
              ],
              "correctAnswer": "The spread of the middle 50% of the data",
              "explanation": "The IQR is calculated as Q₃ - Q₁, which represents the range of the data between the 25th and 75th percentiles. It is a robust measure of dispersion, unaffected by outliers."
            },
            {
              "question": "In a pie chart, if a category has a relative frequency of 25%, what angle should its sector have?",
              "options": [
                "25°",
                "45°",
                "90°",
                "180°"
              ],
              "correctAnswer": "90°",
              "explanation": "A full circle is 360°. The angle for the sector is the relative frequency multiplied by 360°. So, 0.25 * 360° = 90°."
            },
            {
              "question": "Which measure of central tendency is most affected by extreme outliers?",
              "options": [
                "Mean",
                "Median",
                "Mode",
                "Range"
              ],
              "correctAnswer": "Mean",
              "explanation": "The mean uses every value in its calculation, so a very large or very small outlier can significantly pull the mean towards it. The median and mode are resistant to outliers. The range is a measure of spread, not central tendency."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 14: Probability Concepts",
      "image": "https://images.pexels.com/photos/7061817/pexels-photo-7061817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=lZSL7Tm5ViA",
        "https://www.youtube.com/watch?v=94AmzeR9n2w",
        "https://www.youtube.com/watch?v=YTWM4aOqVwM"
      ],
      "sections": [
        {
          "title": "14.1 Basic Probability Definitions, Sample Space, Events",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=eOqJALbk51Q",
          "content": `Probability is the branch of mathematics concerned with the likelihood or chance of events occurring. It provides a quantitative measure of uncertainty and is fundamental to decision-making in many fields, including science, engineering, finance, insurance, and games of chance. This chapter introduces basic probability definitions, methods for calculating probabilities, and rules for combining probabilities of different events, as well as foundational concepts in counting techniques (permutations and combinations) that are often essential for determining the number of possible outcomes.

**Experiment (Random Experiment):** A process or trial whose outcome cannot be predicted with certainty, but which can be repeated under similar conditions (e.g., tossing a coin, rolling a die, drawing a card from a deck).

**Outcome:** A single possible result of an experiment.

**Sample Space (S):** The set of all possible distinct outcomes of an experiment.
*   Examples:
    *   Tossing a coin: S = {Head (H), Tail (T)}. n(S) = 2.
    *   Rolling a standard six-sided die: S = {1, 2, 3, 4, 5, 6}. n(S) = 6.
    *   Drawing a card from a standard 52-card deck: S contains all 52 cards. n(S) = 52.

**Event (E):** Any subset of the sample space; a collection of one or more outcomes.
*   **Simple Event:** An event consisting of a single outcome.
*   **Compound Event:** An event consisting of two or more outcomes.
*   Examples (for rolling a die):
    *   Event A: Getting an even number. A = {2, 4, 6}.
    *   Event B: Getting a number greater than 4. B = {5, 6}.
    *   Event C: Getting a 3. C = {3} (simple event).

**Theoretical Probability (Classical Probability):**
If all outcomes in a sample space S are **equally likely**, the probability of an event E occurring is defined as:
**P(E) = Number of favorable outcomes for E / Total number of possible outcomes in S**
**P(E) = n(E) / n(S)**

**Properties of Probability:**
*   The probability of any event E is between 0 and 1, inclusive: **0 ≤ P(E) ≤ 1**.
*   If an event is impossible, its probability is 0 (P(Impossible Event) = 0). (e.g., P(getting a 7 on a standard die) = 0/6 = 0).
*   If an event is certain to occur, its probability is 1 (P(Certain Event) = 1). (e.g., P(getting a number less than 7 on a standard die) = 6/6 = 1).
*   The sum of the probabilities of all possible distinct outcomes in the sample space is 1.

**Complement of an Event (E'):** The event that E does not occur. E' consists of all outcomes in S that are not in E.
**P(E') = 1 - P(E)**. (It's often easier to calculate P(E') and subtract from 1).

**Empirical Probability (Experimental or Relative Frequency Probability):**
Based on observations or experiments. If an experiment is repeated N times, and event E occurs f times (frequency of E), then the empirical probability of E is:
**P(E) ≈ Frequency of E / Total number of trials = f / N**
As N becomes very large, empirical probability tends to approach the theoretical probability (Law of Large Numbers).

**Subjective Probability:**
Based on personal belief, judgment, or experience when theoretical or empirical data is not available. Less formal.

(Suggested insertion: Examples of listing sample spaces for simple experiments (coin toss, die roll, drawing from a bag of colored balls). Examples calculating theoretical probabilities of various events. Use of tree diagrams or tables to help enumerate outcomes for compound experiments like tossing two coins or rolling two dice.)`,
          "mcq": {
            "question": "What is the probability of rolling a number greater than 4 on a standard six-sided die?",
            "options": [
              "1/6",
              "1/3",
              "1/2",
              "2/3"
            ],
            "correctAnswer": "1/3",
            "explanation": "The sample space is {1, 2, 3, 4, 5, 6}. The favorable outcomes (greater than 4) are {5, 6}. There are 2 favorable outcomes out of 6 total possible outcomes. P(E) = 2/6 = 1/3."
          }
        },
        {
          "title": "14.2 Addition and Multiplication Rules",
          "image": "https://images.pexels.com/photos/5412101/pexels-photo-5412101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=LFLu16WCM5I",
          "content": `Rules for calculating probabilities of combined events.
**Mutually Exclusive Events:** Two events A and B are mutually exclusive (or disjoint) if they **cannot occur at the same time** (i.e., they have no outcomes in common; A ∩ B = ∅).
*   If A and B are mutually exclusive, then P(A and B) = P(A ∩ B) = 0.

**Addition Rule (for "OR" events):**
*   **For Any Two Events A and B:**
    **P(A or B) = P(A ∪ B) = P(A) + P(B) - P(A ∩ B)**
    (The - P(A ∩ B) term corrects for double-counting outcomes that are in both A and B).
*   **For Two Mutually Exclusive Events A and B:**
    Since P(A ∩ B) = 0, the rule simplifies to:
    **P(A or B) = P(A ∪ B) = P(A) + P(B)**
*   Example: Rolling a die. Event A = getting an even number {2,4,6}. Event B = getting a 3 {3}. A and B are mutually exclusive.
    P(A or B) = P(A) + P(B) = 3/6 + 1/6 = 4/6 = 2/3.
*   Example: Drawing a card. Event C = getting a King. Event D = getting a Heart.
    P(C) = 4/52. P(D) = 13/52. P(C and D) (King of Hearts) = 1/52. C and D are not mutually exclusive.
    P(C or D) = P(C) + P(D) - P(C and D) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13.

**Independent Events:** Two events A and B are independent if the occurrence of one event **does not affect** the probability of the occurrence of the other event.
*   P(B|A) = P(B) and P(A|B) = P(A) (Conditional probability, see below).

**Conditional Probability:** The probability of event B occurring, given that event A has already occurred. Denoted **P(B|A)**.
**P(B|A) = P(A ∩ B) / P(A)** (provided P(A) ≠ 0).

**Multiplication Rule (for "AND" events):**
*   **For Any Two Events A and B (General Rule):**
    **P(A and B) = P(A ∩ B) = P(A) × P(B|A)**
    or P(A ∩ B) = P(B) × P(A|B)
*   **For Two Independent Events A and B:**
    Since P(B|A) = P(B), the rule simplifies to:
    **P(A and B) = P(A ∩ B) = P(A) × P(B)**
*   This rule can be extended to more than two independent events.

**Dependent Events:** If events are not independent, the outcome of the first affects the probability of the second. Often occurs in "without replacement" scenarios.
*   Example (Independent): Tossing a coin twice. P(Head on 1st AND Head on 2nd) = P(H₁) × P(H₂) = (1/2) × (1/2) = 1/4.
*   Example (Dependent - without replacement): Drawing 2 cards from a deck. P(1st is King AND 2nd is King)
    = P(1st K) × P(2nd K | 1st K) = (4/52) × (3/51) = 12 / 2652 = 1/221.

**Tree Diagrams:** Can be very useful for visualizing and calculating probabilities for sequences of events, especially when conditional probabilities are involved.

(Suggested insertion: Clear definitions and examples for mutually exclusive events and independent events. Worked examples illustrating the Addition Rule (for mutually exclusive and non-mutually exclusive) and the Multiplication Rule (for independent and dependent events). An example using a tree diagram to solve a probability problem.)`,
          "mcq": {
            "question": "If events A and B are independent, and P(A) = 0.5 and P(B) = 0.4, what is P(A and B)?",
            "options": [
              "0.9",
              "0.1",
              "0.2",
              "0.25"
            ],
            "correctAnswer": "0.2",
            "explanation": "For independent events, the probability of both occurring is the product of their individual probabilities. P(A and B) = P(A) * P(B) = 0.5 * 0.4 = 0.20."
          }
        },
        {
          "title": "14.3 Permutations and Combinations (Counting Techniques)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=Ho7On1S4puU",
          "content": `These are methods for counting the number of ways outcomes can occur, which is often needed to calculate theoretical probabilities (n(E) and n(S)).

**Fundamental Counting Principle (Multiplication Principle of Counting):**
If an event can occur in **m** ways, and after it has occurred, a second event can occur in **n** ways, then the two events can occur in sequence in **m × n** ways. This extends to more than two events.

**Permutation (P):** An arrangement of a set of objects in a **specific order**. **Order matters.**
*   **Permutation of n distinct objects taken r at a time (nPr or P(n,r) or Pⁿᵣ):** The number of ways to arrange r objects selected from a set of n distinct objects, where 0 ≤ r ≤ n.
    **nPr = n! / (n - r)!**
    where n! (n factorial) = n × (n-1) × (n-2) × ... × 2 × 1. (Note: 0! = 1).
*   **Permutation of n distinct objects taken all n at a time (nPn):**
    nPn = n! / (n - n)! = n! / 0! = **n!**.
*   Example: How many ways can 3 letters from A,B,C,D be arranged? (Order matters, e.g., ABC is different from ACB). n=4, r=3.
    4P3 = 4! / (4-3)! = 4! / 1! = (4 × 3 × 2 × 1) / 1 = 24.
*   **Permutations with Repetitions:** If among n objects, there are n₁ identical objects of type 1, n₂ of type 2, ..., n_k of type k, then the number of distinct permutations is n! / (n₁! n₂! ... n_k!). (e.g., permutations of letters in "MISSISSIPPI").

**Combination (C):** A selection of a set of objects where the **order of selection does not matter**.
*   **Combination of n distinct objects taken r at a time (nCr or C(n,r) or (ⁿᵣ) or n CHOOSE r):** The number of ways to choose r objects from a set of n distinct objects, where 0 ≤ r ≤ n.
    **nCr = n! / [r! (n - r)!]**
    Also, nCr = nPr / r!.
*   Example: How many ways can a committee of 3 people be chosen from a group of 5 people? (Order doesn't matter). n=5, r=3.
    5C3 = 5! / [3! (5-3)!] = 5! / (3! 2!) = (5 × 4 × 3 × 2 × 1) / ((3 × 2 × 1)(2 × 1)) = 120 / 12 = 10.
*   Properties: nC0 = 1, nCn = 1, nCr = nC(n-r).

Use **permutations** when **order is important** (arrangements, sequences, lists).
Use **combinations** when **order is not important** (groups, selections, committees).

(Suggested insertion: Clear distinction between permutations and combinations with guiding examples. Worked examples calculating nPr and nCr. Applications to probability problems where the number of outcomes needs to be determined using P or C.)`,
          "mcq": {
            "question": "In how many ways can a committee of 3 be chosen from a group of 7 people?",
            "options": [
              "210",
              "35",
              "21",
              "5040"
            ],
            "correctAnswer": "35",
            "explanation": "Since the order of selection for a committee does not matter, this is a combination problem. We calculate 7C3 = 7! / (3! * (7-3)!) = 7! / (3! * 4!) = (7*6*5)/(3*2*1) = 35."
          }
        },
        {
          "title": "14.4 Binomial and Normal Distributions (Introductory)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=5WBtGRtXKqc",
          "content": `(This section is often introductory for "General Mathematics," focusing on concepts rather than deep calculations, unless statistics is a major component.)
These are important probability distributions for random variables.

**Random Variable:** A variable whose value is a numerical outcome of a random phenomenon.
*   **Discrete Random Variable:** Can take on a finite or countably infinite number of values.
*   **Continuous Random Variable:** Can take on any value within a given range or interval.

**Binomial Distribution (for Discrete Random Variables):**
Describes the probability of obtaining a specific number of "successes" in a fixed number of independent Bernoulli trials (trials with only two possible outcomes, e.g., success/failure, heads/tails, yes/no).
*   **Conditions for a Binomial Experiment:**
    1.  A **fixed number of trials (n)**.
    2.  Each trial is **independent** of the others.
    3.  Each trial has only **two possible outcomes**: success (S) or failure (F).
    4.  The probability of **success (p)** is **constant** for each trial. Probability of failure is q = 1 - p.
*   **Binomial Probability Formula:** The probability of getting exactly k successes in n trials is:
    **P(X = k) = nCk × pᵏ × q^(n-k)**
    where nCk is the number of combinations of n items taken k at a time.
*   Example: Probability of getting exactly 2 Heads in 5 tosses of a fair coin.
    n=5, k=2, p=0.5 (prob of Head), q=0.5 (prob of Tail).
    P(X=2) = 5C2 × (0.5)² × (0.5)³ = 10 × 0.25 × 0.125 = 0.3125.
*   **Mean (Expected Value)** of a Binomial Distribution: μ = np.
*   **Variance:** σ² = npq. **Standard Deviation:** σ = √(npq).

**Normal Distribution (Gaussian Distribution) (for Continuous Random Variables):**
One of the most important probability distributions in statistics. Many natural phenomena are approximately normally distributed.
*   **Characteristics:**
    *   **Bell-shaped, symmetric** curve.
    *   **Mean, median, and mode are all equal** and located at the center of the distribution.
    *   Described by two parameters: **mean (μ)** and **standard deviation (σ)**.
    *   μ determines the center of the distribution.
    *   σ determines the spread or width of the distribution (smaller σ = narrower, taller curve).
    *   The curve extends infinitely in both directions but approaches the horizontal axis asymptotically.
    *   The total area under the normal curve is 1 (or 100%).
*   **Standard Normal Distribution:** A normal distribution with mean μ = 0 and standard deviation σ = 1. Any normal variable X can be standardized to a **Z-score**:
    **Z = (X - μ) / σ**.
    Z-scores tell how many standard deviations an X value is from the mean.
*   **Probabilities:** Probabilities for a normal distribution correspond to areas under the curve. These are typically found using Z-tables or statistical software.
*   **Empirical Rule (68-95-99.7 Rule):** Approximately 68% of values lie within μ ± σ, 95% within μ ± 2σ, and 99.7% within μ ± 3σ.
*   The binomial distribution can be approximated by the normal distribution when n is large and p is not too close to 0 or 1 (often np > 5 and nq > 5 is used as a guideline).

(Suggested insertion: Graphs of binomial distribution (bar chart) for a small n. Graph of a normal distribution curve (bell shape) showing mean, standard deviation, and the 68-95-99.7 empirical rule percentages. Brief explanation of Z-scores and how they relate to areas under standard normal curve, perhaps with a small example.)`,
          "mcqs": [
            {
              "question": "If the probability of an event happening is 0.3, what is the probability of the event not happening?",
              "options": [
                "0.3",
                "-0.3",
                "0.7",
                "1.3"
              ],
              "correctAnswer": "0.7",
              "explanation": "The probability of the complement of an event is 1 minus the probability of the event. P(E') = 1 - P(E) = 1 - 0.3 = 0.7."
            },
            {
              "question": "Two events that cannot happen at the same time are called:",
              "options": [
                "Independent",
                "Dependent",
                "Mutually Exclusive",
                "Complementary"
              ],
              "correctAnswer": "Mutually Exclusive",
              "explanation": "Mutually exclusive (or disjoint) events have no outcomes in common, so they cannot occur simultaneously. For such events, P(A and B) = 0."
            },
            {
              "question": "Which of the following scenarios should be solved using a permutation?",
              "options": [
                "Choosing 3 toppings for a pizza from a list of 10",
                "Selecting a team of 5 players from 12 candidates",
                "Arranging 4 books on a shelf",
                "Dealing a 5-card hand from a deck"
              ],
              "correctAnswer": "Arranging 4 books on a shelf",
              "explanation": "Permutations are used when order matters. The arrangement of books on a shelf has a specific order. The other scenarios are combinations, as the order of selection does not matter."
            },
            {
              "question": "Which of the following is a characteristic of a Normal Distribution?",
              "options": [
                "It is skewed to the right",
                "It is a discrete distribution",
                "It has a bell-shaped, symmetric curve",
                "The total area under the curve is less than 1"
              ],
              "correctAnswer": "It has a bell-shaped, symmetric curve",
              "explanation": "The normal distribution is a continuous distribution famously characterized by its symmetric, bell-shaped curve where the mean, median, and mode are all equal."
            },
            {
              "question": "A bag contains 3 red balls and 2 blue balls. One ball is drawn at random. What is the sample space S?",
              "options": [
                "S = {3, 2}",
                "S = {Red, Blue}",
                "S = {R1, R2, R3, B1, B2}",
                "S = {5}"
              ],
              "correctAnswer": "S = {R1, R2, R3, B1, B2}",
              "explanation": "The sample space is the set of all possible distinct outcomes. To distinguish the balls, we can label them, so the sample space consists of the 5 individual balls that could be drawn."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 15: Inferential Statistics Basics",
      "image": "https://images.pexels.com/photos/9685862/pexels-photo-9685862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=tFRXsngz4UQ",
        "https://www.youtube.com/watch?v=J_VOiNwARUA",
        "https://www.youtube.com/watch?v=Ge9je05uYJ0"
      ],
      "sections": [
        {
          "title": "15.1 Sampling Techniques and Bias",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=E5sTM_Dfk",
          "content": `While descriptive statistics (Chapter 13) focuses on summarizing and describing data, inferential statistics goes a step further by using data from a sample to make inferences, estimates, predictions, or decisions about a larger population from which the sample was drawn. This chapter provides a conceptual introduction to key ideas in inferential statistics, including sampling techniques, the concepts of confidence intervals and margin of error, the basics of hypothesis testing, and the important distinction between correlation and causation, along with an introduction to linear regression.

(Note: This chapter would typically be very conceptual for "General Mathematics," focusing on understanding principles rather than complex calculations.)

**Population vs. Sample:**
*   **Population:** The entire group of individuals, objects, or data points that we are interested in studying. It can be finite or infinite.
*   **Sample:** A subset or subgroup selected from the population. Data is usually collected from a sample because studying the entire population is often impractical, too costly, or impossible.
*   The goal is to select a **representative sample** so that conclusions drawn from the sample can be reliably generalized to the population.

**Sampling Techniques (Methods for selecting a sample):**
Goal: To obtain a sample that is representative of the population and to minimize bias.

**Random Sampling Methods (Probability Sampling - each member of population has a known, non-zero chance of being selected):**
*   **Simple Random Sampling (SRS):** Every member of the population has an equal chance of being selected. Can be done using random number generators, drawing names from a hat. (Foundation of many statistical methods).
*   **Systematic Sampling:** Select a starting point randomly, then select every k-th member of the population (e.g., every 10th person on a list). Simpler than SRS but can be biased if there's a pattern in the population list.
*   **Stratified Sampling:** Divide the population into distinct subgroups (strata) based on relevant characteristics (e.g., age, gender, location). Then take a simple random sample from each stratum, often in proportion to the stratum's size in the population. Ensures representation from all important subgroups.
*   **Cluster Sampling:** Divide the population into clusters (often geographically). Randomly select some clusters. Then, either sample all members within the selected clusters (one-stage) or take a random sample from within the selected clusters (two-stage). More convenient and cost-effective for large, spread-out populations, but can have larger sampling error if clusters are not representative.

**Non-Random Sampling Methods (Non-Probability Sampling - selection is not based on chance; prone to bias, results not easily generalizable):**
*   **Convenience Sampling:** Selecting individuals who are easiest to reach or readily available. (Often biased).
*   **Voluntary Response Sampling:** Individuals choose themselves to participate (e.g., online polls, call-in surveys). (Often biased by strong opinions).
*   **Quota Sampling:** A non-random version of stratified sampling. Interviewers are given quotas to fill from different subgroups, but select individuals non-randomly within quotas.
*   **Purposive (Judgmental) Sampling:** Researcher uses their judgment to select individuals they believe are representative or have specific expertise.

**Bias in Sampling:**
Sampling bias occurs when the sampling method systematically favors some outcomes or parts of the population over others, leading to a sample that is not representative.
*   **Sources of Bias:**
    *   Using non-random methods (convenience, voluntary).
    *   **Undercoverage:** Some groups in the population are inadequately represented or left out of the sampling frame.
    *   **Non-response bias:** Selected individuals cannot be contacted or refuse to participate, and those who respond may differ significantly from those who don't.
    *   **Response bias:** Wording of questions, interviewer behavior, or respondent's desire to be socially acceptable can influence answers.
*   Bias leads to inaccurate estimates of population characteristics. Random sampling is designed to minimize bias.

(Suggested insertion: Flowchart or table comparing different random sampling techniques (SRS, systematic, stratified, cluster) with brief pros/cons. Examples of situations where different biases might occur.)`,
          "mcq": {
            "question": "A researcher divides the population into age groups and then takes a simple random sample from each group. This is an example of which sampling technique?",
            "options": [
              "Simple Random Sampling",
              "Systematic Sampling",
              "Stratified Sampling",
              "Cluster Sampling"
            ],
            "correctAnswer": "Stratified Sampling",
            "explanation": "Stratified sampling involves dividing the population into subgroups (strata) based on a shared characteristic and then sampling randomly from within each subgroup to ensure representation."
          }
        },
        {
          "title": "15.2 Confidence Intervals and Margin of Error (Conceptual)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=I3STjaMUvzA",
          "content": `When we use a sample statistic (e.g., sample mean x̄, sample proportion p̂) to estimate an unknown population parameter (e.g., population mean μ, population proportion p), the estimate is unlikely to be exactly equal to the true population parameter due to sampling variability.

**Confidence Interval (CI):** An interval of plausible values for an unknown population parameter, calculated from sample data. It is constructed such that we have a certain level of confidence (e.g., 95%) that the true population parameter lies within this interval.
*   **Form:** Sample Statistic ± Margin of Error

**Confidence Level:** The probability (expressed as a percentage, e.g., 90%, 95%, 99%) that the confidence interval procedure will produce an interval that contains the true population parameter, if the process of sampling and constructing intervals is repeated many times. A 95% confidence level means that if we took many samples and constructed a CI from each, about 95% of those intervals would contain the true parameter.

**Margin of Error (ME):** Indicates how much the sample statistic is likely to differ from the true population parameter due to random sampling variation. It reflects the precision of the estimate.
*   **ME = Critical Value × Standard Error of the Statistic**
    *   **Critical Value:** Depends on the confidence level and the distribution used (e.g., Z-value for large samples or known population SD, t-value for small samples with unknown population SD).
    *   **Standard Error:** An estimate of the standard deviation of the sampling distribution of the statistic. For a sample mean x̄, standard error is s/√n (where s is sample SD, n is sample size).

**Interpretation of a Confidence Interval:**
*   "We are [confidence level]% confident that the true population [parameter] lies between [lower limit] and [upper limit]."
*   It does NOT mean there is a [confidence level]% probability that the specific calculated interval contains the true parameter (the true parameter is fixed; the interval is what varies from sample to sample).

**Factors Affecting Margin of Error (and CI width):**
*   **Confidence Level:** Higher confidence level → wider interval (larger ME).
*   **Sample Size (n):** Larger sample size → smaller standard error → narrower interval (smaller ME).
*   **Variability in Population (σ or s):** Greater variability → wider interval (larger ME).

(Suggested insertion: A conceptual diagram showing how different sample means can lead to different confidence intervals, with some capturing the true population mean and others not. Illustration of a confidence interval on a number line: point estimate ± margin of error.)`,
          "mcq": {
            "question": "If you increase the sample size (n) while keeping the confidence level constant, what happens to the width of the confidence interval?",
            "options": [
              "It becomes wider",
              "It becomes narrower",
              "It stays the same",
              "It depends on the population mean"
            ],
            "correctAnswer": "It becomes narrower",
            "explanation": "A larger sample size leads to a smaller standard error (s/√n), which in turn reduces the margin of error. A smaller margin of error results in a narrower, more precise confidence interval."
          }
        },
        {
          "title": "15.3 Hypothesis Testing (Conceptual Overview)",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=Biilw9X4g9Y",
          "content": `**Hypothesis Testing:** A statistical procedure used to make a decision or draw a conclusion about a population parameter based on evidence from a sample. It involves formulating two competing hypotheses and then using sample data to determine which hypothesis is better supported.

**Null Hypothesis (H₀):** A statement of **no effect**, **no difference**, or a specific value for the population parameter. It is the hypothesis that is initially assumed to be true. (e.g., H₀: μ = 50 cm, or H₀: p₁ = p₂).

**Alternative Hypothesis (H₁ or Hₐ):** A statement that contradicts the null hypothesis; it is what the researcher is often trying to find evidence for. (e.g., H₁: μ ≠ 50 cm [two-tailed], or H₁: μ > 50 cm [one-tailed], or H₁: p₁ < p₂ [one-tailed]).

**Process (Simplified Conceptual Steps):**
1.  Formulate H₀ and H₁.
2.  Collect sample data.
3.  Calculate a **test statistic:** A value computed from the sample data that measures how far the sample statistic deviates from what is expected under the null hypothesis.
4.  Determine the **p-value:** The probability of observing a test statistic as extreme as (or more extreme than) the one calculated from the sample, **assuming the null hypothesis is true**.
    *   **Small p-value:** Indicates the observed sample result is **unlikely** if H₀ is true. Provides evidence **against** H₀.
    *   **Large p-value:** Indicates the observed sample result is **not unusual** if H₀ is true. Does **not** provide strong evidence against H₀.
5.  **Make a Decision:**
    *   Compare p-value to a pre-determined **significance level (α)** (alpha, e.g., 0.05 or 5%). α is the probability of rejecting H₀ when it is actually true (Type I error).
    *   If **p-value ≤ α:** **Reject H₀** in favor of H₁. (Statistically significant result).
    *   If **p-value > α:** **Fail to reject H₀**. (Result is not statistically significant; does not mean H₀ is proven true, just that there isn't enough evidence to reject it).

**Types of Errors in Hypothesis Testing:**
*   **Type I Error:** Rejecting H₀ when H₀ is true. (Probability = α).
*   **Type II Error:** Failing to reject H₀ when H₀ is false. (Probability = β).
*   **Power** of a test = 1 - β (Probability of correctly rejecting a false H₀).

Hypothesis testing is a formal process for making decisions under uncertainty. It does not "prove" hypotheses but assesses the strength of evidence from data.

(Suggested insertion: A flowchart summarizing the steps in hypothesis testing conceptually. Simple examples of H₀ and H₁ for common scenarios like comparing a sample mean to a known value or comparing two proportions.)`,
          "mcq": {
            "question": "In hypothesis testing, the statement of 'no effect' or 'no difference' that is initially assumed to be true is called the:",
            "options": [
              "Alternative Hypothesis (H₁)",
              "Null Hypothesis (H₀)",
              "Test Statistic",
              "p-value"
            ],
            "correctAnswer": "Null Hypothesis (H₀)",
            "explanation": "The null hypothesis (H₀) represents the status quo or the baseline assumption of no effect. The goal of the test is to see if there is enough evidence to reject this assumption."
          }
        },
        {
          "title": "15.4 Correlation vs. Causation; Linear Regression Basics (Conceptual)",
          "image": "https://images.pexels.com/photos/8482022/pexels-photo-8482022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=6TqoNJkB_YU",
          "content": `**Correlation:**
A statistical measure that describes the **strength** and **direction** of a **linear relationship** between two quantitative variables.
*   Often visualized using a **scatter plot**.
*   **Correlation Coefficient (r):** A numerical value typically between -1 and +1.
    *   r > 0: **Positive** linear correlation (as one variable increases, the other tends to increase).
    *   r < 0: **Negative** linear correlation (as one variable increases, the other tends to decrease).
    *   r ≈ 0: **No** linear correlation (or very weak).
    *   r = +1: **Perfect positive** linear correlation.
    *   r = -1: **Perfect negative** linear correlation.
    *   The closer |r| is to 1, the stronger the linear relationship.

**Important: Correlation does NOT imply causation!**
*   Just because two variables are correlated does not mean that changes in one variable **cause** changes in the other.
*   There might be:
    *   A causal relationship (X → Y or Y → X).
    *   A **lurking variable** (confounding variable) that affects both variables, creating an apparent association.
    *   Coincidence.
*   Establishing causation requires carefully designed **experiments** (with control groups and randomization) rather than just observational studies.

**Linear Regression (Basics):**
If a scatter plot suggests a linear relationship between two variables (x - independent/explanatory variable, and y - dependent/response variable), linear regression is a method for finding the equation of the straight line that **best fits** or describes that relationship.
*   **Least-Squares Regression Line:** The line that minimizes the sum of the squared vertical distances (residuals) between the observed y-values and the y-values predicted by the line.
*   Equation of the regression line: **ŷ = b₀ + b₁x** (or ŷ = a + bx or ŷ = mx + c)
    *   **ŷ (y-hat)** is the **predicted value** of y for a given x.
    *   **b₁ (or m)** is the **slope** of the line: The average change in ŷ for a one-unit increase in x.
    *   **b₀ (or c or a)** is the **y-intercept**: The predicted value of ŷ when x = 0 (may not always be meaningful in context).
*   The slope b₁ and correlation r are related: b₁ = r (s_y / s_x) (where s_y, s_x are sample standard deviations).

*   **Coefficient of Determination (r² or R²):** The proportion of the total variation in the y variable that is **explained** or accounted for by its linear relationship with the x variable, using the regression line. 0 ≤ r² ≤ 1.
    *   r² = (correlation coefficient r)².
    *   An r² of 0.64 means 64% of the variation in y can be explained by the linear relationship with x.

*   **Uses:**
    *   Describing the linear relationship.
    *   Making predictions for y based on values of x (interpolation within range of data is more reliable than extrapolation beyond range).

(Suggested insertion: Scatter plots showing positive, negative, and no linear correlation, along with approximate r-values. A scatter plot with a least-squares regression line drawn through it. An example illustrating how correlation does not imply causation (e.g., ice cream sales and crime rates are correlated due to a lurking variable: temperature).)`,
          "mcqs": [
            {
              "question": "If two variables have a strong positive correlation, it means that:",
              "options": [
                "An increase in one variable causes an increase in the other",
                "As one variable increases, the other tends to increase",
                "As one variable increases, the other tends to decrease",
                "There is no relationship between the variables"
              ],
              "correctAnswer": "As one variable increases, the other tends to increase",
              "explanation": "Correlation describes an association or tendency, not causation. A strong positive correlation indicates that higher values of one variable are associated with higher values of the other."
            },
            {
              "question": "A sample is a subset of a:",
              "options": [
                "Statistic",
                "Parameter",
                "Population",
                "Confidence Interval"
              ],
              "correctAnswer": "Population",
              "explanation": "In statistics, the population is the entire group of interest, while a sample is a smaller, manageable subset selected from that population to make inferences about it."
            },
            {
              "question": "A pollster surveys people as they walk out of a shopping mall. What type of sampling is this?",
              "options": [
                "Simple Random Sampling",
                "Stratified Sampling",
                "Systematic Sampling",
                "Convenience Sampling"
              ],
              "correctAnswer": "Convenience Sampling",
              "explanation": "Convenience sampling involves selecting individuals who are easiest to reach. This method is non-random and prone to bias as it may not be representative of the entire population."
            },
            {
              "question": "A 95% confidence interval for a population mean is calculated to be (22, 28). What is the correct interpretation?",
              "options": [
                "There is a 95% probability that the true population mean is between 22 and 28.",
                "95% of the sample data is between 22 and 28.",
                "We are 95% confident that the interval (22, 28) contains the true population mean.",
                "The sample mean must be 25."
              ],
              "correctAnswer": "We are 95% confident that the interval (22, 28) contains the true population mean.",
              "explanation": "This phrasing correctly interprets the confidence level. It reflects our confidence in the method used to generate the interval, not the probability of a specific interval being correct."
            },
            {
              "question": "In hypothesis testing, what does a very small p-value (e.g., p < 0.05) suggest?",
              "options": [
                "The null hypothesis is likely true.",
                "The alternative hypothesis is false.",
                "The observed result is unlikely to have occurred by chance if the null hypothesis were true.",
                "The sample size was too small."
              ],
              "correctAnswer": "The observed result is unlikely to have occurred by chance if the null hypothesis were true.",
              "explanation": "A small p-value provides strong evidence against the null hypothesis because it indicates that the sample data is surprising or rare under the assumption that the null hypothesis is true, leading us to reject it."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 16: WAEC‐Style Questions",
      "image": "https://images.pexels.com/photos/7723383/pexels-photo-7723383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=h87JMR4MvY8",
        "https://www.youtube.com/watch?v=DflY9vacl1s",
        "https://www.youtube.com/watch?v=4eU46JS2Cuw"
      ],
      "sections": [
        {
          "title": "16.1 Multiple‐Choice Practice (All Topics)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=eMrWTrGskjs",
          "content": `This chapter is specifically designed to provide comprehensive practice for students preparing for the West African Examinations Council (WAEC) General Mathematics or Mathematics (Core) examinations. The questions are formatted to reflect the style, structure, and syllabus coverage of typical WAEC papers, encompassing both the Objective Test (Paper 1) and the Theory/Essay Paper (Paper 2). The aim is to enhance familiarity with exam question types, build problem-solving speed and accuracy, and improve exam-taking strategies.

This section will contain a large bank of multiple-choice questions (MCQs) covering all major topic areas of the WAEC General Mathematics syllabus (Number & Numeration, Algebraic Processes, Mensuration, Geometry & Trigonometry, Statistics & Probability).

**Format:** Each question will have a stem and typically 4 or 5 options (A, B, C, D, E).

**Skill Focus:** Questions will test conceptual understanding, computational skills, application of formulas, and problem-solving abilities within a multiple-choice format.

**Sub-sections (Organized by Topic Area):**
*   Number Systems and Arithmetic (Ch 1-3 in this textbook: Real numbers, operations, exponents, surds, ratio, proportion, percentages, sets, logic basics).
*   Algebra (Ch 4-6: Expressions, formulae, equations - linear & quadratic, simultaneous equations, inequalities, progressions).
*   Functions and Graphs (Ch 7-8: Definitions, types, graphs, transformations).
*   Trigonometry (Ch 9-10: Ratios, identities, solving triangles, graphs, applications).
*   Coordinate Geometry (Ch 11-12: Lines, conics - focusing on what's relevant for WAEC).
*   Statistics and Probability (Ch 13-15: Data presentation, central tendency, dispersion, basic probability, counting).
*   Mensuration (topics like area and volume of plane shapes and solids - often integrated with geometry).
*   Plane Geometry (angles, lines, triangles, quadrilaterals, polygons, circles - properties, theorems).

**Answer Key and Explanations:** A full answer key should be provided. For selected or more challenging questions, brief explanations for the correct answer (and possibly why distractors are incorrect) would be beneficial.

**Exam Tips for MCQs:** Strategies for approaching MCQs (e.g., working forwards, working backwards from options, elimination, intelligent guessing, time management).`,
          "mcq": {
            "question": "The primary skill tested by multiple-choice questions in a timed exam like WAEC Paper 1 is:",
            "options": [
              "Detailed proof writing",
              "Rapid and accurate application of concepts",
              "Constructing geometric figures",
              "Long-form essay writing"
            ],
            "correctAnswer": "Rapid and accurate application of concepts",
            "explanation": "Multiple-choice sections are designed to assess a broad range of topics quickly, requiring students to apply formulas and concepts efficiently and accurately to find the correct option."
          }
        },
        {
          "title": "16.2 Structured and Essay Questions with Marking Schemes",
          "image": "https://images.pexels.com/photos/9052534/pexels-photo-9052534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=h87JMR4MvY8",
          "content": `This section will focus on practice for WAEC Paper 2 (Theory/Essay), which requires detailed working and written explanations.

**Content:** A selection of structured, multi-part questions, and potentially some essay-style application problems, covering the WAEC syllabus. These questions demand a deeper understanding and the ability to show methodical problem-solving.

**Format:** Questions similar to those found in Section B of WAEC Paper 2, often with parts (a), (b), (c), etc., sometimes building on each other.

**Topics to Emphasize for Theory Questions:**
*   Algebra: Solving equations, systems, inequalities; manipulating expressions; word problems.
*   Geometry & Mensuration: Proofs (e.g., circle theorems), calculations of angles, lengths, areas, volumes. Construction (if still examined).
*   Trigonometry: Solving triangles, heights and distances, bearings.
*   Statistics: Calculating mean, median, mode from frequency tables; standard deviation; constructing histograms, frequency polygons, ogives; interpreting data.
*   Probability: Calculating probabilities from first principles, using addition/multiplication rules, tree diagrams.
*   Progressions: Finding terms and sums of APs and GPs, applications.
*   Coordinate Geometry: Equations of lines, distance, midpoint.

**Model Solutions and Marking Schemes:**
*   For each question, a detailed step-by-step model solution should be provided, showing all working clearly.
*   A simplified WAEC-style marking scheme would accompany each solution, indicating how marks are typically awarded for method (M marks), accuracy (A marks), and sometimes independent B marks. This helps students understand what examiners look for.

**Common Errors:** Highlight common mistakes students make in theory questions and provide advice on how to avoid them.

**Presentation:** Emphasize the importance of clear, logical presentation of solutions, correct use of mathematical notation, and stating answers to appropriate accuracy.`,
          "mcq": {
            "question": "Why is it important to show all working in WAEC Paper 2 (Theory)?",
            "options": [
              "To make the paper longer",
              "It is not important, only the final answer matters",
              "To earn method marks even if the final answer is incorrect",
              "To get extra marks for neatness"
            ],
            "correctAnswer": "To earn method marks even if the final answer is incorrect",
            "explanation": "WAEC marking schemes award marks for demonstrating the correct method (M marks) and for accuracy (A marks). Showing your working allows the examiner to award method marks even if a calculation error leads to a wrong final answer."
          }
        },
        {
          "title": "16.3 Past Paper Analysis and Exam Strategies",
          "image": "https://images.pexels.com/photos/6209870/pexels-photo-6209870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=xs7HU5yfK58",
          "content": `This section provides an overview of the WAEC General Mathematics exam structure and offers general strategies.

**Analysis of Exam Structure:**
*   Breakdown of Paper 1 (Objective) and Paper 2 (Theory/Essay) - number of questions, time allowed, marks allocated for each section.
*   Typical weighting of different syllabus topics in the exam (based on analysis of past papers, if available).

**Time Management Strategies:**
*   Allocating time per question or per mark in both papers.
*   Importance of not getting stuck on one question for too long.

**Strategies for Paper 1 (Objective):**
*   Answering easier questions first.
*   Techniques for eliminating incorrect options.
*   Checking answers if time permits.

**Strategies for Paper 2 (Theory):**
*   Reading all questions carefully before choosing which ones to answer (if there's a choice).
*   Showing all steps of working clearly and logically.
*   Importance of diagrams where appropriate.
*   Checking for reasonableness of answers.
*   Attempting all required questions.

**Understanding Instructions:** Importance of carefully reading and following all exam instructions (e.g., use of calculators, degree of accuracy for answers).

**Common Pitfalls in WAEC Exams:** (e.g., misreading questions, calculation errors, not showing working, poor time management, misunderstanding specific mathematical terms used in WAEC questions).

This section might include an analysis of a sample WAEC past paper (or key question types from it) to illustrate these points.`,
          "mcqs": [
            {
              "question": "A key time management strategy for a multiple-choice paper is to:",
              "options": [
                "Spend equal time on every question, regardless of difficulty",
                "Answer the hardest questions first to get them out of the way",
                "Answer easier questions first to build momentum and secure marks",
                "Guess all answers randomly at the start"
              ],
              "correctAnswer": "Answer easier questions first to build momentum and secure marks",
              "explanation": "An effective strategy is to go through the paper and answer all the questions you are confident about first. This ensures you don't miss out on easy marks and builds confidence before tackling more difficult problems."
            },
            {
              "question": "What is the main purpose of analyzing past papers?",
              "options": [
                "To hope the exact same questions will be repeated",
                "To understand the exam format, question style, and topic weighting",
                "To find shortcuts for every topic",
                "To prove you are smarter than previous students"
              ],
              "correctAnswer": "To understand the exam format, question style, and topic weighting",
              "explanation": "Analyzing past papers helps students become familiar with the structure of the exam, the types of questions asked, and which topics are frequently tested, which is crucial for effective preparation."
            },
            {
              "question": "In a theory paper like WAEC Paper 2, what should you do if a question has multiple parts, like (a), (b), and (c)?",
              "options": [
                "Only answer the part you are most confident in",
                "Attempt all parts, as later parts may not depend on the earlier ones",
                "Start with part (c) and work backwards",
                "Skip the entire question if you can't do part (a)"
              ],
              "correctAnswer": "Attempt all parts, as later parts may not depend on the earlier ones",
              "explanation": "You should attempt every part of a required question. Often, the parts test different skills or concepts and are independent. Even if you make a mistake in an early part, you can still earn marks on later parts."
            },
            {
              "question": "What does a WAEC-style marking scheme typically award 'M' marks for?",
              "options": [
                "Method",
                "Mistake",
                "Multiple",
                "Median"
              ],
              "correctAnswer": "Method",
              "explanation": "'M' marks are awarded for using a correct method or approach to solving a problem, regardless of the final answer's accuracy."
            },
            {
              "question": "Which of the following is a common pitfall to avoid in the WAEC General Mathematics exam?",
              "options": [
                "Showing too much working",
                "Rounding answers too early in a calculation",
                "Using a calculator for simple arithmetic",
                "Reading the instructions carefully"
              ],
              "correctAnswer": "Rounding answers too early in a calculation",
              "explanation": "Rounding intermediate results can lead to a final answer that is inaccurate. It is best to carry extra digits through calculations and only round the final answer to the required degree of accuracy."
            }
          ]
        }
      ]
    },
    {
      "name": "Chapter 17: Cambridge IGCSE/WAEC Combined Practice",
      "image": "https://images.pexels.com/photos/6932280/pexels-photo-6932280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "video": [
        "https://www.youtube.com/watch?v=h87JMR4MvY8",
        "https://www.youtube.com/watch?v=e68-XmjEGvk",
        "https://www.youtube.com/watch?v=RSAD7QNT1hs"
      ],
      "sections": [
        {
          "title": "17.1 Key Differences in Syllabus Coverage and Emphasis",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=2w93x77mPsE",
          "content": `Many students may be preparing for both the WAEC examinations and Cambridge International Examinations, such as the IGCSE Mathematics (0580) or Core/Extended syllabi. While there is significant overlap in mathematical content, there can be differences in emphasis, question style, and assessment objectives. This chapter aims to provide practice that bridges these examinations, highlights key differences in syllabus expectations and question formats, and offers strategies for students tackling either or both.

(Note: Cambridge IGCSE Mathematics has Core and Extended options. The focus here might be more on skills common to Extended and WAEC General Math, but acknowledging Core differences if relevant.)

This section would provide a comparative overview.

**Syllabus Content Overlap:** Identify topics that are common to both WAEC General Mathematics and Cambridge IGCSE Mathematics (Extended or Core as appropriate).

**Topics Unique to or More Emphasized in WAEC:** (e.g., perhaps certain aspects of traditional mensuration, specific logic/set notations, certain geometry theorems if syllabus diverges).

**Topics Unique to or More Emphasized in Cambridge IGCSE (Extended):** (e.g., perhaps more depth in vectors, matrices, functions, more advanced calculus for Additional Mathematics 0606 if that's considered a follow-on, more graphical calculator use where permitted, specific styles of investigation or problem-solving tasks). For IGCSE Mathematics 0580 (Extended), there might be greater emphasis on transformation geometry, probability of combined events, statistical diagrams like histograms with unequal class widths (frequency density).

**Depth of Treatment:** Compare the expected depth of understanding and complexity of problems for common topics.

**Calculator Policy:** Differences in calculator permissions and expectations for showing working.

**Mathematical Notation and Terminology:** Any subtle differences in notation or preferred terminology.

(Suggested content: A comparative table highlighting key topics and noting if they are common, or more specific/emphasized in WAEC or Cambridge IGCSE Extended. This requires detailed current knowledge of both syllabi.)`,
          "mcq": {
            "question": "What is the primary purpose of comparing the WAEC and Cambridge IGCSE syllabi?",
            "options": [
              "To prove one is better than the other",
              "To identify common topics for efficient study and be aware of unique topics in each",
              "To find the easier exam to take",
              "To only study the topics that appear on both exams"
            ],
            "correctAnswer": "To identify common topics for efficient study and be aware of unique topics in each",
            "explanation": "Understanding the overlap helps in creating an efficient study plan, while knowing the differences ensures that students preparing for a specific exam do not miss any required topics or misunderstand the expected depth of knowledge."
          }
        },
        {
          "title": "17.2 Timed Mock Exams and Model Answers",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=anhp7NRVCLQ",
          "content": `This section is about providing full paper practice that integrates elements relevant to both exam boards or focuses on a common core.

**Mock Exam Papers:**
*   Design one or two full mock exam papers (or substantial sections) that cover common core topics and use a blend of question styles from both WAEC and Cambridge.
*   Alternatively, provide separate mock WAEC and mock Cambridge IGCSE papers.
*   Each paper should have clear instructions regarding time allowed and marks per question.

**Questions Included:**
*   A mix of multiple-choice (WAEC style or Cambridge Core style) and structured/extended-response questions (common to both Paper 2s).
*   Ensure coverage of Algebra, Number, Geometry/Mensuration, Trigonometry, Statistics, and Probability.
*   Include problem-solving questions that require application of multiple concepts.

**Model Answers and Marking Schemes:**
*   Detailed step-by-step solutions for all theory/structured questions.
*   For MCQs, provide an answer key, possibly with brief explanations for trickier ones.
*   Provide marking schemes that reflect the assessment objectives of both WAEC (e.g., Method, Accuracy) and Cambridge (e.g., demonstrating understanding, applying techniques, reasoning, accuracy). This helps students see how different aspects of their answers earn marks.

**Self-Assessment Tools:** Encourage students to mark their own attempts against the model answers and marking schemes to identify areas of strength and weakness.

The goal is to build exam stamina and provide realistic practice across the spectrum of skills needed.`,
          "mcq": {
            "question": "What is the main benefit of taking a timed mock exam under realistic conditions?",
            "options": [
              "To guarantee a good grade on the real exam",
              "To practice time management and build exam stamina",
              "To see the exact questions that will be on the real exam",
              "To prove you don't need to study anymore"
            ],
            "correctAnswer": "To practice time management and build exam stamina",
            "explanation": "Timed mock exams simulate the pressure and constraints of the actual test, helping students to improve their pacing, manage exam anxiety, and identify areas where they are spending too much time."
          }
        },
        {
          "title": "17.3 Revision Tips and Common Pitfalls (Combined Perspective)",
          "image": "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "video": "https://www.youtube.com/watch?v=JpiRxSCMmNI",
          "content": `This section offers holistic advice applicable to preparing for rigorous mathematics examinations like WAEC and Cambridge IGCSE.

**Effective Revision Strategies:**
*   **Active Recall:** Testing yourself regularly (e.g., using flashcards, trying problems without looking at solutions first).
*   **Spaced Repetition:** Revisiting topics at increasing intervals.
*   **Interleaved Practice:** Mixing different types of problems and topics rather than blocking practice.
*   **Summarize Key Concepts and Formulas:** Create your own notes, mind maps, or formula sheets for important topics.
*   **Consistent Problem Solving:** Work through a wide variety of problems from textbooks, past papers, and workbooks. Focus on understanding the method as well as getting the right answer.
*   **Identify and Work on Weak Areas:** Don't just practice what you are good at.
*   **Understand Underlying Concepts:** Don't just memorize formulas; understand why they work and when to apply them.

**Common Pitfalls Across Examinations:**
*   **Misreading or Misinterpreting Questions:** Failing to understand what is being asked. Underline keywords.
*   **Calculation Errors:** Simple arithmetic mistakes. Double-check calculations, use a calculator effectively where allowed.
*   **Not Showing Sufficient Working:** Crucial for theory papers; method marks can be awarded even if the final answer is incorrect.
*   **Incorrect Use or Recall of Formulas.**
*   **Rounding Errors / Inappropriate Accuracy:** Rounding too early in multi-step calculations; not giving answers to the required degree of accuracy.
*   **Poor Time Management:** Spending too long on difficult questions.
*   **Algebraic Manipulation Errors:** Mistakes in simplifying expressions or solving equations.
*   **Forgetting Units or Giving Incorrect Units.**
*   **Panic or Exam Anxiety:** Strategies for staying calm and focused.

**Tips for Diagrams:**
*   In geometry or trigonometry, always draw a clear, labeled diagram if one is not provided.
*   Use diagrams to help visualize the problem and relationships.

**Checking Work:** If time permits, always try to review your answers, especially for sense-making and obvious errors.

This chapter would serve as a final guide to exam preparation, empowering students with techniques and awareness to perform their best in either or both examination systems.`,
          "mcqs": [
            {
              "question": "A revision technique where you test yourself regularly without looking at the answers is called:",
              "options": [
                "Passive Reading",
                "Active Recall",
                "Blocked Practice",
                "Cramming"
              ],
              "correctAnswer": "Active Recall",
              "explanation": "Active recall is a highly effective study method that involves actively retrieving information from memory, which strengthens neural pathways and improves long-term retention."
            },
            {
              "question": "Which of these is a common pitfall in both WAEC and Cambridge exams?",
              "options": [
                "Misreading the question",
                "Following instructions perfectly",
                "Showing clear and logical working",
                "Managing time effectively"
              ],
              "correctAnswer": "Misreading the question",
              "explanation": "Misinterpreting what a question is asking is a frequent source of error that can lead to a student providing a correct answer to the wrong question, thereby losing all marks. Carefully reading and underlining keywords is crucial."
            },
            {
              "question": "What does it mean to give an answer to an 'appropriate degree of accuracy'?",
              "options": [
                "Writing as many decimal places as possible",
                "Rounding all answers to the nearest whole number",
                "Following the instructions in the question or the exam's general guidelines (e.g., 3 significant figures)",
                "Guessing the accuracy"
              ],
              "correctAnswer": "Following the instructions in the question or the exam's general guidelines (e.g., 3 significant figures)",
              "explanation": "Exams often specify the required accuracy (e.g., 3 s.f. for non-exact answers, 1 d.p. for angles). Failing to adhere to these instructions can result in losing accuracy marks."
            },
            {
              "question": "What is 'interleaved practice'?",
              "options": [
                "Studying one topic for a very long time",
                "Mixing up different types of problems and topics during a study session",
                "Taking long breaks between study sessions",
                "Only studying the first and last chapters"
              ],
              "correctAnswer": "Mixing up different types of problems and topics during a study session",
              "explanation": "Interleaving involves practicing a mix of skills and concepts. This forces your brain to continually retrieve different strategies and is more effective for long-term learning than practicing one type of problem repeatedly (blocked practice)."
            },
            {
              "question": "If you are preparing for both WAEC and IGCSE, your study should focus on:",
              "options": [
                "Only the IGCSE syllabus because it is international",
                "Only the WAEC syllabus",
                "The common core topics first, then the specific topics for each exam",
                "Only the hardest topics from both syllabi"
              ],
              "correctAnswer": "The common core topics first, then the specific topics for each exam",
              "explanation": "The most efficient approach is to master the topics that overlap between the two exams first. After that, you can dedicate separate time to learning and practicing the topics that are unique to each examination board."
            }
          ]
        }
      ]
    }
  ]
}


export type Chapter = (typeof textbook)['chapters'][0];
export type Section = (typeof textbook)['chapters'][0]['sections'][0];
export type MCQ = (typeof textbook)['chapters'][0]['sections'][0]['mcq'];
export type mcq_ARRAY = (typeof textbook)['chapters'][0]['sections'][3]['mcq'];
