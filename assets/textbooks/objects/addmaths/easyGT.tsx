
export const easyGT = {
  subject: "Further Mathematics",
  Questions: [
    {
      number: 1,
      question: "What is the value of i², where i is the imaginary unit?",
      grade: 10,
      options: ["1", "-1", "i", "-i"],
      answer: "-1",
      explanation: "By definition, the imaginary unit i is the square root of -1 (i = √-1). Therefore, squaring both sides gives i² = -1."
    },
    {
      number: 2,
      question: "Evaluate √(-25).",
      grade: 10,
      options: ["5", "-5", "5i", "-5i"],
      answer: "5i",
      explanation: "√(-25) = √(25 × -1) = √25 × √(-1) = 5 × i = 5i."
    },
    {
      number: 3,
      question: "For the complex number z = -4 + 9i, what is the real part, Re(z)?",
      grade: 10,
      options: ["9", "4", "-4", "9i"],
      answer: "-4",
      explanation: "In a complex number z = a + bi, the real part is 'a'. For z = -4 + 9i, a = -4."
    },
    {
      number: 4,
      question: "What is the imaginary part, Im(z), of the complex number z = 5 - 2i?",
      grade: 10,
      options: ["2", "-2", "2i", "5"],
      answer: "-2",
      explanation: "In a complex number z = a + bi, the imaginary part is 'b'. For z = 5 - 2i, b = -2."
    },
    {
      number: 5,
      question: "A complex number with a real part of 0 is called...",
      grade: 10,
      options: ["A purely real number", "A real number", "An irrational number", "A purely imaginary number"],
      answer: "A purely imaginary number",
      explanation: "A complex number z = a + bi where a = 0 takes the form z = bi. This is defined as a purely imaginary number. For example, 6i = 0 + 6i."
    },
    {
      number: 6,
      question: "Two complex numbers z₁ = a + bi and z₂ = c + di are equal if and only if...",
      grade: 10,
      options: ["a = d and b = c", "a + b = c + d", "a = c and b = d", "ac = bd"],
      answer: "a = c and b = d",
      explanation: "The condition for equality of two complex numbers is that their real parts must be equal (a=c) and their imaginary parts must be equal (b=d)."
    },
    {
      number: 7,
      question: "If 3x + 2yi = 6 - 8i, find the values of x and y.",
      grade: 10,
      options: ["x = 2, y = 4", "x = 2, y = -4", "x = 3, y = -4", "x = 6, y = -8"],
      answer: "x = 2, y = -4",
      explanation: "Equating the real and imaginary parts: 3x = 6 gives x = 2. 2y = -8 gives y = -4."
    },
    {
      number: 8,
      question: "Evaluate (4 + 3i) + (2 - 5i).",
      grade: 10,
      options: ["6 + 8i", "6 - 2i", "2 - 2i", "2 + 8i"],
      answer: "6 - 2i",
      explanation: "Add the real parts and imaginary parts separately: (4 + 2) + (3 - 5)i = 6 - 2i."
    },
    {
      number: 9,
      question: "Evaluate (7 - 2i) - (3 + 4i).",
      grade: 10,
      options: ["4 + 2i", "10 + 2i", "4 - 6i", "10 - 6i"],
      answer: "4 - 6i",
      explanation: "Subtract the real parts and imaginary parts separately: (7 - 3) + (-2 - 4)i = 4 - 6i."
    },
    {
      number: 10,
      question: "Find the product (2 + i)(3 - 2i).",
      grade: 10,
      options: ["6 - 2i", "8 - i", "4 - i", "8 + i"],
      answer: "8 - i",
      explanation: "(2+i)(3-2i) = 2(3) + 2(-2i) + i(3) + i(-2i) = 6 - 4i + 3i - 2i² = 6 - i - 2(-1) = 6 - i + 2 = 8 - i."
    },
    {
      number: 11,
      question: "What is the complex conjugate of z = -5 + 2i?",
      grade: 10,
      options: ["5 - 2i", "5 + 2i", "-5 - 2i", "2 - 5i"],
      answer: "-5 - 2i",
      explanation: "The complex conjugate z̅ of a complex number z = a + bi is a - bi. So for z = -5 + 2i, z̅ = -5 - 2i."
    },
    {
      number: 12,
      question: "If z = 3 - 4i, find z + z̅.",
      grade: 10,
      options: ["0", "6", "-8i", "6 - 8i"],
      answer: "6",
      explanation: "z̅ = 3 + 4i. z + z̅ = (3 - 4i) + (3 + 4i) = (3+3) + (-4+4)i = 6. In general, z + z̅ = 2Re(z)."
    },
    {
      number: 13,
      question: "If z = a + bi, what is z * z̅ always equal to?",
      grade: 10,
      options: ["a² - b²", "a² + b²", "2a", "2bi"],
      answer: "a² + b²",
      explanation: "z * z̅ = (a + bi)(a - bi) = a² - (bi)² = a² - b²i² = a² - b²(-1) = a² + b². This is always a non-negative real number."
    },
    {
      number: 14,
      question: "Evaluate (3 + i) / (2 - i).",
      grade: 10,
      options: ["1 + i", "1 - i", "5 + 5i", "1/5 + i"],
      answer: "1 + i",
      explanation: "Multiply numerator and denominator by the conjugate of the denominator (2+i): [(3+i)(2+i)] / [(2-i)(2+i)] = [6 + 3i + 2i + i²] / [2²+1²] = [6 + 5i - 1] / 5 = [5 + 5i] / 5 = 1 + i."
    },
    {
      number: 15,
      question: "Find the modulus of the complex number z = 3 - 4i.",
      grade: 10,
      options: ["25", "7", "5", "√7"],
      answer: "5",
      explanation: "The modulus |z| = √(a² + b²) = √(3² + (-4)²) = √(9 + 16) = √25 = 5."
    },
    {
      number: 16,
      question: "Find |z₁z₂| if z₁ = 1 + i and z₂ = 2 + 3i.",
      grade: 10,
      options: ["√26", "26", "√13", "√2"],
      answer: "√26",
      explanation: "Using the property |z₁z₂| = |z₁||z₂|. |z₁| = √(1²+1²) = √2. |z₂| = √(2²+3²) = √13. So, |z₁z₂| = √2 * √13 = √26."
    },
    {
      number: 17,
      question: "The argument of a complex number z = a + bi represents the...",
      grade: 10,
      options: ["Distance from the origin.", "Reflection across the real axis.", "Angle with the positive real axis.", "Reciprocal of the number."],
      answer: "Angle with the positive real axis.",
      explanation: "The argument of z is the angle that the vector representing z in the Argand diagram makes with the positive real axis."
    },
    {
      number: 18,
      question: "Find the principal argument of z = -1 + i.",
      grade: 10,
      options: ["π/4", "-π/4", "3π/4", "-3π/4"],
      answer: "3π/4",
      explanation: "The complex number -1 + i is in the second quadrant. a=-1, b=1. The reference angle is arctan(|b/a|) = arctan(1/1) = π/4. For Quadrant II, the principal argument is φ = π - reference_angle = π - π/4 = 3π/4."
    },
    {
      number: 19,
      question: "Find the polar form r(cos φ + i sin φ) for z = 1 + i.",
      grade: 10,
      options: ["2(cos(π/4) + i sin(π/4))", "√2(cos(π/4) + i sin(π/4))", "2(cos(π/2) + i sin(π/2))", "√2(cos(π/2) + i sin(π/2))"],
      answer: "√2(cos(π/4) + i sin(π/4))",
      explanation: "r = |z| = √(1²+1²) = √2. φ = arctan(1/1) = π/4 (since z is in Quadrant I). So z = √2(cos(π/4) + i sin(π/4))."
    },
    {
      number: 20,
      question: "Convert z = 3(cos(π/2) + i sin(π/2)) to Cartesian form a + bi.",
      grade: 10,
      options: ["3 + i", "3", "3i", "-3"],
      answer: "3i",
      explanation: "a = r cos(φ) = 3 cos(π/2) = 3(0) = 0. b = r sin(φ) = 3 sin(π/2) = 3(1) = 3. So z = 0 + 3i = 3i."
    },
    {
      number: 21,
      question: "According to Euler's formula, e^(iφ) is equal to...",
      grade: 10,
      options: ["r(cos φ + i sin φ)", "cos φ - i sin φ", "cos φ + i sin φ", "r e^(φ)"],
      answer: "cos φ + i sin φ",
      explanation: "Euler's formula states the fundamental relationship e^(iφ) = cos(φ) + i sin(φ), where φ is in radians."
    },
    {
      number: 22,
      question: "What is the value of e^(iπ)?",
      grade: 10,
      options: ["1", "-1", "i", "-i"],
      answer: "-1",
      explanation: "Using Euler's formula: e^(iπ) = cos(π) + i sin(π) = -1 + i(0) = -1. This is part of Euler's Identity: e^(iπ) + 1 = 0."
    },
    {
      number: 23,
      question: "Use De Moivre's theorem to evaluate (cos(π/6) + i sin(π/6))³.",
      grade: 10,
      options: ["i", "-i", "1", "(√3/2 + i/2)³"],
      answer: "i",
      explanation: "By De Moivre's theorem, [cos φ + i sin φ]ⁿ = cos(nφ) + i sin(nφ).\nSo, (cos(π/6) + i sin(π/6))³ = cos(3π/6) + i sin(3π/6) = cos(π/2) + i sin(π/2) = 0 + i(1) = i."
    },
    {
      number: 24,
      question: "Use De Moivre's theorem to find (1 + i)⁴.",
      grade: 10,
      options: ["-4", "4", "4i", "-4i"],
      answer: "-4",
      explanation: "First convert 1+i to polar form: z = √2(cos(π/4) + i sin(π/4)).\nz⁴ = [√2]⁴ (cos(4π/4) + i sin(4π/4)) = 4(cos(π) + i sin(π)) = 4(-1 + 0i) = -4."
    },
    {
      number: 25,
      question: "How many distinct cube roots of unity are there?",
      grade: 10,
      options: ["1", "2", "3", "Infinitely many"],
      answer: "3",
      explanation: "A non-zero complex number has exactly n distinct n-th roots. Therefore, the number 1 has 3 distinct cube roots. They are 1, -1/2 + i√3/2, and -1/2 - i√3/2."
    },
    {
      number: 26,
      question: "What is the sum of the n-th roots of unity for n > 1?",
      grade: 10,
      options: ["1", "-1", "n", "0"],
      answer: "0",
      explanation: "A property of the n-th roots of unity is that their sum is always zero for n > 1. They form a regular polygon on the unit circle, and the vector sum of the vertices is the zero vector."
    },
    {
      number: 27,
      question: "How many terms are in the expansion of (x + y)⁷?",
      grade: 10,
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "The expansion of (a + x)ⁿ has n + 1 terms. For n=7, there are 7 + 1 = 8 terms."
    },
    {
      number: 28,
      question: "What is the value of the binomial coefficient ⁵C₂?",
      grade: 10,
      options: ["5", "10", "20", "2"],
      answer: "10",
      explanation: "nCr = n! / [r! (n-r)!]. So, ⁵C₂ = 5! / [2! (5-2)!] = 5! / (2! 3!) = (5×4×3×2×1) / ((2×1)(3×2×1)) = (5×4)/2 = 10."
    },
    {
      number: 29,
      question: "What is the coefficient of the x² term in the expansion of (1 + x)⁴?",
      grade: 10,
      options: ["1", "4", "6", "12"],
      answer: "6",
      explanation: "The term with x² is the (r+1)-th term where r=2. The coefficient is ⁴C₂. ⁴C₂ = 4! / (2! 2!) = (4×3)/(2×1) = 6. Or using Pascal's triangle row for n=4: 1 4 6 4 1."
    },
    {
      number: 30,
      question: "Find the third term in the expansion of (a + 2b)⁵.",
      grade: 10,
      options: ["10a³b²", "40a³b²", "80a²b³", "10a²b³"],
      answer: "40a³b²",
      explanation: "The (r+1)-th term is T_(r+1) = nCr aⁿ⁻ʳ xʳ. The third term means r=2. T₃ = ⁵C₂ (a)⁵⁻² (2b)².\nT₃ = 10 * a³ * 4b² = 40a³b²."
    },
    {
      number: 31,
      question: "In the expansion of (2x - y)⁶, the terms...",
      grade: 10,
      options: ["Are all positive.", "Are all negative.", "Alternate in sign, starting with positive.", "Alternate in sign, starting with negative."],
      answer: "Alternate in sign, starting with positive.",
      explanation: "For an expansion of (a - x)ⁿ, the signs of the terms alternate as + - + - ... The first term is aⁿ, which is positive."
    },
    {
      number: 32,
      question: "The generalized binomial expansion for (1 + x)ⁿ, where n is not a positive integer, is valid only if...",
      grade: 10,
      options: ["x < 1", "|x| > 1", "|x| = 1", "|x| < 1"],
      answer: "|x| < 1",
      explanation: "The infinite series expansion for (1 + x)ⁿ where n is any real number converges only if the absolute value of x is less than 1, i.e., |x| < 1."
    },
    {
      number: 33,
      question: "Find the first three terms in the expansion of (1 + 2x)⁻¹.",
      grade: 10,
      options: ["1 + 2x + 4x²", "1 - 2x + 2x²", "1 - 2x + 4x²", "1 + 2x + 2x²"],
      answer: "1 - 2x + 4x²",
      explanation: "Using (1+y)ⁿ = 1 + ny + [n(n-1)/2!]y² + ... with n=-1 and y=2x.\n= 1 + (-1)(2x) + [(-1)(-2)/2!](2x)² + ...\n= 1 - 2x + [2/2](4x²) + ...\n= 1 - 2x + 4x²."
    },
    {
      number: 34,
      question: "The binomial expansion of (1 - x)^(1/2) is...",
      grade: 10,
      options: ["An infinite series.", "A finite series.", "Not possible.", "Equal to 1 - (1/2)x."],
      answer: "An infinite series.",
      explanation: "When the exponent n is a fraction (not a positive integer), the binomial expansion results in an infinite series."
    },
    {
      number: 35,
      question: "For what range of values of x is the expansion of (4 + x)^(1/2) valid?",
      grade: 10,
      options: ["|x| < 1", "|x| < 4", "|x| > 4", "All real x"],
      answer: "|x| < 4",
      explanation: "First, rewrite as (4(1 + x/4))^(1/2) = 2(1 + x/4)^(1/2). The expansion is valid if |x/4| < 1, which implies |x| < 4."
    },
    {
      number: 36,
      question: "Use the binomial expansion to find a first-order approximation for (1.02)⁵.",
      grade: 10,
      options: ["1.02", "1.10", "1.05", "0.90"],
      answer: "1.10",
      explanation: "(1 + 0.02)⁵. Using the first-order approximation (1 + x)ⁿ ≈ 1 + nx.\n≈ 1 + 5(0.02) = 1 + 0.10 = 1.10."
    },
    {
      number: 37,
      question: "What is the coefficient of x² in the expansion of (1 + x)⁻²?",
      grade: 10,
      options: ["-2", "2", "3", "-3"],
      answer: "3",
      explanation: "Use (1+x)ⁿ = 1 + nx + [n(n-1)/2!]x² + ... with n=-2.\nCoefficient of x² is n(n-1)/2! = (-2)(-2-1)/2 = (-2)(-3)/2 = 6/2 = 3."
    },
    {
      number: 38,
      question: "The Maclaurin series is a special case of the Taylor series expanded about...",
      grade: 10,
      options: ["x = 1", "x = -1", "x = a", "x = 0"],
      answer: "x = 0",
      explanation: "The Maclaurin series for a function f(x) is its Taylor series expansion around the point a = 0."
    },
    {
      number: 39,
      question: "Which of the following is the Maclaurin series for e^x?",
      grade: 10,
      options: ["1 + x + x²/2! + x³/3! + ...", "1 - x + x²/2! - x³/3! + ...", "x - x³/3! + x⁵/5! - ...", "1 - x²/2! + x⁴/4! - ..."],
      answer: "1 + x + x²/2! + x³/3! + ...",
      explanation: "The standard Maclaurin series for e^x is 1 + x + x²/2! + x³/3! + ..., which converges for all x."
    },
    {
      number: 40,
      question: "The generalized binomial theorem for (1 + x)ⁿ is the Maclaurin series for the function...",
      grade: 10,
      options: ["f(x) = eⁿˣ", "f(x) = xⁿ", "f(x) = (1 + x)ⁿ", "f(x) = 1 + xⁿ"],
      answer: "f(x) = (1 + x)ⁿ",
      explanation: "The generalized binomial expansion is precisely the Maclaurin series for the function f(x) = (1 + x)ⁿ."
    },
    {
      number: 41,
      question: "When a polynomial P(x) is divided by (x - c), what does the Remainder Theorem state the remainder is?",
      grade: 10,
      options: ["P(0)", "P(-c)", "0", "P(c)"],
      answer: "P(c)",
      explanation: "The Remainder Theorem states that if P(x) is divided by the linear binomial (x - c), the remainder is P(c)."
    },
    {
      number: 42,
      question: "Find the remainder when P(x) = x³ - 2x² + 5x - 1 is divided by (x - 2).",
      grade: 10,
      options: ["9", "-1", "1", "-9"],
      answer: "9",
      explanation: "By the Remainder Theorem, the remainder is P(2).\nP(2) = (2)³ - 2(2)² + 5(2) - 1 = 8 - 2(4) + 10 - 1 = 8 - 8 + 10 - 1 = 9."
    },
    {
      number: 43,
      question: "According to the Factor Theorem, (x - c) is a factor of P(x) if and only if...",
      grade: 10,
      options: ["P(c) = 1", "P(c) = 0", "c = 0", "P(0) = c"],
      answer: "P(c) = 0",
      explanation: "The Factor Theorem is a direct consequence of the Remainder Theorem. If the remainder P(c) is 0, then (x - c) is a factor."
    },
    {
      number: 44,
      question: "Given that (x + 1) is a factor of P(x) = x³ + kx² - x + 6, find the value of k.",
      grade: 10,
      options: ["-6", "4", "6", "-4"],
      answer: "-6",
      explanation: "If (x+1) is a factor, then by the Factor Theorem, P(-1) = 0.\nP(-1) = (-1)³ + k(-1)² - (-1) + 6 = -1 + k(1) + 1 + 6 = k + 6.\nSetting the remainder to zero: k + 6 = 0, so k = -6."
    },
    {
      number: 45,
      question: "If a polynomial with real coefficients has a complex root 2 + 3i, what must another root be?",
      grade: 10,
      options: ["-2 + 3i", "-2 - 3i", "3 + 2i", "2 - 3i"],
      answer: "2 - 3i",
      explanation: "The Complex Conjugate Root Theorem states that if a polynomial has real coefficients, then its complex roots must occur in conjugate pairs. The conjugate of 2 + 3i is 2 - 3i."
    },
    {
      number: 46,
      question: "What is the end behavior of the polynomial f(x) = -3x⁴ + 2x² - 5?",
      grade: 10,
      options: ["Rises left, rises right", "Falls left, falls right", "Rises left, falls right", "Falls left, rises right"],
      answer: "Falls left, falls right",
      explanation: "The end behavior is determined by the leading term -3x⁴. The degree (4) is even, so both ends go in the same direction. The leading coefficient (-3) is negative, so both ends go down (fall). So, it falls left and falls right."
    },
    {
      number: 47,
      question: "What is the maximum number of turning points for a polynomial of degree 5?",
      grade: 10,
      options: ["5", "6", "4", "3"],
      answer: "4",
      explanation: "A polynomial of degree n has at most n - 1 turning points. For n=5, the maximum number of turning points is 5 - 1 = 4."
    },
    {
      number: 48,
      question: "The graph of a polynomial y = P(x) has a root of multiplicity 2 at x=c. The graph will...",
      grade: 10,
      options: ["Cross the x-axis at c.", "Have a vertical asymptote at x=c.", "Touch the x-axis at c but not cross it.", "Have a jump discontinuity at x=c."],
      answer: "Touch the x-axis at c but not cross it.",
      explanation: "A root with an even multiplicity (like 2, a double root) causes the graph to be tangent to the x-axis at that point, meaning it touches the axis but does not cross it."
    },
    {
      number: 49,
      question: "Where is the vertical asymptote of the rational function f(x) = (x + 2) / (x - 3)?",
      grade: 10,
      options: ["x = 3", "x = -2", "y = 1", "y = 3"],
      answer: "x = 3",
      explanation: "Vertical asymptotes occur where the denominator is zero and the numerator is non-zero. The denominator x - 3 is zero when x = 3."
    },
    {
      number: 50,
      question: "Find the horizontal asymptote of f(x) = (2x² + 1) / (x² - 4).",
      grade: 10,
      options: ["y = 0", "y = 1/2", "y = 2", "There is no horizontal asymptote."],
      answer: "y = 2",
      explanation: "The degree of the numerator (2) is equal to the degree of the denominator (2). Therefore, the horizontal asymptote is the ratio of the leading coefficients: y = 2/1 = 2."
    },
    {
      number: 51,
      question: "Find the horizontal asymptote of f(x) = (x - 5) / (x³ + 2).",
      grade: 10,
      options: ["y = 0", "y = 1", "y = -5/2", "There is no horizontal asymptote."],
      answer: "y = 0",
      explanation: "The degree of the numerator (1) is less than the degree of the denominator (3). Therefore, the horizontal asymptote is the x-axis, y = 0."
    },
    {
      number: 52,
      question: "Which type of asymptote does f(x) = (x² + 1) / (x - 1) have?",
      grade: 10,
      options: ["Horizontal", "Slant (Oblique)", "Both Horizontal and Slant", "Parabolic"],
      answer: "Slant (Oblique)",
      explanation: "The degree of the numerator (2) is exactly one greater than the degree of the denominator (1). This is the condition for a slant (oblique) asymptote."
    },
    {
      number: 53,
      question: "To find the x-intercept(s) of a rational function P(x)/Q(x), one must...",
      grade: 10,
      options: ["Set the denominator Q(x) = 0.", "Set the numerator P(x) = 0.", "Find where the function is undefined.", "Evaluate the function at x=0."],
      answer: "Set the numerator P(x) = 0.",
      explanation: "The x-intercepts are points where f(x) = 0. A fraction is zero only when its numerator is zero (and its denominator is non-zero)."
    },
    {
      number: 54,
      question: "If log_b (x) = y, which of the following is true?",
      grade: 10,
      options: ["y^b = x", "x^b = y", "b^y = x", "b^x = y"],
      answer: "b^y = x",
      explanation: "This is the definition of a logarithm. log_b(x) = y is the inverse of the exponential form b^y = x."
    },
    {
      number: 55,
      question: "Evaluate log₃(9).",
      grade: 10,
      options: ["2", "3", "1/2", "6"],
      answer: "2",
      explanation: "We are asking 'to what power must 3 be raised to get 9?'. Since 3² = 9, log₃(9) = 2."
    },
    {
      number: 56,
      question: "What is the value of ln(e)?",
      grade: 10,
      options: ["0", "e", "10", "1"],
      answer: "1",
      explanation: "The natural logarithm (ln) has a base of e. So, log_e(e) = 1, since e¹ = e."
    },
    {
      number: 57,
      question: "The expression log(M) + log(N) is equal to...",
      grade: 10,
      options: ["log(M - N)", "log(M / N)", "log(M × N)", "log(M)^N"],
      answer: "log(M × N)",
      explanation: "This is the Product Rule for logarithms: log_b(MN) = log_b(M) + log_b(N)."
    },
    {
      number: 58,
      question: "Simplify: 2 log(x) - log(y).",
      grade: 10,
      options: ["log(2x/y)", "log(x²/y)", "log(x² - y)", "log(x+x-y)"],
      answer: "log(x²/y)",
      explanation: "Using the Power Rule, 2 log(x) = log(x²). Then using the Quotient Rule, log(x²) - log(y) = log(x²/y)."
    },
    {
      number: 59,
      question: "Use the change of base formula to express log₇(12) in terms of natural logarithms.",
      grade: 10,
      options: ["ln(7)/ln(12)", "ln(12/7)", "ln(12) / ln(7)", "ln(12) - ln(7)"],
      answer: "ln(12) / ln(7)",
      explanation: "The change of base formula is log_b(M) = log_a(M) / log_a(b). Here, log₇(12) = ln(12) / ln(7)."
    },
    {
      number: 60,
      question: "Solve the equation 3^(x) = 81.",
      grade: 10,
      options: ["x = 3", "x = 9", "x = 4", "x = 27"],
      answer: "x = 4",
      explanation: "We can write both sides with the same base. 81 = 3⁴. So, 3^x = 3⁴, which implies x = 4."
    },
    {
      number: 61,
      question: "Solve the equation log₂(x) = 5.",
      grade: 10,
      options: ["x = 10", "x = 25", "x = 3", "x = 32"],
      answer: "x = 32",
      explanation: "Rewrite the logarithmic equation in exponential form: x = 2⁵ = 32."
    },
    {
      number: 62,
      question: "Solve log(x) + log(x-3) = 1. (log is base 10)",
      grade: 10,
      options: ["x = 5", "x = -2", "x = 5 or x = -2", "x = 4"],
      answer: "x = 5",
      explanation: "log[x(x-3)] = 1 => x(x-3) = 10¹ => x² - 3x = 10 => x² - 3x - 10 = 0.\nFactoring: (x-5)(x+2) = 0, so x = 5 or x = -2.\nWe must check for validity. The argument of a logarithm must be positive. If x = -2, log(-2) is undefined. So we reject x=-2. The only solution is x = 5."
    },
    {
      number: 63,
      question: "A population grows according to P(t) = 100e^(0.05t). What is the initial population P₀?",
      grade: 10,
      options: ["100", "0.05", "e", "5"],
      answer: "100",
      explanation: "The general model is P(t) = P₀e^(kt). The initial population P₀ is the value at t=0, which is the coefficient in front of the exponential term. P₀ = 100."
    },
    {
      number: 64,
      question: "The half-life of a radioactive substance is the time it takes for...",
      grade: 10,
      options: ["All of the substance to decay.", "Half of the substance to decay.", "Double the substance to appear.", "The substance to stop being radioactive."],
      answer: "Half of the substance to decay.",
      explanation: "By definition, the half-life is the time required for a quantity to reduce to half of its initial value."
    },
    {
      number: 65,
      question: "If a quantity decays according to the model A(t) = A₀e^(kt), what is the sign of k for decay?",
      grade: 10,
      options: ["Positive", "Negative", "Zero", "It depends on A₀."],
      answer: "Negative",
      explanation: "For exponential decay, the rate constant k must be negative to make the exponent negative, causing the function to decrease over time. The model is often written A(t) = A₀e^(-λt) where λ is positive, so k=-λ."
    },
    {
      number: 66,
      question: "An investment of $1000 at 5% interest compounded continuously for 2 years will be worth...",
      grade: 10,
      options: ["1000e^(0.1)", "1000(1.05)²", "1000 + 1000(0.05)(2)", "1000e^(10)"],
      answer: "1000e^(0.1)",
      explanation: "The formula for continuous compounding is A = Pe^(rt). Here, P=1000, r=0.05, t=2. A = 1000e^(0.05 × 2) = 1000e^(0.1)."
    },
    {
      number: 67,
      question: "Evaluate lim (x→2) (3x² - 5).",
      grade: 10,
      options: ["1", "7", "2", "Does not exist"],
      answer: "7",
      explanation: "Since this is a polynomial function, we can use direct substitution.\nlim (x→2) (3x² - 5) = 3(2)² - 5 = 3(4) - 5 = 12 - 5 = 7."
    },
    {
      number: 68,
      question: "Evaluate lim (x→3) [(x² - 9) / (x - 3)].",
      grade: 10,
      options: ["0", "Does not exist", "6", "3"],
      answer: "6",
      explanation: "Direct substitution gives 0/0 (indeterminate form). We factor the numerator:\nlim (x→3) [(x-3)(x+3) / (x-3)] = lim (x→3) (x+3) = 3 + 3 = 6."
    },
    {
      number: 69,
      question: "For a limit lim (x→c) f(x) = L to exist, what must be true?",
      grade: 10,
      options: ["f(c) must equal L.", "The left-hand and right-hand limits must exist.", "The function must be continuous at x=c.", "The left-hand and right-hand limits must exist and be equal."],
      answer: "The left-hand and right-hand limits must exist and be equal.",
      explanation: "The definition of a two-sided limit requires that the limit as x approaches c from the left is equal to the limit as x approaches c from the right."
    },
    {
      number: 70,
      question: "Which of the following is NOT a condition for a function f(x) to be continuous at x = c?",
      grade: 10,
      options: ["f(c) is defined.", "lim (x→c) f(x) exists.", "lim (x→c) f(x) = f(c).", "f'(c) exists."],
      answer: "f'(c) exists.",
      explanation: "The existence of the derivative, f'(c), is a condition for differentiability, which is a stronger condition than continuity. The first three options are the definition of continuity at a point."
    },
    {
      number: 71,
      question: "A function has a removable discontinuity (a hole) at x = c if...",
      grade: 10,
      options: ["The left and right limits are different.", "The limit at c exists, but f(c) is undefined or not equal to the limit.", "The limit at c is infinite.", "The function oscillates infinitely."],
      answer: "The limit at c exists, but f(c) is undefined or not equal to the limit.",
      explanation: "A removable discontinuity can be 'repaired' by defining or redefining the function at that single point to equal the limit. This describes a hole in the graph."
    },
    {
      number: 72,
      question: "The Intermediate Value Theorem guarantees that if f(x) is continuous on [a, b] with f(a)=1 and f(b)=5, then there must be a 'c' in (a, b) such that...",
      grade: 10,
      options: ["f(c) = 0", "f(c) = 3", "f'(c) = 0", "f(c) = 6"],
      answer: "f(c) = 3",
      explanation: "The IVT states that a continuous function must take on every value N between f(a) and f(b). Since 3 is between 1 and 5, there must be a c such that f(c)=3."
    },
    {
      number: 73,
      question: "Find the derivative of f(x) = x⁵.",
      grade: 10,
      options: ["5x⁴", "5x⁵", "x⁴/4", "4x⁵"],
      answer: "5x⁴",
      explanation: "Using the Power Rule d/dx(xⁿ) = nxⁿ⁻¹: d/dx(x⁵) = 5x⁵⁻¹ = 5x⁴."
    },
    {
      number: 74,
      question: "Find the derivative of f(x) = 4e^x.",
      grade: 10,
      options: ["4e^x", "e^x", "4x e^(x-1)", "0"],
      answer: "4e^x",
      explanation: "The derivative of e^x is e^x. Using the constant multiple rule, d/dx(4e^x) = 4 d/dx(e^x) = 4e^x."
    },
    {
      number: 75,
      question: "Find the derivative of f(x) = sin(x).",
      grade: 10,
      options: ["-sin(x)", "cos(x)", "-cos(x)", "tan(x)"],
      answer: "cos(x)",
      explanation: "This is a standard derivative: d/dx(sin x) = cos x."
    },
    {
      number: 76,
      question: "Use the Product Rule to find the derivative of h(x) = x² cos(x).",
      grade: 10,
      options: ["2x sin(x)", "-2x sin(x)", "2x cos(x) - x² sin(x)", "2x cos(x) + x² sin(x)"],
      answer: "2x cos(x) - x² sin(x)",
      explanation: "Product rule: (f'g + fg'). Let f(x)=x² and g(x)=cos(x). f'(x)=2x and g'(x)=-sin(x).\nh'(x) = (2x)(cos x) + (x²)(-sin x) = 2x cos(x) - x² sin(x)."
    },
    {
      number: 77,
      question: "Use the Quotient Rule to find the derivative of h(x) = e^x / x.",
      grade: 10,
      options: ["e^x", "(e^x (x - 1)) / x²", "(e^x (1 - x)) / x²", "e^x / 1"],
      answer: "(e^x (x - 1)) / x²",
      explanation: "Quotient Rule: (f'g - fg')/g². Let f(x)=e^x, g(x)=x. f'(x)=e^x, g'(x)=1.\nh'(x) = [ (e^x)(x) - (e^x)(1) ] / x² = (xe^x - e^x) / x² = (e^x(x - 1)) / x²."
    },
    {
      number: 78,
      question: "Use the Chain Rule to find the derivative of y = (x³ + 5)⁴.",
      grade: 10,
      options: ["4(x³ + 5)³", "12x²(x³ + 5)³", "4(3x²)³", "12x²"],
      answer: "12x²(x³ + 5)³",
      explanation: "Chain Rule: (derivative of outer) × (derivative of inner).\nOuter function is u⁴, inner is u=x³+5.\nDerivative = 4(x³ + 5)³ × d/dx(x³ + 5) = 4(x³ + 5)³ × 3x² = 12x²(x³ + 5)³."
    },
    {
      number: 79,
      question: "What is the slope of the tangent line to the curve y = x² - 3x at x = 1?",
      grade: 10,
      options: ["1", "-1", "-2", "2"],
      answer: "-1",
      explanation: "The slope of the tangent line is the value of the derivative at that point.\ndy/dx = 2x - 3.\nAt x = 1, the slope is 2(1) - 3 = -1."
    },
    {
      number: 80,
      question: "If f'(x) > 0 on an interval, the function f(x) is...",
      grade: 10,
      options: ["Decreasing", "Increasing", "Concave up", "A local maximum"],
      answer: "Increasing",
      explanation: "A positive first derivative indicates that the function is increasing on that interval."
    },
    {
      number: 81,
      question: "The second derivative test states that if f'(c) = 0 and f''(c) < 0, then f(c) is a...",
      grade: 10,
      options: ["Local minimum", "Local maximum", "Point of inflection", "Undefined point"],
      answer: "Local maximum",
      explanation: "If the first derivative is zero (critical point) and the second derivative is negative (concave down), the point is a local maximum."
    },
    {
      number: 82,
      question: "Optimization problems typically involve finding...",
      grade: 10,
      options: ["The limit of a function.", "The roots of a function.", "The maximum or minimum values of a function.", "The area under a curve."],
      answer: "The maximum or minimum values of a function.",
      explanation: "Optimization is the process of finding the greatest (maximum) or least (minimum) value of a function, often subject to constraints."
    },
    {
      number: 83,
      question: "Integration is often considered the reverse process of...",
      grade: 10,
      options: ["Differentiation", "Finding limits", "Solving equations", "Graphing"],
      answer: "Differentiation",
      explanation: "Finding an antiderivative (integration) is the inverse operation of finding a derivative (differentiation)."
    },
    {
      number: 84,
      question: "Find the indefinite integral ∫ 4x³ dx.",
      grade: 10,
      options: ["12x² + C", "4x⁴ + C", "x⁴/4 + C", "x⁴ + C"],
      answer: "x⁴ + C",
      explanation: "Using the power rule ∫xⁿdx = x^(n+1)/(n+1) + C.\n∫ 4x³ dx = 4 ∫ x³ dx = 4 (x⁴/4) + C = x⁴ + C."
    },
    {
      number: 85,
      question: "Evaluate ∫ e^x dx.",
      grade: 10,
      options: ["xe^x + C", "e^x + C", "ln|x| + C", "1/x + C"],
      answer: "e^x + C",
      explanation: "The integral of e^x is itself, plus the constant of integration: ∫ e^x dx = e^x + C."
    },
    {
      number: 86,
      question: "Find the indefinite integral ∫ sin(x) dx.",
      grade: 10,
      options: ["cos(x) + C", "-cos(x) + C", "-sin(x) + C", "sec²(x) + C"],
      answer: "-cos(x) + C",
      explanation: "The derivative of -cos(x) is -(-sin(x)) = sin(x). So, ∫ sin(x) dx = -cos(x) + C."
    },
    {
      number: 87,
      question: "The Fundamental Theorem of Calculus (Part 2) states that ∫[a,b] f(x) dx is equal to...",
      grade: 10,
      options: ["f(b) - f(a)", "F(b) - F(a)", "f(b) + f(a)", "F(a) - F(b)"],
      answer: "F(b) - F(a)",
      explanation: "The Evaluation Theorem (FTC Part 2) states that the definite integral from a to b is the change in the antiderivative, F(b) - F(a)."
    },
    {
      number: 88,
      question: "Evaluate the definite integral ∫[0,1] x² dx.",
      grade: 10,
      options: ["1", "1/3", "1/2", "3"],
      answer: "1/3",
      explanation: "∫ x² dx = x³/3.\nEvaluating from 0 to 1: [x³/3]_[0,1] = (1³/3) - (0³/3) = 1/3 - 0 = 1/3."
    },
    {
      number: 89,
      question: "Which technique is most appropriate for evaluating ∫ 2x cos(x²) dx?",
      grade: 10,
      options: ["Integration by parts", "Partial fractions", "u-Substitution", "Power rule directly"],
      answer: "u-Substitution",
      explanation: "Let u = x² (the inner function). Then du = 2x dx, which is exactly the other part of the integrand. This is a classic u-substitution problem. ∫ cos(u) du = sin(u) + C = sin(x²) + C."
    },
    {
      number: 90,
      question: "When using Integration by Parts for ∫ x sin(x) dx, what is the best choice for u?",
      grade: 10,
      options: ["x", "sin(x)", "x sin(x)", "dx"],
      answer: "x",
      explanation: "Using the LIATE mnemonic (Log, Inverse Trig, Algebraic, Trig, Exponential), the algebraic term 'x' comes before the trigonometric term 'sin(x)'. Choosing u = x makes du = dx, which simplifies the new integral."
    },
    {
      number: 91,
      question: "Which technique is used to integrate rational functions like 1 / (x² - 1)?",
      grade: 10,
      options: ["u-Substitution", "Integration by parts", "Partial fractions", "Trigonometric substitution"],
      answer: "Partial fractions",
      explanation: "The denominator can be factored as (x-1)(x+1). The rational function can then be decomposed into a sum of simpler fractions, A/(x-1) + B/(x+1), which is the method of partial fractions."
    },
    {
      number: 92,
      question: "The area between two curves y=f(x) and y=g(x) from x=a to x=b, where f(x) ≥ g(x), is given by...",
      grade: 10,
      options: ["∫[a,b] f(x)g(x) dx", "∫[a,b] [f(x) + g(x)] dx", "∫[a,b] [f(x) - g(x)] dx", "∫[a,b] [g(x) - f(x)] dx"],
      answer: "∫[a,b] [f(x) - g(x)] dx",
      explanation: "The area between two curves is the integral of the upper curve minus the lower curve over the given interval."
    },
    {
      number: 93,
      question: "The volume of the solid generated by revolving the region under y = f(x) from x=a to x=b about the x-axis is given by the Disk Method formula...",
      grade: 10,
      options: ["∫[a,b] π f(x) dx", "∫[a,b] π [f(x)]² dx", "∫[a,b] 2π f(x) dx", "∫[a,b] [f(x)]² dx"],
      answer: "∫[a,b] π [f(x)]² dx",
      explanation: "The Disk Method formula for rotation about the x-axis sums the volumes of infinitesimally thin disks. Each disk has radius y = f(x) and area π[f(x)]², so the volume element is dV = π[f(x)]² dx."
    },
    {
      number: 94,
      question: "Evaluate ∫ (1/x) dx.",
      grade: 10,
      options: ["-1/x² + C", "ln|x| + C", "e^x + C", "x + C"],
      answer: "ln|x| + C",
      explanation: "The integral of 1/x (or x⁻¹) is the natural logarithm of the absolute value of x, ln|x|, plus the constant of integration. This is the special case where the power rule (n=-1) does not apply."
    },
    {
      number: 95,
      question: "The order of the differential equation d²y/dx² + 3(dy/dx) + 2y = 0 is...",
      grade: 10,
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "The order of a differential equation is the order of the highest derivative present. Here, the highest derivative is the second derivative, d²y/dx²."
    },
    {
      number: 96,
      question: "Which of the following is a separable first-order differential equation?",
      grade: 10,
      options: ["dy/dx = x + y", "dy/dx = xy", "dy/dx + xy = x²", "d²y/dx² = y"],
      answer: "dy/dx = xy",
      explanation: "A DE is separable if it can be written as f(y)dy = g(x)dx. In B, we can write dy/dx = xy as (1/y)dy = x dx, separating the variables. Option A is not separable. Option C is linear but not separable. Option D is second-order."
    },
    {
      number: 97,
      question: "The first step in solving a separable equation dy/dx = G(x)H(y) is to...",
      grade: 10,
      options: ["Differentiate both sides.", "Take the logarithm.", "Separate the variables.", "Find an integrating factor."],
      answer: "Separate the variables.",
      explanation: "The method for solving separable equations begins with algebraic manipulation to separate all y terms with dy and all x terms with dx."
    },
    {
      number: 98,
      question: "A first-order linear differential equation has the standard form...",
      grade: 10,
      options: ["dy/dx + P(x)y = Q(x)", "dy/dx = P(x)Q(y)", "P(x)dx + Q(y)dy = 0", "ay'' + by' + cy = 0"],
      answer: "dy/dx + P(x)y = Q(x)",
      explanation: "The standard form for a first-order linear DE is dy/dx + P(x)y = Q(x), where P(x) and Q(x) are functions of x only."
    },
    {
      number: 99,
      question: "What is the integrating factor (IF) for the linear DE: dy/dx + (1/x)y = x²?",
      grade: 10,
      options: ["1/x", "x", "ln(x)", "e^x"],
      answer: "x",
      explanation: "The integrating factor is IF = e^(∫P(x)dx). Here, P(x) = 1/x. ∫(1/x)dx = ln(x). So, IF = e^(ln(x)) = x."
    },
    {
      number: 100,
      question: "The equation a(d²y/dx²) + b(dy/dx) + cy = 0 is described as...",
      grade: 10,
      options: ["First-order and linear.", "Second-order and homogeneous.", "Second-order and non-homogeneous.", "Separable."],
      answer: "Second-order and homogeneous.",
      explanation: "It is second-order due to the d²y/dx² term. It is homogeneous because the right-hand side is zero."
    },
    {
      number: 101,
      question: "To solve ay'' + by' + cy = 0, we assume a solution of the form y = e^(mx) and form the...",
      grade: 10,
      options: ["Integrating factor.", "Maclaurin series.", "Characteristic equation.", "Wronskian determinant."],
      answer: "Characteristic equation.",
      explanation: "Substituting y = e^(mx) and its derivatives into the DE leads to the algebraic quadratic equation am² + bm + c = 0, which is called the characteristic (or auxiliary) equation."
    },
    {
      number: 102,
      question: "Find the characteristic equation for y'' - 3y' + 2y = 0.",
      grade: 10,
      options: ["m² - 3m + 2 = 0", "m² + 3m + 2 = 0", "2m² - 3m + 1 = 0", "e^(m) - 3m + 2 = 0"],
      answer: "m² - 3m + 2 = 0",
      explanation: "Replacing y'' with m², y' with m, and y with 1 gives the characteristic equation m² - 3m + 2 = 0."
    },
    {
      number: 103,
      question: "If the characteristic equation has two distinct real roots m₁ and m₂, the general solution is...",
      grade: 10,
      options: ["y = C₁e^(m₁x) + C₂e^(m₂x)", "y = (C₁ + C₂x)e^(m₁x)", "y = e^(m₁x)(C₁cos(m₂x) + C₂sin(m₂x))", "y = C₁sin(m₁x) + C₂cos(m₂x)"],
      answer: "y = C₁e^(m₁x) + C₂e^(m₂x)",
      explanation: "For two distinct real roots m₁ and m₂, the fundamental solutions are e^(m₁x) and e^(m₂x), leading to the general solution y(x) = C₁e^(m₁x) + C₂e^(m₂x)."
    },
    {
      number: 104,
      question: "If the characteristic equation has a repeated real root m, the general solution is...",
      grade: 10,
      options: ["y = C₁e^(mx) + C₂e^(mx)", "y = C₁e^(mx) + C₂xe^(mx)", "y = e^(mx)(C₁cos(x) + C₂sin(x))", "y = C₁cos(mx) + C₂sin(mx)"],
      answer: "y = C₁e^(mx) + C₂xe^(mx)",
      explanation: "When a real root m is repeated, the two linearly independent solutions are e^(mx) and xe^(mx). The general solution is y(x) = C₁e^(mx) + C₂xe^(mx)."
    },
    {
      number: 105,
      question: "Simple Harmonic Motion (SHM) without damping is modeled by a...",
      grade: 10,
      options: ["First-order linear DE.", "Second-order homogeneous linear DE.", "Separable DE.", "Partial DE."],
      answer: "Second-order homogeneous linear DE.",
      explanation: "The equation for undamped SHM is m(d²x/dt²) + kx = 0, which is a second-order homogeneous linear differential equation with constant coefficients."
    },
    {
      number: 106,
      question: "The differential equation for Newton's Law of Cooling, dT/dt = -k(T - T_a), is...",
      grade: 10,
      options: ["Second-order", "Linear and Homogeneous", "Separable", "Not solvable"],
      answer: "Separable",
      explanation: "The variables can be separated as (1/(T-T_a))dT = -k dt, making it a first-order separable differential equation."
    },
    {
      number: 107,
      question: "A vector in 3D is given by v = 2i + j - 2k. What is its magnitude |v|?",
      grade: 10,
      options: ["√5", "9", "3", "1"],
      answer: "3",
      explanation: "|v| = √(v_x² + v_y² + v_z²) = √(2² + 1² + (-2)²) = √(4 + 1 + 4) = √9 = 3."
    },
    {
      number: 108,
      question: "Given points P₁(1, 2, 3) and P₂(4, 0, 5), find the vector P₁P₂.",
      grade: 10,
      options: ["<5, 2, 8>", "<-3, 2, -2>", "<3, -2, 2>", "<3, 2, 2>"],
      answer: "<3, -2, 2>",
      explanation: "P₁P₂ = r₂ - r₁ = <x₂-x₁, y₂-y₁, z₂-z₁> = <4-1, 0-2, 5-3> = <3, -2, 2>."
    },
    {
      number: 109,
      question: "If u = <1, -1, 2> and v = <3, 0, -1>, find u + v.",
      grade: 10,
      options: ["<4, -1, 1>", "<2, 1, 3>", "<-2, -1, 3>", "<4, 0, 1>"],
      answer: "<4, -1, 1>",
      explanation: "Add corresponding components: <1+3, -1+0, 2+(-1)> = <4, -1, 1>."
    },
    {
      number: 110,
      question: "The dot product (scalar product) of two vectors u and v results in a...",
      grade: 10,
      options: ["Vector", "Scalar", "Matrix", "Complex number"],
      answer: "Scalar",
      explanation: "The dot product u · v = u_x v_x + u_y v_y + u_z v_z, is a single number, i.e., a scalar."
    },
    {
      number: 111,
      question: "Find the dot product of u = i + 2j - k and v = 3i - j + k.",
      grade: 10,
      options: ["0", "<3, -2, -1>", "4", "-4"],
      answer: "0",
      explanation: "u · v = (1)(3) + (2)(-1) + (-1)(1) = 3 - 2 - 1 = 0."
    },
    {
      number: 112,
      question: "If the dot product of two non-zero vectors is zero, the vectors are...",
      grade: 10,
      options: ["Parallel", "Orthogonal (perpendicular)", "Equal in magnitude", "In the same direction"],
      answer: "Orthogonal (perpendicular)",
      explanation: "u · v = |u||v|cos(θ). For this to be zero with non-zero vectors, cos(θ) must be zero, which means θ = 90° (π/2 radians). The vectors are orthogonal."
    },
    {
      number: 113,
      question: "The cross product (vector product) of two 3D vectors results in a...",
      grade: 10,
      options: ["Scalar", "Number greater than 1", "Vector parallel to the original two.", "Vector perpendicular to the original two."],
      answer: "Vector perpendicular to the original two.",
      explanation: "The cross product u × v produces a new vector that is perpendicular to the plane containing both u and v."
    },
    {
      number: 114,
      question: "The magnitude of the cross product |u × v| is equal to...",
      grade: 10,
      options: ["The volume of the parallelepiped formed by u and v.", "The area of the parallelogram formed by u and v.", "The angle between u and v.", "The projection of u onto v."],
      answer: "The area of the parallelogram formed by u and v.",
      explanation: "Geometrically, |u × v| = |u||v|sin(θ) represents the area of the parallelogram with adjacent sides u and v."
    },
    {
      number: 115,
      question: "Find the cross product i × j.",
      grade: 10,
      options: ["0", "1", "k", "-k"],
      answer: "k",
      explanation: "Using the right-hand rule for the standard unit vectors i, j, k, i × j = k."
    },
    {
      number: 116,
      question: "If two non-zero vectors u and v are parallel, their cross product u × v is...",
      grade: 10,
      options: ["u", "v", "The zero vector (0)", "A vector with magnitude |u||v|"],
      answer: "The zero vector (0)",
      explanation: "If vectors are parallel, the angle θ between them is 0° or 180°. Since sin(0°) = sin(180°) = 0, the magnitude |u × v| = |u||v|sin(θ) is 0. Thus, the cross product is the zero vector."
    },
    {
      number: 117,
      question: "The equation r = <1,2,3> + t<4,5,6> represents a...",
      grade: 10,
      options: ["Plane in 3D", "Point in 3D", "Line in 3D", "Vector in 3D"],
      answer: "Line in 3D",
      explanation: "The form r = r₀ + tv is the vector equation of a line passing through the point with position vector r₀ = <1,2,3> and parallel to the direction vector v = <4,5,6>."
    },
    {
      number: 118,
      question: "In the scalar equation of a plane Ax + By + Cz = D, the vector <A, B, C> is...",
      grade: 10,
      options: ["A point on the plane.", "A direction vector in the plane.", "The position vector of the origin.", "A normal vector to the plane."],
      answer: "A normal vector to the plane.",
      explanation: "The coefficients A, B, and C of x, y, and z in the scalar equation of a plane form the components of a vector that is normal (perpendicular) to the plane."
    },
    {
      number: 119,
      question: "Torque (moment of a force) is calculated using the...",
      grade: 10,
      options: ["Dot product", "Cross product", "Scalar multiplication", "Vector addition"],
      answer: "Cross product",
      explanation: "The torque vector τ is defined as the cross product of the position vector r and the force vector F: τ = r × F."
    },
    {
      number: 120,
      question: "A matrix with an equal number of rows and columns is called a...",
      grade: 10,
      options: ["Row matrix", "Column matrix", "Square matrix", "Zero matrix"],
      answer: "Square matrix",
      explanation: "A square matrix is an n × n matrix, where the number of rows equals the number of columns."
    },
    {
      number: 121,
      question: "An identity matrix, I, is a square matrix with...",
      grade: 10,
      options: ["All elements equal to 1.", "1s on the main diagonal and 0s elsewhere.", "0s on the main diagonal and 1s elsewhere.", "All elements equal to 0."],
      answer: "1s on the main diagonal and 0s elsewhere.",
      explanation: "The identity matrix has a_ii = 1 and a_ij = 0 for i ≠ j. It acts as the multiplicative identity."
    },
    {
      number: 122,
      question: "If A and B are matrices, the sum A + B is defined only if...",
      grade: 10,
      options: ["They are both square.", "The number of columns in A equals the number of rows in B.", "They have the same order.", "They are both invertible."],
      answer: "They have the same order.",
      explanation: "Matrix addition is performed element-wise, so the matrices must have the exact same dimensions (order m × n)."
    },
    {
      number: 123,
      question: "If A is an m × p matrix and B is a p × n matrix, the product AB is an...",
      grade: 10,
      options: ["m × n matrix", "p × p matrix", "m × p matrix", "n × m matrix"],
      answer: "m × n matrix",
      explanation: "For the product AB to be defined, the inner dimensions must match (p). The resulting matrix has the outer dimensions, m × n."
    },
    {
      number: 124,
      question: "Let A = [[1, 2], [3, 4]]. Find 2A.",
      grade: 10,
      options: ["[[3, 4], [5, 6]]", "[[2, 4], [3, 4]]", "[[2, 2], [6, 6]]", "[[2, 4], [6, 8]]"],
      answer: "[[2, 4], [6, 8]]",
      explanation: "Scalar multiplication involves multiplying every element of the matrix by the scalar: 2A = [[2×1, 2×2], [2×3, 2×4]] = [[2, 4], [6, 8]]."
    },
    {
      number: 125,
      question: "Which of the following is generally true for matrix multiplication?",
      grade: 10,
      options: ["AB = BA", "A(B+C) = AB + AC", "If AB = 0, then A=0 or B=0.", "A + B = B + A"],
      answer: "A(B+C) = AB + AC",
      explanation: "Matrix multiplication is distributive over addition. However, it is not commutative (AB ≠ BA in general). Also, AB=0 does not imply A=0 or B=0. A+B = B+A is true but this is a property of addition, not multiplication."
    },
    {
      number: 126,
      question: "The transpose of a matrix A, denoted A^T, is found by...",
      grade: 10,
      options: ["Inverting the matrix.", "Making all elements negative.", "Interchanging its rows and columns.", "Multiplying it by itself."],
      answer: "Interchanging its rows and columns.",
      explanation: "The element in row i, column j of A becomes the element in row j, column i of A^T."
    },
    {
      number: 127,
      question: "Let A = [[1, 2], [3, 4]]. What is A^T?",
      grade: 10,
      options: ["[[1, 3], [2, 4]]", "[[4, 2], [3, 1]]", "[[-1, -2], [-3, -4]]", "[[1, 2], [3, 4]]"],
      answer: "[[1, 3], [2, 4]]",
      explanation: "The first row [1, 2] becomes the first column. The second row [3, 4] becomes the second column."
    },
    {
      number: 128,
      question: "A square matrix A is invertible (has an inverse) if and only if...",
      grade: 10,
      options: ["It is a square matrix.", "All its elements are non-zero.", "Its transpose is equal to itself.", "Its determinant is non-zero."],
      answer: "Its determinant is non-zero.",
      explanation: "A matrix that has a non-zero determinant is called non-singular, and only non-singular matrices have an inverse."
    },
    {
      number: 129,
      question: "Find the determinant of the matrix A = [[5, 2], [3, 1]].",
      grade: 10,
      options: ["1", "-1", "11", "-11"],
      answer: "-1",
      explanation: "For a 2x2 matrix [[a,b],[c,d]], the determinant is ad - bc. So, det(A) = (5)(1) - (2)(3) = 5 - 6 = -1."
    },
    {
      number: 130,
      question: "Find the inverse of the matrix A = [[3, 1], [2, 1]].",
      grade: 10,
      options: ["[[1, -1], [-2, 3]]", "[[3, -1], [-2, 1]]", "[[1, 1], [2, 3]]", "[[-3, 1], [2, -1]]"],
      answer: "[[1, -1], [-2, 3]]",
      explanation: "det(A) = (3)(1) - (1)(2) = 1.\nA⁻¹ = (1/det(A)) [[d, -b], [-c, a]] = (1/1) [[1, -1], [-2, 3]] = [[1, -1], [-2, 3]]."
    },
    {
      number: 131,
      question: "The solution to the matrix equation AX = B, where A is invertible, is given by X = ?",
      grade: 10,
      options: ["BA⁻¹", "A⁻¹B", "A B⁻¹", "B⁻¹A"],
      answer: "A⁻¹B",
      explanation: "Multiply both sides of AX = B from the left by A⁻¹: A⁻¹(AX) = A⁻¹B => (A⁻¹A)X = A⁻¹B => IX = A⁻¹B => X = A⁻¹B."
    },
    {
      number: 132,
      question: "For which value of k is the matrix [[2, k], [4, 6]] singular?",
      grade: 10,
      options: ["12", "6", "3", "-3"],
      answer: "3",
      explanation: "A matrix is singular if its determinant is zero.\ndet = (2)(6) - (k)(4) = 12 - 4k.\nSet det = 0 => 12 - 4k = 0 => 4k = 12 => k = 3."
    },
    {
      number: 133,
      question: "Cramer's Rule can be used to solve a system of linear equations AX=B only if...",
      grade: 10,
      options: ["B is the zero vector.", "A is a 2x2 matrix.", "A has a non-zero determinant.", "The system has infinite solutions."],
      answer: "A has a non-zero determinant.",
      explanation: "Cramer's Rule involves dividing by the determinant of the coefficient matrix A (D). Therefore, it only works if D ≠ 0."
    },
    {
      number: 134,
      question: "Which of the following is NOT an axiom for a vector space?",
      grade: 10,
      options: ["u + v = v + u (Commutativity of addition)", "There exists a zero vector 0.", "c(uv) = (cu)v (Associativity of vector multiplication)", "c(u + v) = cu + cv (Distributivity)"],
      answer: "c(uv) = (cu)v (Associativity of vector multiplication)",
      explanation: "Vector-vector multiplication (uv) is not a required operation in the definition of a vector space. The axioms concern vector addition and scalar-vector multiplication."
    },
    {
      number: 135,
      question: "In the vector space R³, which of the following is a subspace?",
      grade: 10,
      options: ["The set of all vectors <x, y, 1>.", "A line not passing through the origin.", "A plane passing through the origin.", "The first octant (x≥0, y≥0, z≥0)."],
      answer: "A plane passing through the origin.",
      explanation: "A subspace must contain the zero vector and be closed under addition and scalar multiplication. A plane through the origin (<0,0,0>) satisfies these properties. Option A does not contain the zero vector. Option B does not contain the zero vector. Option D is not closed under scalar multiplication by negative numbers."
    },
    {
      number: 136,
      question: "A set of vectors {v₁, v₂, ..., v_k} is linearly independent if...",
      grade: 10,
      options: ["At least one vector can be written as a combination of others.", "All vectors are non-zero.", "The equation c₁v₁ + ... + c_k v_k = 0 has only the trivial solution (all cᵢ=0).", "The equation c₁v₁ + ... + c_k v_k = 0 has a non-trivial solution."],
      answer: "The equation c₁v₁ + ... + c_k v_k = 0 has only the trivial solution (all cᵢ=0).",
      explanation: "This is the definition of linear independence. It means no vector is redundant or can be formed from the others in the set."
    },
    {
      number: 137,
      question: "Which of the following sets of vectors in R² is linearly dependent?",
      grade: 10,
      options: ["{<1, 0>, <0, 1>}", "{<1, 1>, <1, -1>}", "{<1, 2>, <2, 4>}", "{<1, 0>}"],
      answer: "{<1, 2>, <2, 4>}",
      explanation: "The second vector is a scalar multiple of the first: <2, 4> = 2 * <1, 2>. Therefore, they are linearly dependent. The equation c₁<1,2> + c₂<2,4> = <0,0> has a non-trivial solution like c₁=2, c₂=-1."
    },
    {
      number: 138,
      question: "A set of vectors B is a basis for a vector space V if B...",
      grade: 10,
      options: ["Spans V and is linearly dependent.", "Is linearly independent and spans V.", "Contains the zero vector and spans V.", "Contains more vectors than the dimension of V."],
      answer: "Is linearly independent and spans V.",
      explanation: "A basis has two fundamental properties: its vectors are linearly independent (no redundancy), and they span the entire space (every vector can be formed from them)."
    },
    {
      number: 139,
      question: "What is the dimension of the vector space R⁴?",
      grade: 10,
      options: ["2", "3", "4", "n"],
      answer: "4",
      explanation: "The dimension of Rⁿ is n. The standard basis {<1,0,0,0>, <0,1,0,0>, <0,0,1,0>, <0,0,0,1>} has 4 vectors."
    },
    {
      number: 140,
      question: "For a square matrix A, an eigenvector v satisfies the equation...",
      grade: 10,
      options: ["Av = 0", "Av = v", "Av = λv for some scalar λ", "vA = λv for some scalar λ"],
      answer: "Av = λv for some scalar λ",
      explanation: "This is the definition of an eigenvector v and its corresponding eigenvalue λ. The action of the matrix on the vector only scales the vector, it does not change its direction."
    },
    {
      number: 141,
      question: "The eigenvalues λ of a matrix A are found by solving the...",
      grade: 10,
      options: ["Equation Av = 0.", "Characteristic equation det(A - λI) = 0.", "Equation Ax = b.", "Equation det(A) = 0."],
      answer: "Characteristic equation det(A - λI) = 0.",
      explanation: "For the equation (A - λI)v = 0 to have a non-zero solution for v (the eigenvector), the matrix (A - λI) must be singular, meaning its determinant is zero."
    },
    {
      number: 142,
      question: "If P(A)=0.5, P(B)=0.4, and P(A ∩ B)=0.2, what is the conditional probability P(A|B)?",
      grade: 10,
      options: ["0.5", "0.4", "0.25", "0.8"],
      answer: "0.5",
      explanation: "P(A|B) = P(A ∩ B) / P(B) = 0.2 / 0.4 = 0.5."
    },
    {
      number: 143,
      question: "If events A and B are independent, which of the following is true?",
      grade: 10,
      options: ["P(A ∩ B) = P(A) + P(B)", "P(A|B) = P(B)", "P(A ∩ B) = 0", "P(A|B) = P(A)"],
      answer: "P(A|B) = P(A)",
      explanation: "For independent events, the occurrence of one event does not affect the probability of the other. Thus, the probability of A given B is just the probability of A. This leads to the rule P(A ∩ B) = P(A)P(B)."
    },
    {
      number: 144,
      question: "A variable whose value is a numerical outcome of a random phenomenon is called a...",
      grade: 10,
      options: ["Statistic", "Parameter", "Random variable", "Sample"],
      answer: "Random variable",
      explanation: "This is the definition of a random variable."
    },
    {
      number: 145,
      question: "Which of the following is NOT a condition for a Binomial distribution?",
      grade: 10,
      options: ["A fixed number of trials.", "Trials are independent.", "The probability of success changes with each trial.", "There are only two outcomes for each trial."],
      answer: "The probability of success changes with each trial.",
      explanation: "A key condition for the Binomial distribution is that the probability of success, p, must be constant for each trial."
    },
    {
      number: 146,
      question: "A fair coin is tossed 4 times. What is the probability of getting exactly 3 heads? (Use Binomial dist.)",
      grade: 10,
      options: ["1/16", "3/16", "4/16 (or 1/4)", "6/16 (or 3/8)"],
      answer: "4/16 (or 1/4)",
      explanation: "Use Bin(n=4, p=0.5). We want P(X=3).\nP(X=3) = ⁴C₃ (0.5)³ (0.5)⁴⁻³ = 4 * (0.125) * (0.5) = 0.25 = 1/4 = 4/16."
    },
    {
      number: 147,
      question: "What is the mean of a binomial distribution with n=10 and p=0.3?",
      grade: 10,
      options: ["3", "0.3", "7", "2.1"],
      answer: "3",
      explanation: "The mean of a binomial distribution is μ = np = 10 * 0.3 = 3."
    },
    {
      number: 148,
      question: "The Poisson distribution is often used to model...",
      grade: 10,
      options: ["The height of students.", "The outcome of a single coin toss.", "The number of successes in a fixed number of trials.", "The number of rare events in a fixed interval."],
      answer: "The number of rare events in a fixed interval.",
      explanation: "The Poisson distribution models the number of events occurring in a fixed interval of time or space, especially when the events are rare."
    },
    {
      number: 149,
      question: "The average number of typos on a page is 2. What is the probability of having exactly 1 typo on a page? (Use Poisson dist.)",
      grade: 10,
      options: ["2e⁻²", "e⁻²/2", "e⁻²", "4e⁻²"],
      answer: "2e⁻²",
      explanation: "Use Po(λ=2). We want P(X=1).\nP(X=1) = (e⁻² * 2¹) / 1! = 2e⁻²."
    },
    {
      number: 150,
      question: "A key property of the Poisson distribution is that its mean is equal to its...",
      grade: 10,
      options: ["Standard deviation", "Median", "Variance", "Mode"],
      answer: "Variance",
      explanation: "For a Poisson distribution with parameter λ, both the mean (E(X)) and the variance (Var(X)) are equal to λ."
    },
    {
      number: 151,
      question: "For a continuous random variable, the probability of it taking any single specific value, P(X = c), is...",
      grade: 10,
      options: ["1", "0.5", "0", "Dependent on the function."],
      answer: "0",
      explanation: "For a continuous random variable, probability is represented by area under a curve. The area at a single point is zero. Therefore, P(X=c) = 0."
    },
    {
      number: 152,
      question: "Which distribution is characterized by a 'bell-shaped' symmetric curve?",
      grade: 10,
      options: ["Poisson", "Exponential", "Binomial", "Normal"],
      answer: "Normal",
      explanation: "The Normal (or Gaussian) distribution is famous for its symmetric, bell-shaped probability density function."
    },
    {
      number: 153,
      question: "What is the Z-score for a value X=65 from a normal distribution with mean μ=50 and standard deviation σ=5?",
      grade: 10,
      options: ["3", "15", "-3", "1.5"],
      answer: "3",
      explanation: "Z = (X - μ) / σ = (65 - 50) / 5 = 15 / 5 = 3."
    },
    {
      number: 154,
      question: "The Exponential distribution is often used to model...",
      grade: 10,
      options: ["Test scores.", "The number of defects.", "Waiting times between events.", "A person's height."],
      answer: "Waiting times between events.",
      explanation: "The exponential distribution describes the time between events in a Poisson process. It is a common model for lifetimes or waiting times."
    },
    {
      number: 155,
      question: "What is the Expected Value of a random variable?",
      grade: 10,
      options: ["Its most likely value.", "The long-run average value.", "The middle value.", "The spread of the values."],
      answer: "The long-run average value.",
      explanation: "The expected value (or mean) is the average value one would expect if the random experiment were repeated many times."
    },
    {
      number: 156,
      question: "If Var(X) = 9, what is the standard deviation of X?",
      grade: 10,
      options: ["3", "81", "4.5", "18"],
      answer: "3",
      explanation: "The standard deviation is the square root of the variance. σ = √Var(X) = √9 = 3."
    },
    {
      number: 157,
      question: "A numerical characteristic of a population, like the population mean μ, is called a...",
      grade: 10,
      options: ["Statistic", "Sample", "Parameter", "Variable"],
      answer: "Parameter",
      explanation: "Parameters (μ, σ, p) describe populations, while statistics (x̄, s, p̂) describe samples."
    },
    {
      number: 158,
      question: "The Central Limit Theorem (CLT) is important because it states that for a large sample size, the sampling distribution of the sample mean is...",
      grade: 10,
      options: ["Always the same as the population distribution.", "Skewed to the right.", "Approximately normal.", "Uniform."],
      answer: "Approximately normal.",
      explanation: "The CLT allows us to use normal distribution theory for inference on the mean, even if the original population is not normal, provided n is large enough (usually n ≥ 30)."
    },
    {
      number: 159,
      question: "If the population standard deviation is σ, the standard error of the mean (SEM) is...",
      grade: 10,
      options: ["σ", "σ²", "σ/n", "σ/√n"],
      answer: "σ/√n",
      explanation: "The standard deviation of the sampling distribution of the sample mean (x̄) is called the standard error, and it is equal to the population standard deviation divided by the square root of the sample size."
    },
    {
      number: 160,
      question: "A 95% confidence interval is a range of values that...",
      grade: 10,
      options: ["Has a 95% probability of containing the sample mean x̄.", "Contains 95% of the population data.", "Will contain the true population parameter in 95% of repeated samples.", "Has a 5% chance of being wrong."],
      answer: "Will contain the true population parameter in 95% of repeated samples.",
      explanation: "This is the frequentist interpretation of a confidence interval. It's a statement about the reliability of the method, not about a single calculated interval."
    },
    {
      number: 161,
      question: "For a confidence interval for the mean with σ unknown and n < 30, which distribution should be used?",
      grade: 10,
      options: ["Normal (Z)", "Student's t", "Binomial", "Chi-Square"],
      answer: "Student's t",
      explanation: "When the population standard deviation σ is unknown and the sample size is small, the t-distribution is used to account for the extra uncertainty from estimating σ with the sample standard deviation s."
    },
    {
      number: 162,
      question: "In hypothesis testing, the statement of 'no effect' or 'no difference' is called the...",
      grade: 10,
      options: ["Alternative hypothesis (H₁)", "Null hypothesis (H₀)", "Research hypothesis", "Type I error"],
      answer: "Null hypothesis (H₀)",
      explanation: "The null hypothesis (H₀) is the default assumption, a statement of status quo or no effect, which we seek to find evidence against."
    },
    {
      number: 163,
      question: "A 'p-value' in hypothesis testing represents the probability of...",
      grade: 10,
      options: ["The null hypothesis being true.", "The alternative hypothesis being true.", "Committing a Type I error.", "Observing data as extreme as or more extreme than the sample data, if the null hypothesis is true."],
      answer: "Observing data as extreme as or more extreme than the sample data, if the null hypothesis is true.",
      explanation: "The p-value measures the strength of the evidence against the null hypothesis. A small p-value means the observed data is unlikely under the null hypothesis."
    },
    {
      number: 164,
      question: "If a p-value is 0.03 and the significance level α is 0.05, what is the decision?",
      grade: 10,
      options: ["Reject H₀", "Fail to reject H₀", "Accept H₁", "The test is inconclusive."],
      answer: "Reject H₀",
      explanation: "The rule is: if the p-value is less than or equal to α, reject the null hypothesis. Since 0.03 ≤ 0.05, we reject H₀."
    },
    {
      number: 165,
      question: "The Chi-Square (χ²) test for independence is used to test the association between...",
      grade: 10,
      options: ["Two quantitative variables.", "A sample mean and a population mean.", "Two categorical variables.", "Two sample proportions."],
      answer: "Two categorical variables.",
      explanation: "The χ² test for independence uses a contingency table to determine if there is a statistically significant association between two categorical variables (e.g., gender and political preference)."
    },
    {
      number: 166,
      question: "A Pearson correlation coefficient (r) of -0.9 indicates a...",
      grade: 10,
      options: ["Strong positive linear relationship.", "Strong negative linear relationship.", "Weak negative linear relationship.", "No relationship."],
      answer: "Strong negative linear relationship.",
      explanation: "The sign (-) indicates a negative relationship, and the value (-0.9) being close to -1 indicates that the linear relationship is strong."
    },
    {
      number: 167,
      question: "The coefficient of determination, r², measures...",
      grade: 10,
      options: ["The strength of the correlation.", "The proportion of variance in y explained by x.", "The probability that the correlation is significant.", "The slope of the regression line."],
      answer: "The proportion of variance in y explained by x.",
      explanation: "r² represents the percentage of the variability in the dependent variable (y) that can be accounted for by the linear relationship with the independent variable (x)."
    },
    {
      number: 168,
      question: "If the least-squares regression line is ŷ = 10 + 2x, what is the predicted value of y when x=5?",
      grade: 10,
      options: ["17", "20", "12", "50"],
      answer: "20",
      explanation: "Substitute x=5 into the equation: ŷ = 10 + 2(5) = 10 + 10 = 20."
    },
    {
      number: 169,
      question: "What is the standard error of the mean for a sample of size n=100 from a population with σ=20?",
      grade: 10,
      options: ["2", "0.2", "20", "5"],
      answer: "2",
      explanation: "SEM = σ/√n = 20/√100 = 20/10 = 2."
    },
    {
      number: 170,
      question: "If a 95% confidence interval for a mean is (22.5, 27.5), the sample mean x̄ is...",
      grade: 10,
      options: ["22.5", "27.5", "5", "25"],
      answer: "25",
      explanation: "The sample mean is always the center of the confidence interval. The midpoint of (22.5, 27.5) is (22.5 + 27.5) / 2 = 50 / 2 = 25."
    },
    {
      number: 171,
      question: "Evaluate (1 - i) / (1 + i).",
      grade: 10,
      options: ["1", "i", "-1", "-i"],
      answer: "-i",
      explanation: "Multiply top and bottom by (1-i): [(1-i)(1-i)]/[(1+i)(1-i)] = [1-2i+i²]/[1²+1²] = [1-2i-1]/2 = -2i/2 = -i."
    },
    {
      number: 172,
      question: "Find the constant term in the expansion of (x + 2/x)⁴.",
      grade: 10,
      options: ["6", "8", "16", "24"],
      answer: "24",
      explanation: "The general term is T_(r+1) = ⁴Cᵣ x⁴⁻ʳ (2/x)ʳ = ⁴Cᵣ 2ʳ x⁴⁻²ʳ. For the constant term, the power of x is 0. So 4-2r = 0 => r=2. The term is T₃ = ⁴C₂ 2² = 6 * 4 = 24."
    },
    {
      number: 173,
      question: "What is the sum of the roots of the polynomial 2x³ - 6x² + 5x - 1 = 0?",
      grade: 10,
      options: ["-6", "6", "3", "-3"],
      answer: "3",
      explanation: "For a polynomial aₙxⁿ + ... + a₀ = 0, the sum of the roots is -aₙ₋₁/aₙ. Here, it is -(-6)/2 = 6/2 = 3."
    },
    {
      number: 174,
      question: "Solve for x: e^(2x) = 5.",
      grade: 10,
      options: ["x = ln(5) / 2", "x = ln(2.5)", "x = 2 ln(5)", "x = log₂(5)"],
      answer: "x = ln(5) / 2",
      explanation: "Take the natural log of both sides: ln(e^(2x)) = ln(5) => 2x = ln(5) => x = ln(5) / 2."
    },
    {
      number: 175,
      question: "If f(x) = ln(cos x), find f'(x).",
      grade: 10,
      options: ["-tan(x)", "tan(x)", "-sin(x) / ln(cos x)", "1/cos(x)"],
      answer: "-tan(x)",
      explanation: "Using the chain rule, d/dx(ln(u)) = u'/u. Let u = cos x, u' = -sin x. f'(x) = (-sin x) / (cos x) = -tan(x)."
    },
    {
      number: 176,
      question: "Evaluate ∫[0,π/2] cos(x) dx.",
      grade: 10,
      options: ["0", "-1", "1", "π/2"],
      answer: "1",
      explanation: "∫ cos(x) dx = sin(x). Evaluating from 0 to π/2: [sin(x)]_[0,π/2] = sin(π/2) - sin(0) = 1 - 0 = 1."
    },
    {
      number: 177,
      question: "Find the general solution to dy/dx = y/x.",
      grade: 10,
      options: ["y = x + C", "y = Cx", "y = C/x", "y = e^x + C"],
      answer: "y = Cx",
      explanation: "Separate variables: (1/y)dy = (1/x)dx. Integrate both sides: ln|y| = ln|x| + C₁. Exponentiate both sides: |y| = e^(ln|x|+C₁) = e^(ln|x|) * e^(C₁) = |x| * A. So, y = ±Ax = Cx."
    },
    {
      number: 178,
      question: "Find the general solution to y'' - 4y' + 4y = 0.",
      grade: 10,
      options: ["y = C₁e^(2x) + C₂e^(-2x)", "y = (C₁ + C₂x)e^(2x)", "y = e^(2x)(C₁cos(2x) + C₂sin(2x))", "y = C₁e^(4x) + C₂"],
      answer: "y = (C₁ + C₂x)e^(2x)",
      explanation: "Characteristic equation is m² - 4m + 4 = 0, which is (m-2)² = 0. This gives a repeated real root m=2. The solution is of the form y = (C₁ + C₂x)e^(mx)."
    },
    {
      number: 179,
      question: "Find the angle θ between the vectors u = <1, 1, 0> and v = <1, 0, 1>.",
      grade: 10,
      options: ["30°", "45°", "60°", "90°"],
      answer: "60°",
      explanation: "cos(θ) = (u·v)/(|u||v|). u·v = 1*1+1*0+0*1 = 1. |u|=√2, |v|=√2. cos(θ)=1/(√2√2) = 1/2. So θ = arccos(1/2) = 60° (or π/3)."
    },
    {
      number: 180,
      question: "Find the area of the parallelogram with adjacent sides u=i+j and v=j+k.",
      grade: 10,
      options: ["√3", "3", "1", "2"],
      answer: "√3",
      explanation: "Area = |u×v|. u×v = | i j k | | 1 1 0 | | 0 1 1 | = i(1-0) - j(1-0) + k(1-0) = i-j+k. Area = |<1,-1,1>| = √(1²+(-1)²+1²) = √3."
    },
    {
      number: 181,
      question: "Find the determinant of A = [[1, 2, 3], [0, 4, 5], [0, 0, 6]].",
      grade: 10,
      options: ["0", "12", "10", "24"],
      answer: "24",
      explanation: "The determinant of a triangular matrix is the product of its main diagonal elements. det(A) = 1 × 4 × 6 = 24."
    },
    {
      number: 182,
      question: "If a discrete random variable X has P(X=1)=0.3 and P(X=2)=0.7, find E(X).",
      grade: 10,
      options: ["1", "0.5", "1.7", "2.3"],
      answer: "1.7",
      explanation: "E(X) = Σ xP(X=x) = (1)(0.3) + (2)(0.7) = 0.3 + 1.4 = 1.7."
    },
    {
      number: 183,
      question: "Find a first-order approximation for 1 / √(1.04).",
      grade: 10,
      options: ["0.98", "1.02", "0.96", "1.04"],
      answer: "0.98",
      explanation: "1/√(1.04) = (1 + 0.04)⁻¹/². Using (1+x)ⁿ ≈ 1+nx.\n≈ 1 + (-1/2)(0.04) = 1 - 0.02 = 0.98."
    },
    {
      number: 184,
      question: "What is the principal argument of the complex number z = -5?",
      grade: 10,
      options: ["0", "π/2", "π", "-π/2"],
      answer: "π",
      explanation: "The complex number z = -5 lies on the negative real axis. The angle it makes with the positive real axis is π radians (or 180°)."
    },
    {
      number: 185,
      question: "Solve for x: log₅(x-1) = 2.",
      grade: 10,
      options: ["11", "9", "26", "3"],
      answer: "26",
      explanation: "Rewriting in exponential form: x-1 = 5² = 25. So, x = 26."
    },
    {
      number: 186,
      question: "Which equation has roots 1 and 2?",
      grade: 10,
      options: ["x² + 3x + 2 = 0", "x² - 3x + 2 = 0", "x² + 2x - 3 = 0", "x² - 2x - 3 = 0"],
      answer: "x² - 3x + 2 = 0",
      explanation: "A polynomial with roots r₁ and r₂ is (x-r₁)(x-r₂) = 0. So, (x-1)(x-2) = x² - 2x - x + 2 = x² - 3x + 2 = 0."
    },
    {
      number: 187,
      question: "Find the derivative of y = tan(3x).",
      grade: 10,
      options: ["3 sec²(3x)", "sec²(3x)", "3 tan(3x) sec(3x)", "3 cot(3x)"],
      answer: "3 sec²(3x)",
      explanation: "Chain rule: derivative of tan(u) is sec²(u). Here u=3x, du/dx=3. So, y' = sec²(3x) * 3 = 3 sec²(3x)."
    },
    {
      number: 188,
      question: "Find ∫ (2x+1)³ dx.",
      grade: 10,
      options: ["(2x+1)⁴/4 + C", "(2x+1)⁴/8 + C", "6(2x+1)² + C", "3(2x+1)² + C"],
      answer: "(2x+1)⁴/8 + C",
      explanation: "Use u-substitution. Let u = 2x+1, so du=2dx, or dx=du/2.\n∫ u³(du/2) = (1/2)∫u³du = (1/2)(u⁴/4) + C = u⁴/8 + C = (2x+1)⁴/8 + C."
    },
    {
      number: 189,
      question: "Find a normal vector to the plane 3x - y + 2z = 5.",
      grade: 10,
      options: ["<3, -1, 2>", "<3, 1, 2>", "<5, 0, 0>", "<1, 1, 1>"],
      answer: "<3, -1, 2>",
      explanation: "The coefficients of x, y, and z in the scalar equation of a plane give the components of a normal vector. So n = <3, -1, 2>."
    },
    {
      number: 190,
      question: "What is the value of ⁸C₃?",
      grade: 10,
      options: ["24", "40", "56", "120"],
      answer: "56",
      explanation: "⁸C₃ = 8! / (3! 5!) = (8*7*6) / (3*2*1) = 8 * 7 = 56."
    },
    {
      number: 191,
      question: "The vector equation of a line is r = <1,-2> + t<3,4>. A point on this line is:",
      grade: 10,
      options: ["(3, 4)", "(1, -2)", "(4, 2)", "(-2, -6)"],
      answer: "(1, -2)",
      explanation: "The equation is r = r₀ + tv, where r₀ is the position vector of a point on the line. r₀ = <1, -2>, so (1, -2) is a point on the line (at t=0). (4,2) is another point at t=1."
    },
    {
      number: 192,
      question: "Given the roots of m² + 9 = 0 are m = ±3i, the general solution to the DE y''+9y=0 is:",
      grade: 10,
      options: ["y = C₁e^(3x) + C₂e^(-3x)", "y = (C₁ + C₂x)e^(3x)", "y = C₁cos(3x) + C₂sin(3x)", "y = e^(x)(C₁cos(3x) + C₂sin(3x))"],
      answer: "y = C₁cos(3x) + C₂sin(3x)",
      explanation: "The roots are complex conjugates of the form α ± βi, with α=0 and β=3. The general solution is y = e^(αx)(C₁cos(βx) + C₂sin(βx)) = e⁰(C₁cos(3x) + C₂sin(3x)) = C₁cos(3x) + C₂sin(3x)."
    },
    {
      number: 193,
      question: "The integral of any probability density function (PDF) over its entire domain is...",
      grade: 10,
      options: ["0", "1", "Infinity", "Dependent on the function."],
      answer: "1",
      explanation: "A fundamental property of a PDF is that the total area under the curve, representing the total probability of all possible outcomes, must equal 1."
    },
    {
      number: 194,
      question: "If you reject a true null hypothesis, you have made a...",
      grade: 10,
      options: ["Type I error", "Type II error", "Correct decision", "Standard error"],
      answer: "Type I error",
      explanation: "A Type I error is the mistake of rejecting the null hypothesis when it is in fact true. The probability of this is the significance level, α."
    },
    {
      number: 195,
      question: "If A = [[2,1],[0,3]] and B = [[1,0],[2,2]], find AB.",
      grade: 10,
      options: ["[[4,2],[6,6]]", "[[3,1],[2,5]]", "[[2,0],[0,6]]", "[[2,2],[4,6]]"],
      answer: "[[4,2],[6,6]]",
      explanation: "Row 1 of A * Col 1 of B = 2*1+1*2 = 4. Row 1 of A * Col 2 of B = 2*0+1*2 = 2. Row 2 of A * Col 1 of B = 0*1+3*2 = 6. Row 2 of A * Col 2 of B = 0*0+3*2 = 6. Result: [[4,2],[6,6]]."
    },
    {
      number: 196,
      question: "The graph of y = |z| = 5 in the Argand diagram is a...",
      grade: 10,
      options: ["Point at (5,0)", "Vertical line at x=5", "Circle with center at the origin and radius 5.", "Horizontal line at y=5"],
      answer: "Circle with center at the origin and radius 5.",
      explanation: "|z| represents the distance of the point z from the origin. The set of all points that are a distance of 5 from the origin forms a circle with radius 5."
    },
    {
      number: 197,
      question: "Which of the following is equal to z-z̅, if z = a+bi and b≠0?",
      grade: 10,
      options: ["2a", "2b", "2bi", "0"],
      answer: "2bi",
      explanation: "z-z̅ = (a+bi) - (a-bi) = a - a + bi - (-bi) = 2bi. This is a purely imaginary number."
    },
    {
      number: 198,
      question: "For the polynomial f(x)=x³-x, find the values of x where f(x)=0.",
      grade: 10,
      options: ["0", "0, 1", "1, -1", "0, 1, -1"],
      answer: "0, 1, -1",
      explanation: "Set x³-x = 0. Factor out x: x(x²-1) = 0. Factor difference of squares: x(x-1)(x+1) = 0. The roots are x=0, x=1, and x=-1."
    },
    {
      number: 199,
      question: "lim (x→∞) [3x² + 2x - 1] / [5x² - 4]",
      grade: 10,
      options: ["3/5", "1/4", "0", "∞"],
      answer: "3/5",
      explanation: "For limits at infinity of rational functions where degrees are equal, the limit is the ratio of the leading coefficients. Limit = 3/5."
    },
    {
      number: 200,
      question: "Find the average value of f(x)=x on the interval [0, 4].",
      grade: 10,
      options: ["2", "4", "8", "1"],
      answer: "2",
      explanation: "Average value = (1/(b-a)) ∫[a,b] f(x)dx.\n= (1/4) ∫[0,4] x dx = (1/4) [x²/2]_[0,4] = (1/4) [(4²/2)-(0²/2)] = (1/4) * (16/2) = (1/4)*8 = 2."
    },
    {
      number: 201,
      question: "Which operation on vectors is NOT commutative?",
      grade: 11,
      options: ["Vector Addition", "Dot Product", "Cross Product", "Scalar Multiplication"],
      answer: "Cross Product",
      explanation: "The cross product is anti-commutative: u × v = -(v × u). The direction is reversed."
    },
    {
      number: 202,
      question: "The first three terms of a Maclaurin series for f(x) are 1 - 2x + 2x². What is f''(0)?",
      grade: 11,
      options: ["2", "4", "-2", "1"],
      answer: "4",
      explanation: "The general term for a Maclaurin series is (f^(k)(0)/k!) x^k. The x² term is f''(0)x²/2!. So, f''(0)/2! = 2. This means f''(0)/2 = 2, so f''(0) = 4."
    },
    {
      number: 203,
      question: "Find (cos θ + i sin θ)⁻¹.",
      grade: 11,
      options: ["cos θ + i sin θ", "cos(-θ) + i sin(-θ)", "sin θ + i cos θ", "-cos θ - i sin θ"],
      answer: "cos(-θ) + i sin(-θ)",
      explanation: "By De Moivre's Theorem for integer powers n, [cosθ + isinθ]ⁿ = cos(nθ) + isin(nθ). For n=-1, this is cos(-θ) + i sin(-θ). This is also the conjugate, cosθ - isinθ."
    },
    {
      number: 204,
      question: "For what value of 'a' are the vectors <2, -3, 1> and <a, 6, -2> parallel?",
      grade: 11,
      options: ["4", "-4", "2", "-2"],
      answer: "-4",
      explanation: "Two vectors are parallel if one is a scalar multiple of the other. The ratio of components must be constant. a/2 = 6/-3 = -2/-1. From the y-components, the ratio is 6/(-3) = -2. So, a/2 = -2 => a = -4."
    },
    {
      number: 205,
      question: "The general term in the binomial expansion of (1+x)ⁿ is given by:",
      grade: 11,
      options: ["nCr xʳ", "nCr xⁿ⁻ʳ", "(n r) xʳ", "(n r) xⁿ"],
      answer: "nCr xʳ",
      explanation: "For the expansion (a+x)ⁿ, the general term is T_r+1 = nCr aⁿ⁻ʳ xʳ. When a=1, this simplifies to nCr xʳ. Note that (n r) is another notation for nCr."
    },
    {
      number: 206,
      question: "In polynomial division of P(x) by D(x), if the remainder R(x)=0, then:",
      grade: 11,
      options: ["P(x) is a factor of D(x)", "D(x) is a factor of P(x)", "P(x) = D(x)", "deg(P(x)) < deg(D(x))"],
      answer: "D(x) is a factor of P(x)",
      explanation: "If the remainder is zero, the division is exact, which means the divisor D(x) is a factor of the dividend P(x). P(x) = D(x)Q(x)."
    },
    {
      number: 207,
      question: "Which equation represents exponential decay?",
      grade: 11,
      options: ["y = 100(1.05)^t", "y = 50e^(0.02t)", "y = 75(0.8)^t", "y = log(t)"],
      answer: "y = 75(0.8)^t",
      explanation: "Exponential decay occurs when the base b in y=ab^t is between 0 and 1. Here, 0.8 is between 0 and 1."
    },
    {
      number: 208,
      question: "The derivative of a function at a point gives the...",
      grade: 11,
      options: ["Area under the curve at that point.", "Slope of the secant line through that point.", "Value of the function at that point.", "Slope of the tangent line at that point."],
      answer: "Slope of the tangent line at that point.",
      explanation: "This is the primary geometric interpretation of the derivative."
    },
    {
      number: 209,
      question: "If ∫[1,3] f(x)dx = 5 and ∫[3,6] f(x)dx = 2, find ∫[1,6] f(x)dx.",
      grade: 11,
      options: ["3", "7", "10", "Cannot be determined"],
      answer: "7",
      explanation: "Using the additivity property of integrals: ∫[1,6]f(x)dx = ∫[1,3]f(x)dx + ∫[3,6]f(x)dx = 5 + 2 = 7."
    },
    {
      number: 210,
      question: "Find the equation of the plane passing through the point (1,2,3) with a normal vector <4,5,6>.",
      grade: 11,
      options: ["x + 2y + 3z = 456", "4x + 5y + 6z = 14", "4x + 5y + 6z = 32", "4(x-1) + 5(y-2) + 6(z-3) = 1"],
      answer: "4x + 5y + 6z = 32",
      explanation: "The equation of a plane is n · (r - r₀) = 0, or A(x-x₀)+B(y-y₀)+C(z-z₀)=0.\n4(x-1) + 5(y-2) + 6(z-3) = 0 => 4x-4+5y-10+6z-18=0 => 4x+5y+6z = 32."
    },
    {
      number: 211,
      question: "What is the value of the determinant of a 3x3 identity matrix?",
      grade: 11,
      options: ["0", "1", "3", "-1"],
      answer: "1",
      explanation: "The determinant of any identity matrix (or any triangular matrix) is the product of the elements on its main diagonal. det(I₃) = 1 * 1 * 1 = 1."
    },
    {
      number: 212,
      question: "A sample statistic is an unbiased estimator of a population parameter if...",
      grade: 11,
      options: ["The mean of its sampling distribution is equal to the parameter.", "Its standard error is zero.", "Its value is always equal to the parameter.", "Its distribution is normal."],
      answer: "The mean of its sampling distribution is equal to the parameter.",
      explanation: "This is the definition of an unbiased estimator. For example, x̄ is an unbiased estimator of μ because E(x̄) = μ."
    },
    {
      number: 213,
      question: "What is the condition of validity for the binomial expansion of (2+3x)⁻²?",
      grade: 11,
      options: ["|x| < 1", "|x| < 2/3", "|x| < 3/2", "|x| > 2/3"],
      answer: "|x| < 2/3",
      explanation: "First, factor out the 2: 2⁻²(1 + 3x/2)⁻². The expansion is valid if |3x/2| < 1 => |x| < 2/3."
    },
    {
      number: 214,
      question: "If |z| = r, what is |z̅|?",
      grade: 11,
      options: ["r", "-r", "1/r", "r²"],
      answer: "r",
      explanation: "|z| = √(a²+b²) and |z̅| = |a-bi| = √(a²+(-b)²)=√(a²+b²). The moduli are equal. Geometrically, reflection across the real axis does not change the distance from the origin."
    },
    {
      number: 215,
      question: "What is the product of the roots of the quadratic equation 3x² - 5x + 7 = 0?",
      grade: 11,
      options: ["5/3", "-5/3", "7/3", "-7/3"],
      answer: "7/3",
      explanation: "For ax²+bx+c=0, the product of the roots is c/a. Here, it is 7/3."
    },
    {
      number: 216,
      question: "A local minimum of a function f(x) occurs at x=c if...",
      grade: 11,
      options: ["f'(c) > 0 and f''(c) > 0", "f'(c) = 0 and f''(c) < 0", "f'(c) < 0 and f''(c) > 0", "f'(c) = 0 and f''(c) > 0"],
      answer: "f'(c) = 0 and f''(c) > 0",
      explanation: "The first derivative must be zero for a critical point. If the second derivative is positive (concave up), it is a local minimum."
    },
    {
      number: 217,
      question: "Find ∫ (cos(x))⁻² dx.",
      grade: 11,
      options: ["-cot(x) + C", "tan(x) + C", "(cos(x))⁻¹ + C", "sin(x) / cos³(x) + C"],
      answer: "tan(x) + C",
      explanation: "(cos(x))⁻² = 1/cos²(x) = sec²(x). The integral ∫ sec²(x) dx is a standard result, tan(x) + C."
    },
    {
      number: 218,
      question: "For what kind of DE do we use an integrating factor to solve?",
      grade: 11,
      options: ["Second-order homogeneous", "Separable", "First-order linear", "Homogeneous"],
      answer: "First-order linear",
      explanation: "The method of multiplying by an integrating factor, IF = e^(∫P(x)dx), is specifically used to solve first-order linear differential equations of the form y' + P(x)y = Q(x)."
    },
    {
      number: 219,
      question: "A matrix where A^T = -A is called...",
      grade: 11,
      options: ["Symmetric", "Skew-Symmetric", "An identity matrix", "An inverse matrix"],
      answer: "Skew-Symmetric",
      explanation: "This is the definition of a skew-symmetric (or antisymmetric) matrix. The diagonal elements must also be zero."
    },
    {
      number: 220,
      question: "Two lines with direction vectors v₁ and v₂ are perpendicular if...",
      grade: 11,
      options: ["v₁ × v₂ = 0", "v₁ · v₂ = 0", "v₁ = v₂", "v₁ = -v₂"],
      answer: "v₁ · v₂ = 0",
      explanation: "Two lines are perpendicular if their direction vectors are orthogonal. Two vectors are orthogonal if their dot product is zero."
    },
    {
      number: 221,
      question: "Which probability distribution has a 'memoryless' property?",
      grade: 11,
      options: ["Binomial", "Normal", "Poisson", "Exponential"],
      answer: "Exponential",
      explanation: "The exponential distribution is memoryless. For example, the probability that an item will last another hour is the same regardless of how many hours it has already lasted. P(X > s+t | X > s) = P(X > t)."
    },
    {
      number: 222,
      question: "The term 'span' in vector spaces refers to...",
      grade: 11,
      options: ["The number of vectors in a basis.", "The set of all possible linear combinations of a set of vectors.", "The length of a vector.", "A vector that is perpendicular to a set of vectors."],
      answer: "The set of all possible linear combinations of a set of vectors.",
      explanation: "The span of a set of vectors is the subspace generated by all possible linear combinations of those vectors."
    },
    {
      number: 223,
      question: "What is i + i² + i³ + i⁴?",
      grade: 11,
      options: ["i", "-1", "-i", "0"],
      answer: "0",
      explanation: "i¹=i, i²=-1, i³=-i, i⁴=1. The sum is i - 1 - i + 1 = 0. The sum of any four consecutive powers of i is 0."
    },
    {
      number: 224,
      question: "Which of the following is a cube root of 8i?",
      grade: 11,
      options: ["2i", "2", "-2i", "√3 + i"],
      answer: "-2i",
      explanation: "Let z = 8i. In polar form, r=8, φ=π/2. z = 8(cos(π/2)+isin(π/2)). A cube root is given by w_k = 8^(1/3)[cos((π/2+2kπ)/3)+isin((π/2+2kπ)/3)].\nFor k=2, θ = (π/2+4π)/3 = (9π/2)/3 = 3π/2. The root is 2(cos(3π/2)+isin(3π/2)) = 2(0 + i(-1)) = -2i."
    },
    {
      number: 225,
      question: "For small x, the approximation of ln(1+x) is:",
      grade: 11,
      options: ["x", "1+x", "1", "x - x²/2"],
      answer: "x",
      explanation: "The Maclaurin series for ln(1+x) is x - x²/2 + x³/3 - ... For small x, the first-order approximation is just the first term, x."
    },
    {
      number: 226,
      question: "What does the integral ∫[a,b] f'(x) dx represent?",
      grade: 11,
      options: ["The slope of f(x) from a to b.", "The net change in f(x) from a to b.", "The area under f'(x).", "The length of the curve f(x)."],
      answer: "The net change in f(x) from a to b.",
      explanation: "By the Fundamental Theorem of Calculus, ∫[a,b] f'(x) dx = f(b) - f(a), which is the net change in the original function f(x) over the interval [a, b]."
    },
    {
      number: 227,
      question: "A homogeneous system of linear equations AX=0 always has at least one solution, which is:",
      grade: 11,
      options: ["The trivial solution X=0.", "A unique non-zero solution.", "An infinite number of solutions.", "The identity matrix."],
      answer: "The trivial solution X=0.",
      explanation: "A homogeneous system is always consistent because X=0 (the zero vector) is always a solution. This is called the trivial solution."
    },
    {
      number: 228,
      question: "Find the variance of a Poisson distribution with mean 4.",
      grade: 11,
      options: ["2", "4", "8", "16"],
      answer: "4",
      explanation: "For a Poisson distribution, the variance is equal to the mean. If μ = 4, then σ² = 4."
    },
    {
      number: 229,
      question: "If r is the correlation coefficient, what does a value of r=0 imply?",
      grade: 11,
      options: ["A perfect linear relationship exists.", "A strong non-linear relationship exists.", "No linear relationship exists between the variables.", "The variables are identical."],
      answer: "No linear relationship exists between the variables.",
      explanation: "A correlation coefficient of r=0 indicates that there is no linear association between the two variables. It does not rule out the possibility of a non-linear relationship."
    },
    {
      number: 230,
      question: "A single observation that is significantly different from other observations in a dataset is called...",
      grade: 11,
      options: ["A mean", "A parameter", "An outlier", "A median"],
      answer: "An outlier",
      explanation: "An outlier is an observation point that is distant from other observations. It may be due to variability in the measurement or may indicate experimental error."
    },
    {
      number: 231,
      question: "Express 2(cos(30°) + i sin(30°)) in the form a+bi.",
      grade: 11,
      options: ["√3 + i", "1 + i√3", "√3 + i√3", "1 + i"],
      answer: "√3 + i",
      explanation: "cos(30°) = √3/2 and sin(30°) = 1/2. So 2(√3/2 + i(1/2)) = √3 + i."
    },
    {
      number: 232,
      question: "If A is a 3x3 matrix and det(A) = 5, what is det(2A)?",
      grade: 11,
      options: ["10", "20", "30", "40"],
      answer: "40",
      explanation: "If A is an nxn matrix, then det(kA) = kⁿdet(A). Here, n=3, k=2.\ndet(2A) = 2³ det(A) = 8 * 5 = 40."
    },
    {
      number: 233,
      question: "The set of all complex numbers is denoted by:",
      grade: 11,
      options: ["ℝ", "ℕ", "ℂ", "ℤ"],
      answer: "ℂ",
      explanation: "ℝ is the set of real numbers, ℕ is natural numbers, ℤ is integers, and ℂ is the set of complex numbers."
    },
    {
      number: 234,
      question: "In the equation for a line r = r₀ + tv, v is the...",
      grade: 11,
      options: ["Position vector of a point on the line.", "Direction vector of the line.", "Normal vector of the line.", "Unit vector of the line."],
      answer: "Direction vector of the line.",
      explanation: "In the vector equation of a line, v is the direction vector, indicating the orientation or slope of the line."
    },
    {
      number: 235,
      question: "To rationalize the complex fraction (2+i)/(3-i), one should multiply the numerator and denominator by:",
      grade: 11,
      options: ["3-i", "2-i", "3+i", "2+i"],
      answer: "3+i",
      explanation: "To divide complex numbers, you multiply the numerator and denominator by the complex conjugate of the denominator. The conjugate of 3-i is 3+i."
    },
    {
      number: 236,
      question: "If a polynomial P(x) has a degree n, what is the degree of its derivative P'(x)?",
      grade: 11,
      options: ["n", "n-1", "n+1", "It depends on the polynomial."],
      answer: "n-1",
      explanation: "The power rule (d/dx xⁿ = nxⁿ⁻¹) reduces the power of each term by one, so the highest power of the derivative polynomial will be n-1."
    },
    {
      number: 237,
      question: "The definite integral ∫[a,b] f(x) dx can be geometrically interpreted as the...",
      grade: 11,
      options: ["Net signed area between the curve y=f(x) and the x-axis from x=a to x=b.", "Length of the curve y=f(x) from x=a to x=b.", "Instantaneous rate of change of f(x) at x=b.", "Volume of the solid formed by rotating the curve."],
      answer: "Net signed area between the curve y=f(x) and the x-axis from x=a to x=b.",
      explanation: "This is the primary geometric interpretation. Area above the x-axis is counted as positive, and area below is counted as negative."
    },
    {
      number: 238,
      question: "Find ∫ x⁻¹/² dx.",
      grade: 11,
      options: ["(1/2)x⁻³/² + C", "2x¹/² + C", "ln|x¹/²| + C", "-2x⁻³/² + C"],
      answer: "2x¹/² + C",
      explanation: "Using the power rule, ∫ x⁻¹/² dx = x^(-1/2 + 1) / (-1/2 + 1) + C = x¹/² / (1/2) + C = 2x¹/² + C = 2√x + C."
    },
    {
      number: 239,
      question: "What are the parametric equations for the line r = <2,0,1> + t<1,-1,3>?",
      grade: 11,
      options: ["x=1+2t, y=-t, z=3+t", "x=2+t, y=-t, z=1+3t", "x=2, y=t, z=1", "x=1, y=-1, z=3"],
      answer: "x=2+t, y=-t, z=1+3t",
      explanation: "Equating the components: x = 2 + t(1), y = 0 + t(-1), z = 1 + t(3). This gives x=2+t, y=-t, z=1+3t."
    },
    {
      number: 240,
      question: "The sum of the probabilities in any discrete probability distribution must be equal to...",
      grade: 11,
      options: ["0", "1", "The mean", "n"],
      answer: "1",
      explanation: "The sum of probabilities for all possible outcomes of a random variable must be 1, representing 100% certainty that one of the outcomes will occur."
    },
    {
      number: 241,
      question: "Find the magnitude of the vector projection of u=<3,4> onto v=<1,0>.",
      grade: 11,
      options: ["3", "4", "5", "1"],
      answer: "3",
      explanation: "The magnitude of the projection (scalar projection) is comp_v(u) = (u·v)/|v|.\nu·v = 3*1 + 4*0 = 3. |v| = √(1²+0²) = 1. comp_v(u) = 3/1 = 3."
    },
    {
      number: 242,
      question: "How many ways can the letters of the word 'WAEC' be arranged?",
      grade: 11,
      options: ["4", "12", "24", "1"],
      answer: "24",
      explanation: "This is a permutation of 4 distinct items. The number of arrangements is 4! = 4 × 3 × 2 × 1 = 24."
    },
    {
      number: 243,
      question: "The interval of convergence for the series 1 + x + x² + x³ + ... is:",
      grade: 11,
      options: ["[-1, 1]", "(-1, 1)", "All real numbers", "x > 1"],
      answer: "(-1, 1)",
      explanation: "This is a geometric series with common ratio r=x. It converges when |r|<1, which is |x|<1 or -1 < x < 1. This is also the generalized binomial expansion of (1-x)⁻¹."
    },
    {
      number: 244,
      question: "If f(x) is an even function, then f(-x) = ...",
      grade: 11,
      options: ["-f(x)", "f(x)", "1/f(x)", "f(1/x)"],
      answer: "f(x)",
      explanation: "This is the definition of an even function, which is symmetric about the y-axis (e.g., cos(x), x²)."
    },
    {
      number: 245,
      question: "Find the value of c guaranteed by the Mean Value Theorem for f(x)=x² on [0,2].",
      grade: 11,
      options: ["0", "1", "2", "√2"],
      answer: "1",
      explanation: "The MVT states there is a c in (a,b) where f'(c) = (f(b)-f(a))/(b-a).\nf'(x)=2x. f'(c)=2c.\n(f(2)-f(0))/(2-0) = (2²-0²)/2 = 4/2 = 2.\nSo, 2c = 2 => c=1. Since 1 is in (0,2), this is the correct value."
    },
    {
      number: 246,
      question: "What is the derivative of x^x?",
      grade: 11,
      options: ["x * x^(x-1)", "x^x (1 + ln x)", "x^x ln x", "1"],
      answer: "x^x (1 + ln x)",
      explanation: "Use logarithmic differentiation. Let y=x^x. ln(y) = ln(x^x) = x ln(x). Differentiate implicitly: (1/y)y' = (1*lnx + x*(1/x)) = lnx + 1. So y' = y(lnx + 1) = x^x(1 + ln x)."
    },
    {
      number: 247,
      question: "A line and a plane are parallel if the line's direction vector v is...",
      grade: 11,
      options: ["Parallel to the plane's normal vector n.", "Perpendicular to the plane's normal vector n.", "Equal to the plane's normal vector n.", "The zero vector."],
      answer: "Perpendicular to the plane's normal vector n.",
      explanation: "If a line is parallel to a plane, its direction vector must lie in a direction perpendicular to the plane's normal vector. Therefore, their dot product must be zero (v · n = 0)."
    },
    {
      number: 248,
      question: "The determinant of matrix A is 3 and the determinant of matrix B is 4. What is det(AB)?",
      grade: 11,
      options: ["7", "1", "12", "Cannot be determined"],
      answer: "12",
      explanation: "A property of determinants is that det(AB) = det(A)det(B). So det(AB) = 3 * 4 = 12."
    },
    {
      number: 249,
      question: "If X ~ N(100, 225), what is the standard deviation?",
      grade: 11,
      options: ["225", "100", "15", "10"],
      answer: "15",
      explanation: "The notation X ~ N(μ, σ²) means X follows a normal distribution with mean μ and variance σ². Here σ²=225, so the standard deviation σ = √225 = 15."
    },
    {
      number: 250,
      question: "The modulus of the complex number e^(iθ) is:",
      grade: 11,
      options: ["e", "θ", "0", "1"],
      answer: "1",
      explanation: "e^(iθ) = cosθ + isinθ. The modulus is |cosθ + isinθ| = √(cos²θ + sin²θ) = √1 = 1. This means all points on the unit circle in the complex plane have a modulus of 1."
    },
    {
      number: 251,
      question: "The Argand diagram represents complex numbers in a plane where the horizontal axis is the...",
      grade: 11,
      options: ["Complex axis", "Imaginary axis", "Real axis", "Modulus axis"],
      answer: "Real axis",
      explanation: "In the Argand diagram (or complex plane), the horizontal axis represents the real part of the complex number and is called the real axis."
    },
    {
      number: 252,
      question: "The reflection of the complex number z = a + bi across the real axis in the Argand diagram is...",
      grade: 11,
      options: ["-z", "1/z", "z̅ (the conjugate)", "|z|"],
      answer: "z̅ (the conjugate)",
      explanation: "The conjugate of z = a + bi is z̅ = a - bi. This corresponds to the point (a, -b), which is a reflection of (a, b) across the real (x) axis."
    },
    {
      number: 253,
      question: "If z = -3i, what is its representation in the form a + bi?",
      grade: 11,
      options: ["-3 + 0i", "0 - 3i", "3 + 0i", "0 + 3i"],
      answer: "0 - 3i",
      explanation: "A purely imaginary number like -3i has a real part of 0. So, it is written as 0 - 3i."
    },
    {
      number: 254,
      question: "Simplify i¹⁹.",
      grade: 11,
      options: ["i", "-1", "-i", "1"],
      answer: "-i",
      explanation: "Powers of i cycle every 4 terms (i, -1, -i, 1). To find i¹⁹, divide 19 by 4. 19 = 4×4 + 3. The remainder is 3. So, i¹⁹ = i³ = -i."
    },
    {
      number: 255,
      question: "Evaluate (1+2i)(1-2i).",
      grade: 11,
      options: ["-3", "5", "1 - 4i", "1 + 4i"],
      answer: "5",
      explanation: "This is in the form (a+b)(a-b) = a²-b². So (1)² - (2i)² = 1 - 4i² = 1 - 4(-1) = 1 + 4 = 5. Alternatively, this is z * z̅ = |z|² = 1²+2² = 5."
    },
    {
      number: 256,
      question: "If (x + iy)(2 - 3i) = 4 + i, find the values of x and y by expressing x + iy in terms of a fraction.",
      grade: 11,
      options: ["x=1, y=2", "x=1/13, y=14/13", "x=5/13, y=14/13", "x=11/13, y=10/13"],
      answer: "x=5/13, y=14/13",
      explanation: "x + iy = (4+i)/(2-3i). Multiply by the conjugate: [(4+i)(2+3i)]/[(2-3i)(2+3i)] = [8+12i+2i+3i²]/[2²+3²] = [8+14i-3]/13 = [5+14i]/13 = 5/13 + (14/13)i. So x=5/13, y=14/13."
    },
    {
      number: 257,
      question: "What is the modulus of z = -5?",
      grade: 11,
      options: ["-5", "5", "0", "25"],
      answer: "5",
      explanation: "As a complex number, z = -5 + 0i. |z| = √((-5)² + 0²) = √25 = 5."
    },
    {
      number: 258,
      question: "Find the argument of z = -2i.",
      grade: 11,
      options: ["0", "π/2", "π", "-π/2 or 3π/2"],
      answer: "-π/2 or 3π/2",
      explanation: "The number -2i lies on the negative imaginary axis. The angle it makes with the positive real axis is -π/2 radians (-90°) or 3π/2 radians (270°)."
    },
    {
      number: 259,
      question: "The polar form of a complex number is z = r(cosφ + isinφ). What is r?",
      grade: 11,
      options: ["The argument", "The conjugate", "The modulus", "The real part"],
      answer: "The modulus",
      explanation: "In the polar (modulus-argument) form, r represents the modulus |z|, and φ represents the argument arg(z)."
    },
    {
      number: 260,
      question: "If z₁ = 2(cos(π/3) + isin(π/3)) and z₂ = 3(cos(π/6) + isin(π/6)), find z₁z₂.",
      grade: 11,
      options: ["6(cos(π/2) + isin(π/2))", "5(cos(π/2) + isin(π/2))", "6(cos(π/18) + isin(π/18))", "5(cos(π/3) + isin(π/3))"],
      answer: "6(cos(π/2) + isin(π/2))",
      explanation: "To multiply complex numbers in polar form, multiply the moduli and add the arguments. z₁z₂ = (2×3)[cos(π/3 + π/6) + isin(π/3 + π/6)] = 6[cos(2π/6 + π/6) + isin(2π/6 + π/6)] = 6(cos(π/2) + isin(π/2))."
    },
    {
      number: 261,
      question: "Using the result from the previous question, what is z₁z₂ in cartesian form?",
      grade: 11,
      options: ["6", "6i", "-6", "-6i"],
      answer: "6i",
      explanation: "6(cos(π/2) + isin(π/2)) = 6(0 + i(1)) = 6i."
    },
    {
      number: 262,
      question: "If z = r(cosφ + isinφ), then z/z̅ is equal to:",
      grade: 11,
      options: ["1", "-1", "cos(2φ) + isin(2φ)", "r²"],
      answer: "cos(2φ) + isin(2φ)",
      explanation: "z̅ = r(cosφ - isinφ) = r(cos(-φ)+isin(-φ)). To divide, we divide moduli and subtract arguments. (r/r)[cos(φ-(-φ)) + isin(φ-(-φ))] = 1[cos(2φ) + isin(2φ)]."
    },
    {
      number: 263,
      question: "The expression |z - c| = k represents a...",
      grade: 11,
      options: ["Line passing through c.", "Circle with center c and radius k.", "Circle with radius c and center k.", "Point at (c, k)."],
      answer: "Circle with center c and radius k.",
      explanation: "This expression describes the set of all points z whose distance from the point c is a constant k. This is the definition of a circle with center c and radius k."
    },
    {
      number: 264,
      question: "Find one of the square roots of 4i.",
      grade: 11,
      options: ["2", "-2", "√2 + i√2", "2+2i"],
      answer: "√2 + i√2",
      explanation: "4i in polar form is 4(cos(π/2)+isin(π/2)). The square roots are w_k = √4[cos((π/2+2kπ)/2)+isin((π/2+2kπ)/2)]. For k=0, w₀=2[cos(π/4)+isin(π/4)] = 2(1/√2 + i/√2) = √2+i√2."
    },
    {
      number: 265,
      question: "What are the solutions to the equation z² + 4z + 5 = 0?",
      grade: 11,
      options: ["-2 ± i", "2 ± i", "-4 ± 2i", "4 ± i"],
      answer: "-2 ± i",
      explanation: "Using the quadratic formula: z = [-b ± √(b²-4ac)]/2a = [-4 ± √(4² - 4*1*5)]/2 = [-4 ± √(16-20)]/2 = [-4 ± √(-4)]/2 = [-4 ± 2i]/2 = -2 ± i."
    },
    {
      number: 266,
      question: "Which quadrant contains the complex number z = -3 - 5i?",
      grade: 11,
      options: ["First", "Second", "Third", "Fourth"],
      answer: "Third",
      explanation: "A complex number a+bi corresponds to the point (a,b). The point (-3,-5) is in the third quadrant (both coordinates negative)."
    },
    {
      number: 267,
      question: "Using Euler's formula, cos(x) can be expressed as:",
      grade: 11,
      options: ["(e^(ix) + e^(-ix)) / 2", "(e^(ix) - e^(-ix)) / 2", "(e^(ix) + e^(-ix)) / 2i", "(e^(x) - e^(-x)) / 2"],
      answer: "(e^(ix) + e^(-ix)) / 2",
      explanation: "e^(ix)=cos(x)+isin(x) and e^(-ix)=cos(x)-isin(x). Adding these two equations gives e^(ix)+e^(-ix)=2cos(x), so cos(x)=(e^(ix)+e^(-ix))/2."
    },
    {
      number: 268,
      question: "The sum of the cube roots of 1 is:",
      grade: 11,
      options: ["1", "3", "i", "0"],
      answer: "0",
      explanation: "The n-th roots of unity for n>1 always sum to 0."
    },
    {
      number: 269,
      question: "The geometric arrangement of the n-th roots of unity in the Argand diagram is:",
      grade: 11,
      options: ["A straight line", "The vertices of a regular n-sided polygon.", "A circle with radius n.", "A parabola."],
      answer: "The vertices of a regular n-sided polygon.",
      explanation: "The n-th roots of unity are equally spaced on the unit circle (|z|=1) and form the vertices of a regular n-gon, with one vertex always at (1,0)."
    },
    {
      number: 270,
      question: "If z = a + bi, what is the geometric interpretation of the transformation z -> iz?",
      grade: 11,
      options: ["Reflection across the real axis.", "Reflection across the imaginary axis.", "Rotation by 90° counter-clockwise about the origin.", "Rotation by 180° about the origin."],
      answer: "Rotation by 90° counter-clockwise about the origin.",
      explanation: "The number i has modulus 1 and argument π/2 (90°). Multiplying a complex number by i multiplies the moduli (r*1=r) and adds the arguments (φ+π/2). This corresponds to a rotation by 90° counter-clockwise."
    },
    {
      number: 271,
      question: "Simplify (1 + i)⁶.",
      grade: 11,
      options: ["-8", "8i", "-8i", "8"],
      answer: "-8i",
      explanation: "1+i = √2(cos(π/4)+isin(π/4)). (1+i)⁶ = (√2)⁶[cos(6π/4)+isin(6π/4)] = 8[cos(3π/2)+isin(3π/2)] = 8(0 + i(-1)) = -8i."
    },
    {
      number: 272,
      question: "Find a value for arg(z₁/z₂), if arg(z₁) = π/2 and arg(z₂) = π/3.",
      grade: 11,
      options: ["5π/6", "π/6", "π²/6", "-π/6"],
      answer: "π/6",
      explanation: "The rule for division is arg(z₁/z₂) = arg(z₁) - arg(z₂) = π/2 - π/3 = 3π/6 - 2π/6 = π/6."
    },
    {
      number: 273,
      question: "The expression nCr is equivalent to:",
      grade: 11,
      options: ["nPr", "nC(n-r)", "n!", "r!"],
      answer: "nC(n-r)",
      explanation: "This is a fundamental property of binomial coefficients. Choosing r items to take is the same as choosing n-r items to leave behind. So, nCr = nC(n-r)."
    },
    {
      number: 274,
      question: "What is the coefficient of x³y² in the expansion of (x + y)⁵?",
      grade: 11,
      options: ["1", "5", "10", "20"],
      answer: "10",
      explanation: "The term with x³y² has coefficient ⁵C₂ (or ⁵C₃, they are equal). ⁵C₂ = 10."
    },
    {
      number: 275,
      question: "Find the term independent of x in the expansion of (x - 1/x²)⁶.",
      grade: 11,
      options: ["-20", "20", "15", "-15"],
      answer: "15",
      explanation: "The general term is T_(r+1) = ⁶Cᵣ(x)⁶⁻ʳ(-1/x²)ʳ = ⁶Cᵣ(-1)ʳ x⁶⁻ʳ x⁻²ʳ = ⁶Cᵣ(-1)ʳ x⁶⁻³ʳ. For the term to be independent of x, the power of x must be 0. 6-3r=0 => r=2. The term is ⁶C₂(-1)² = 15(1) = 15."
    },
    {
      number: 276,
      question: "What is the sum of the coefficients in the expansion of (x + y)⁶?",
      grade: 11,
      options: ["0", "1", "32", "64"],
      answer: "64",
      explanation: "To find the sum of coefficients, let x=1 and y=1. The sum is (1+1)⁶ = 2⁶ = 64."
    },
    {
      number: 277,
      question: "The first two terms of the expansion of (1 - 3x)ⁿ are 1 - 12x. Find the value of n.",
      grade: 11,
      options: ["3", "4", "6", "-4"],
      answer: "4",
      explanation: "The expansion is (1-3x)ⁿ = 1 + n(-3x) + ... = 1 - 3nx + ... We are given this is 1 - 12x. Equating the x terms: -3nx = -12x => -3n = -12 => n=4."
    },
    {
      number: 278,
      question: "In the expansion of (1+ax)⁸, the coefficient of x² is 252. Find the value of a.",
      grade: 11,
      options: ["±3", "±9", "±1", "±1/3"],
      answer: "±3",
      explanation: "The x² term is ⁸C₂(ax)² = 28a²x². The coefficient is 28a². We are given 28a² = 252. a² = 252/28 = 9. So a = ±3."
    },
    {
      number: 279,
      question: "The Maclaurin series for sin(x) is x - x³/3! + x⁵/5! - ... For this series to be valid, x must be in:",
      grade: 11,
      options: ["degrees", "radians", "|x|<1", "x>0"],
      answer: "radians",
      explanation: "The standard calculus-derived series for trigonometric functions like sin(x) and cos(x) are only valid when the angle x is measured in radians."
    },
    {
      number: 280,
      question: "Find the first three terms of the expansion of √(1 - 2x).",
      grade: 11,
      options: ["1 - x - x²/2", "1 + x + x²/2", "1 - x + x²/4", "1 + x - x²/4"],
      answer: "1 - x - x²/2",
      explanation: "This is (1-2x)¹/². Use (1+y)ⁿ ≈ 1 + ny + n(n-1)/2! y² with y=-2x, n=1/2.\n1 + (1/2)(-2x) + [(1/2)(-1/2)/2](-2x)² = 1 - x - (1/8)(4x²) = 1 - x - x²/2."
    },
    {
      number: 281,
      question: "For what range of x is the expansion of (1-4x)⁻³ valid?",
      grade: 11,
      options: ["|x| < 3", "|x| < 4", "|x| < 1/3", "|x| < 1/4"],
      answer: "|x| < 1/4",
      explanation: "The expansion of (1+y)ⁿ is valid for |y|<1. Here y = -4x. So |-4x|<1 => 4|x|<1 => |x|<1/4."
    },
    {
      number: 282,
      question: "Find an approximation for ³√1.06 using the binomial theorem.",
      grade: 11,
      options: ["1.02", "1.03", "1.01", "1.06"],
      answer: "1.02",
      explanation: "(1+0.06)¹/³. Use (1+x)ⁿ ≈ 1+nx.\n≈ 1 + (1/3)(0.06) = 1 + 0.02 = 1.02."
    },
    {
      number: 283,
      question: "What row of Pascal's triangle gives the coefficients for the expansion of (a+b)⁶?",
      grade: 11,
      options: ["Row 5", "Row 6", "Row 7", "Row 8"],
      answer: "Row 6",
      explanation: "Row n of Pascal's triangle gives the coefficients for the power n. We need Row 6 (starting from Row 0). The values are 1 6 15 20 15 6 1."
    },
    {
      number: 284,
      question: "Which term represents the general term in the expansion of (a+x)ⁿ?",
      grade: 11,
      options: ["T_r = nCr aⁿ⁻ʳ xʳ", "T_(r+1) = nCr aⁿ⁻ʳ xʳ", "T_r = nPr aⁿ⁻ʳ xʳ", "T_(n+1) = nCn a⁰xⁿ"],
      answer: "T_(r+1) = nCr aⁿ⁻ʳ xʳ",
      explanation: "By convention, the first term corresponds to r=0. So the (r+1)-th term is given by T_(r+1) = nCr aⁿ⁻ʳ xʳ."
    },
    {
      number: 285,
      question: "In the Maclaurin series for cos(x), which powers of x are present?",
      grade: 11,
      options: ["All powers", "Only odd powers", "Only even powers", "No powers, only constants"],
      answer: "Only even powers",
      explanation: "The series for cos(x) is 1 - x²/2! + x⁴/4! - ... It contains only the constant term and even powers of x because cos(x) is an even function."
    },
    {
      number: 286,
      question: "Use the binomial expansion of (1+x)ⁿ to find the expansion of 1/(1-x).",
      grade: 11,
      options: ["1 - x + x² - x³ + ...", "1 + x + x² + x³ + ...", "1 - 2x + 3x² - ...", "1 + 2x + 3x² + ..."],
      answer: "1 + x + x² + x³ + ...",
      explanation: "1/(1-x) = (1-x)⁻¹. Use (1+y)ⁿ with n=-1, y=-x.\n1 + (-1)(-x) + [(-1)(-2)/2!](-x)² + ... = 1 + x + x² + ..."
    },
    {
      number: 287,
      question: "Which value cannot be approximated using the expansion of (1+x)¹/²?",
      grade: 11,
      options: ["√1.5", "√0.9", "√2", "√1.1"],
      answer: "√2",
      explanation: "The expansion (1+x)¹/² is valid for |x|<1. To approximate √2, you would need to write it as √(1+1), where x=1. This is not in the interval of convergence (-1, 1)."
    },
    {
      number: 288,
      question: "When dividing the polynomial 2x³+3x-1 by x+2 using synthetic division, the number used for the division is:",
      grade: 11,
      options: ["2", "-2", "1", "-1"],
      answer: "-2",
      explanation: "Synthetic division divides by a linear binomial (x - c). Here, the binomial is x+2, which is x - (-2). So c = -2."
    },
    {
      number: 289,
      question: "Find the quotient Q(x) when x³ - 5x² + 7x - 2 is divided by (x - 2).",
      grade: 11,
      options: ["x² - 3x + 1", "x² + 3x - 1", "x² - 7x + 21", "x + 1"],
      answer: "x² - 3x + 1",
      explanation: "Using synthetic division with c=2:\n2 | 1 -5 7 -2\n  |   2 -6 2\n  -----------------\n    1 -3  1   0\nThe quotient is the bottom line (excluding the remainder): 1x² - 3x + 1."
    },
    {
      number: 290,
      question: "If P(c)=0, P'(c)=0, and P''(c)≠0 for a polynomial P(x), then at x=c, the graph has a...",
      grade: 11,
      options: ["simple root.", "root of even multiplicity (touches).", "root of odd multiplicity > 1 (inflection).", "vertical asymptote."],
      answer: "root of even multiplicity (touches).",
      explanation: "P(c)=0 means it's a root. P'(c)=0 means the tangent is horizontal. P''(c)≠0 means it's a local min or max, so the graph is tangent to the x-axis and turns around, which is characteristic of a root of even multiplicity (like a double root)."
    },
    {
      number: 291,
      question: "Which of the following is a possible rational root of the polynomial 3x³ - 5x² + x + 6 = 0, according to the Rational Root Theorem?",
      grade: 11,
      options: ["5/3", "4", "2/3", "3/2"],
      answer: "2/3",
      explanation: "Rational roots must be of the form p/q, where p is a factor of the constant term (6) and q is a factor of the leading coefficient (3). Factors of 6 are ±1,±2,±3,±6. Factors of 3 are ±1,±3. Possible rational roots include ±1, ±2, ±3, ±6, ±1/3, ±2/3. Of the options, only 2/3 fits this pattern."
    },
    {
      number: 292,
      question: "The y-intercept of the polynomial P(x) = a_n x^n + ... + a_1 x + a_0 is:",
      grade: 11,
      options: ["a_n", "a_1", "a_0", "0"],
      answer: "a_0",
      explanation: "The y-intercept occurs when x=0. All terms with x become zero, leaving only the constant term a₀. P(0) = a₀."
    },
    {
      number: 293,
      question: "The end behavior of y = 5x³ - 2x² + 1 is:",
      grade: 11,
      options: ["Falls left, Rises right", "Rises left, Falls right", "Rises left, Rises right", "Falls left, Falls right"],
      answer: "Falls left, Rises right",
      explanation: "Leading term is 5x³. The degree (3) is odd and the leading coefficient (5) is positive. Odd degree means ends go in opposite directions. Positive coefficient means it rises to the right. So, it falls left and rises right."
    },
    {
      number: 294,
      question: "A rational function f(x) = P(x)/Q(x) has a hole in the graph at x=c if...",
      grade: 11,
      options: ["Q(c)=0 and P(c)≠0", "P(c)=0 and Q(c)≠0", "P(c)=0 and Q(c)=0", "The degree of P is greater than the degree of Q."],
      answer: "P(c)=0 and Q(c)=0",
      explanation: "If both numerator and denominator are zero at x=c, it means there's a common factor of (x-c) that can be cancelled out, leading to a removable discontinuity (a hole) instead of a vertical asymptote."
    },
    {
      number: 295,
      question: "Find the slant asymptote for f(x) = (2x² - 3x + 1) / (x - 1).",
      grade: 11,
      options: ["y = 2x - 3", "y = 2x + 1", "y = 2x", "y = 2x - 1"],
      answer: "y = 2x - 1",
      explanation: "Since degree of numerator is one more than denominator, perform polynomial long division. The quotient is 2x - 1. So the slant asymptote is y = 2x - 1."
    },
    {
      number: 296,
      question: "The graph of a rational function can cross which type of asymptote?",
      grade: 11,
      options: ["Vertical", "Horizontal", "It cannot cross any asymptote.", "Both vertical and horizontal."],
      answer: "Horizontal",
      explanation: "A graph can never cross a vertical asymptote, as the function is undefined there. However, it can cross a horizontal or slant asymptote, as these only describe the end behavior (as x -> ±∞)."
    },
    {
      number: 297,
      question: "Find the roots of the polynomial equation (x-2)²(x+3) = 0.",
      grade: 11,
      options: ["2, -3", "-2, 3", "4, -3", "2 (multiplicity 2), -3"],
      answer: "2 (multiplicity 2), -3",
      explanation: "The factors are (x-2) and (x+3). Setting them to zero gives roots x=2 and x=-3. Since the factor (x-2) is squared, the root x=2 has a multiplicity of 2."
    },
    {
      number: 298,
      question: "How does the graph of y=(x+1)³ behave at its x-intercept?",
      grade: 11,
      options: ["It crosses the axis like a straight line.", "It touches the axis and turns around.", "It crosses the axis but flattens out (an inflection point on the axis).", "It has a vertical asymptote."],
      answer: "It crosses the axis but flattens out (an inflection point on the axis).",
      explanation: "A root of odd multiplicity greater than 1 (like 3) causes the graph to cross the x-axis while being momentarily horizontal, creating a point of inflection on the axis."
    },
    {
      number: 299,
      question: "To find the remainder of P(x)=x¹⁰⁰ - 2x + 5 divided by (x+1), you should calculate:",
      grade: 11,
      options: ["P(1)", "P(-1)", "P(0)", "The full division"],
      answer: "P(-1)",
      explanation: "The Remainder Theorem is the most efficient method. To find the remainder when dividing by (x - c), you calculate P(c). Here c=-1. So we calculate P(-1) = (-1)¹⁰⁰ - 2(-1) + 5 = 1 + 2 + 5 = 8."
    },
    {
      number: 300,
      question: "The domain of the function f(x) = log(x-2) is:",
      grade: 11,
      options: ["x > 0", "x < 2", "x > 2", "All real numbers"],
      answer: "x > 2",
      explanation: "The argument of a logarithm must be positive. Therefore, x-2 > 0, which means x > 2."
    },
    {
      number: 301,
      question: "Evaluate log₂(1/8).",
      grade: 11,
      options: ["3", "-3", "1/3", "4"],
      answer: "-3",
      explanation: "1/8 = 1/2³ = 2⁻³. So, we are asking '2 to what power equals 2⁻³?'. The answer is -3."
    },
    {
      number: 302,
      question: "Solve for x: 5^(2x-1) = 25.",
      grade: 11,
      options: ["x = 3/2", "x = 2", "x = 1", "x = 1/2"],
      answer: "x = 3/2",
      explanation: "Write both sides with the same base: 5^(2x-1) = 5². Equate the exponents: 2x-1 = 2 => 2x = 3 => x = 3/2."
    },
    {
      number: 303,
      question: "Express 3 ln(a) - (1/2)ln(b) as a single logarithm.",
      grade: 11,
      options: ["ln(3a / √b)", "ln(a³√b)", "ln(a³ / √b)", "ln(a³ - b/2 )"],
      answer: "ln(a³ / √b)",
      explanation: "3ln(a) = ln(a³) and (1/2)ln(b) = ln(b¹/²) = ln(√b). Then ln(a³) - ln(√b) = ln(a³/√b)."
    },
    {
      number: 304,
      question: "Solve for x: ln(x) = -2.",
      grade: 11,
      options: ["x = e²", "x = 1/e", "x = e⁻²", "x = -2e"],
      answer: "x = e⁻²",
      explanation: "Rewrite the logarithmic equation ln(x)=-2 (which is log_e(x)=-2) in exponential form: x = e⁻²."
    },
    {
      number: 305,
      question: "The graph of y = (1/3)^x represents:",
      grade: 11,
      options: ["Exponential growth", "Exponential decay", "A linear function", "A logarithmic function"],
      answer: "Exponential decay",
      explanation: "In y=b^x, if 0 < b < 1, the function represents exponential decay. Here b = 1/3."
    },
    {
      number: 306,
      question: "A substance has a half-life of 20 days. What fraction of the original substance remains after 60 days?",
      grade: 11,
      options: ["1/3", "1/4", "1/6", "1/8"],
      answer: "1/8",
      explanation: "60 days is equal to 60/20 = 3 half-lives. After 1 half-life, 1/2 remains. After 2, (1/2)²=1/4 remains. After 3, (1/2)³=1/8 remains."
    },
    {
      number: 307,
      question: "How long will it take for an investment to double at a rate of 10% compounded continuously? (approx)",
      grade: 11,
      options: ["7 years", "10 years", "5 years", "2 years"],
      answer: "7 years",
      explanation: "Use A = Pe^(rt). We want A=2P. So 2P = Pe^(0.1t) => 2 = e^(0.1t). ln(2) = 0.1t => t = ln(2)/0.1. Since ln(2) ≈ 0.693, t ≈ 0.693/0.1 = 6.93 years. The 'Rule of 70' (or 69.3) gives a quick estimate: 70/10 = 7 years."
    },
    {
      number: 308,
      question: "Solve the equation 4^x - 2^x - 2 = 0.",
      grade: 11,
      options: ["x = 1", "x = 2", "x = 0", "x = -1"],
      answer: "x = 1",
      explanation: "Let y = 2^x. Then 4^x = (2²)ˣ = (2ˣ)² = y². The equation becomes y² - y - 2 = 0.\nFactoring: (y-2)(y+1) = 0. So y=2 or y=-1.\nSubstitute back: 2^x = 2 => x=1. 2^x = -1 has no real solution. So x=1 is the only solution."
    },
    {
      number: 309,
      question: "The pH of a solution is given by pH = -log[H⁺]. If the pH is 4, what is the concentration [H⁺]?",
      grade: 11,
      options: ["10⁻⁴", "10⁴", "4", "-4"],
      answer: "10⁻⁴",
      explanation: "4 = -log[H⁺] => -4 = log₁₀[H⁺]. Rewrite in exponential form: [H⁺] = 10⁻⁴."
    },
    {
      number: 310,
      question: "The graph of f(x) = a^x (for a>1) and g(x) = log_a(x) are reflections of each other across the line...",
      grade: 11,
      options: ["y = 0", "x = 0", "y = x", "y = -x"],
      answer: "y = x",
      explanation: "Exponential and logarithmic functions with the same base are inverses of each other. The graphs of inverse functions are always reflections across the line y=x."
    },
    {
      number: 311,
      question: "Evaluate lim (x→0) [sin(x) / x].",
      grade: 11,
      options: ["0", "1", "∞", "Does not exist"],
      answer: "1",
      explanation: "This is a fundamental trigonometric limit. Although direct substitution gives 0/0, it is a standard result that lim (x→0) [sin(x) / x] = 1."
    },
    {
      number: 312,
      question: "Find the derivative of y = 5x⁴ - 2x² + 7.",
      grade: 11,
      options: ["20x³ - 4x + 7", "20x³ - 4x", "4x³ - 2x", "20x⁵ - 4x³ + 7x"],
      answer: "20x³ - 4x",
      explanation: "Apply the power rule to each term. The derivative of a constant (7) is 0.\nd/dx(5x⁴) - d/dx(2x²) + d/dx(7) = 20x³ - 4x + 0."
    },
    {
      number: 313,
      question: "Find the derivative of y = sec(x).",
      grade: 11,
      options: ["tan(x)", "sec²(x)", "sec(x)tan(x)", "-csc(x)cot(x)"],
      answer: "sec(x)tan(x)",
      explanation: "This is a standard derivative rule for trigonometric functions."
    },
    {
      number: 314,
      question: "Using the chain rule, find the derivative of y = e^(sin x).",
      grade: 11,
      options: ["cos(x) e^(sin x)", "sin(x) e^(sin x)", "e^(cos x)", "e^(sin x)"],
      answer: "cos(x) e^(sin x)",
      explanation: "Let u = sin(x), so y = e^u. dy/dx = (dy/du)(du/dx) = (e^u)(cos x) = e^(sin x) cos(x)."
    },
    {
      number: 315,
      question: "Find the second derivative (f''(x)) of f(x) = x³ + 2x² - x.",
      grade: 11,
      options: ["3x² + 4x - 1", "6x + 4", "6x", "6"],
      answer: "6x + 4",
      explanation: "First derivative: f'(x) = 3x² + 4x - 1.\nSecond derivative: f''(x) = d/dx(3x² + 4x - 1) = 6x + 4."
    },
    {
      number: 316,
      question: "The points where the second derivative f''(x) is zero or undefined and the concavity changes are called:",
      grade: 11,
      options: ["Critical points", "Local minima", "Local maxima", "Points of inflection"],
      answer: "Points of inflection",
      explanation: "A point of inflection is a point on a curve at which the sign of the curvature (i.e., the concavity) changes. This occurs where f''(x) changes sign."
    },
    {
      number: 317,
      question: "If a function f(x) is decreasing, what must be true about its derivative f'(x)?",
      grade: 11,
      options: ["f'(x) > 0", "f'(x) < 0", "f'(x) = 0", "f'(x) is constant"],
      answer: "f'(x) < 0",
      explanation: "A negative first derivative indicates that the function's slope is negative, meaning it is decreasing."
    },
    {
      number: 318,
      question: "Find the equation of the normal line to the curve y = x³ at x = 1.",
      grade: 11,
      options: ["y - 1 = 3(x-1)", "y - 1 = (-1/3)(x-1)", "y = 3x - 2", "y = -3x + 4"],
      answer: "y - 1 = (-1/3)(x-1)",
      explanation: "First find the slope of the tangent. y' = 3x². At x=1, m_tan = 3(1)² = 3.\nThe slope of the normal is the negative reciprocal: m_norm = -1/3.\nThe point on the curve is (1, 1³), i.e., (1,1).\nThe equation of the normal line is y - y₁ = m(x-x₁), which is y - 1 = (-1/3)(x-1)."
    },
    {
      number: 319,
      question: "The process of finding the derivative of an equation that implicitly defines y as a function of x is called:",
      grade: 11,
      options: ["The chain rule", "Implicit differentiation", "Logarithmic differentiation", "Partial differentiation"],
      answer: "Implicit differentiation",
      explanation: "This is the definition of implicit differentiation, used when you cannot easily solve the equation for y."
    },
    {
      number: 320,
      question: "If x² + y² = 25, find dy/dx.",
      grade: 11,
      options: ["x/y", "-x/y", "y/x", "2x+2y"],
      answer: "-x/y",
      explanation: "Differentiate both sides with respect to x: 2x + 2y(dy/dx) = 0.\nSolve for dy/dx: 2y(dy/dx) = -2x => dy/dx = -2x / 2y = -x/y."
    },
    {
      number: 321,
      question: "The value c that satisfies the Mean Value Theorem for derivatives for f(x) on [a,b] is where:",
      grade: 11,
      options: ["The instantaneous rate of change equals the average rate of change.", "The function value equals the average function value.", "The instantaneous rate of change is zero.", "The function value is zero."],
      answer: "The instantaneous rate of change equals the average rate of change.",
      explanation: "The MVT states that f'(c) = [f(b)-f(a)]/[b-a]. f'(c) is the instantaneous rate of change, and the right side is the average rate of change over the interval."
    },
    {
      number: 322,
      question: "To find the intervals where a function is concave up or down, one must analyze the sign of the...",
      grade: 11,
      options: ["Function itself, f(x)", "First derivative, f'(x)", "Second derivative, f''(x)", "Third derivative, f'''(x)"],
      answer: "Second derivative, f''(x)",
      explanation: "The sign of the second derivative determines concavity. f''>0 means concave up, f''<0 means concave down."
    },
    {
      number: 323,
      question: "A function has a critical point at x=c if...",
      grade: 11,
      options: ["f(c) = 0", "f'(c) = 0 or f'(c) is undefined.", "f''(c) = 0", "The function is continuous at c."],
      answer: "f'(c) = 0 or f'(c) is undefined.",
      explanation: "Critical points are potential locations for local maxima or minima, and they occur where the tangent line is horizontal (f'=0) or vertical/non-existent (f' is undefined)."
    },
    {
      number: 324,
      question: "What does the '+ C' represent in an indefinite integral?",
      grade: 11,
      options: ["A specific constant.", "A correction factor.", "The constant of integration.", "A critical value."],
      answer: "The constant of integration.",
      explanation: "Since the derivative of any constant is zero, the antiderivative of a function is not unique but represents a family of functions that differ by a constant. This is the constant of integration."
    },
    {
      number: 325,
      question: "Evaluate ∫ 5 dx.",
      grade: 11,
      options: ["5", "0", "5x", "5x + C"],
      answer: "5x + C",
      explanation: "The integral of a constant k is kx + C. So, ∫ 5 dx = 5x + C."
    },
    {
      number: 326,
      question: "Evaluate ∫ (3x² - 2x + 1) dx.",
      grade: 11,
      options: ["6x - 2 + C", "x³ - x² + x + C", "x³/3 - x²/2 + x + C", "3x³ - 2x² + x + C"],
      answer: "x³ - x² + x + C",
      explanation: "Integrate term by term using the power rule: 3(x³/3) - 2(x²/2) + 1(x) + C = x³ - x² + x + C."
    },
    {
      number: 327,
      question: "Find the area under the curve y = 1/x from x = 1 to x = e.",
      grade: 11,
      options: ["1", "e", "0", "e - 1"],
      answer: "1",
      explanation: "Area = ∫[1,e] (1/x) dx = [ln|x|]_[1,e] = ln(e) - ln(1) = 1 - 0 = 1."
    },
    {
      number: 328,
      question: "Use u-substitution to evaluate ∫ sin(x)cos(x) dx.",
      grade: 11,
      options: ["(1/2)sin²(x) + C", "(1/2)cos²(x) + C", "-sin(x)cos(x) + C", "sin(x) - cos(x) + C"],
      answer: "(1/2)sin²(x) + C",
      explanation: "Let u = sin(x). Then du = cos(x)dx. The integral becomes ∫ u du = u²/2 + C = (1/2)sin²(x) + C. (Letting u=cos(x) is also possible and gives -(1/2)cos²(x) + C, which differs only by a constant)."
    },
    {
      number: 329,
      question: "If ∫[0,5] f(x) dx = 10 and ∫[0,5] g(x) dx = 3, what is ∫[0,5] [2f(x) - g(x)] dx?",
      grade: 11,
      options: ["7", "17", "23", "14"],
      answer: "17",
      explanation: "Using properties of integrals: 2∫f(x)dx - ∫g(x)dx = 2(10) - 3 = 20 - 3 = 17."
    },
    {
      number: 330,
      question: "For integration by parts (∫udv = uv - ∫vdu), if evaluating ∫x e²ˣ dx, what is a good choice for dv?",
      grade: 11,
      options: ["x", "dx", "e²ˣ dx", "e²ˣ"],
      answer: "e²ˣ dx",
      explanation: "Using LIATE, u = x (algebraic) and the rest is dv. So dv = e²ˣ dx. This is a good choice because dv is easily integrated (v = ½e²ˣ)."
    },
    {
      number: 331,
      question: "The first step in integrating a rational function P(x)/Q(x) where degree(P) ≥ degree(Q) is to:",
      grade: 11,
      options: ["Use partial fractions.", "Use integration by parts.", "Factor the denominator.", "Perform polynomial long division."],
      answer: "Perform polynomial long division.",
      explanation: "You must first divide the numerator by the denominator to get a polynomial plus a proper rational function (where numerator degree < denominator degree) before applying other techniques like partial fractions."
    },
    {
      number: 332,
      question: "The partial fraction decomposition for (3x+1) / (x-1)(x+2) is of the form:",
      grade: 11,
      options: ["A/x + B/(x-1) + C/(x+2)", "A/(x-1) + B/(x+2)", "Ax+B / (x-1)(x+2)", "A/(x-1)² + B/(x+2)"],
      answer: "A/(x-1) + B/(x+2)",
      explanation: "Since the denominator has two distinct linear factors, the decomposition will have two terms, each with a constant numerator and one of the factors as the denominator."
    },
    {
      number: 333,
      question: "Find the volume of the solid formed by rotating the line y=x from x=0 to x=2 about the x-axis.",
      grade: 11,
      options: ["8π/3", "4π", "2π", "8π"],
      answer: "8π/3",
      explanation: "Using the Disk Method: Volume = ∫[0,2] π y² dx = ∫[0,2] π x² dx.\nV = π [x³/3]_[0,2] = π (2³/3 - 0³/3) = 8π/3."
    },
    {
      number: 334,
      question: "If you use substitution u=2x in the definite integral ∫[1,3] f(2x) dx, the new limits of integration for u will be:",
      grade: 11,
      options: ["[1, 3]", "[1/2, 3/2]", "[2, 6]", "[f(2), f(6)]"],
      answer: "[2, 6]",
      explanation: "You must change the limits to be in terms of u.\nLower limit: x=1 => u=2(1)=2.\nUpper limit: x=3 => u=2(3)=6.\nThe new limits are [2, 6]."
    },
    {
      number: 335,
      question: "∫ sec²(5x) dx = ?",
      grade: 11,
      options: ["(1/5)tan(5x) + C", "tan(5x) + C", "5tan(5x) + C", "(1/5)sec(5x)tan(5x) + C"],
      answer: "(1/5)tan(5x) + C",
      explanation: "Use u-sub with u=5x, du=5dx. ∫sec²(u) (du/5) = (1/5)∫sec²(u)du = (1/5)tan(u)+C = (1/5)tan(5x)+C."
    },
    {
      number: 336,
      question: "A differential equation is considered 'linear' if:",
      grade: 11,
      options: ["It contains only first-order derivatives.", "The dependent variable (y) and its derivatives appear to the first power.", "The equation can be separated.", "It can be graphed as a straight line."],
      answer: "The dependent variable (y) and its derivatives appear to the first power.",
      explanation: "Linearity means that the unknown function y and its derivatives y', y'', etc., are not multiplied together, squared, or inside another function like sin(y) or e^y."
    },
    {
      number: 337,
      question: "Solve the separable differential equation dy/dx = 2x/y.",
      grade: 11,
      options: ["y = x² + C", "y² = 2x² + C", "ln|y| = x² + C", "y² = x + C"],
      answer: "y² = 2x² + C",
      explanation: "Separate: y dy = 2x dx. Integrate: ∫ y dy = ∫ 2x dx => y²/2 = 2(x²/2) + C₁ => y²/2 = x² + C₁ => y² = 2x² + C (where C=2C₁)."
    },
    {
      number: 338,
      question: "Find a particular solution to dy/dx = 3, given the initial condition y(1) = 5.",
      grade: 11,
      options: ["y = 3x + 2", "y = 3x + 5", "y = 3x", "y = 5"],
      answer: "y = 3x + 2",
      explanation: "General solution: y = ∫ 3 dx = 3x + C. Apply initial condition: 5 = 3(1) + C => 5 = 3 + C => C=2. Particular solution is y = 3x + 2."
    },
    {
      number: 339,
      question: "Find the general solution for y'' + y' - 6y = 0.",
      grade: 11,
      options: ["y = C₁e^(3x) + C₂e^(-2x)", "y = C₁e^(-3x) + C₂e^(2x)", "y = (C₁+C₂x)e^(-3x)", "y = C₁e^(6x) + C₂e^(x)"],
      answer: "y = C₁e^(-3x) + C₂e^(2x)",
      explanation: "Characteristic equation: m² + m - 6 = 0. Factoring: (m+3)(m-2) = 0. Roots are m₁=-3 and m₂=2. These are distinct real roots. General solution: y = C₁e^(-3x) + C₂e^(2x)."
    },
    {
      number: 340,
      question: "The motion described by m(d²x/dt²) + b(dx/dt) + kx = 0 is known as:",
      grade: 11,
      options: ["Simple Harmonic Motion", "Damped Harmonic Motion", "Forced Oscillation", "Newton's Law of Cooling"],
      answer: "Damped Harmonic Motion",
      explanation: "The term b(dx/dt) represents a damping force (proportional to velocity). Its presence turns Simple Harmonic Motion (SHM) into Damped Harmonic Motion."
    },
    {
      number: 341,
      question: "For the DE y'' - 4y' + 13y = 0, the characteristic equation has roots m = 2 ± 3i. What is the general solution?",
      grade: 11,
      options: ["y = C₁e^(2x) + C₂e^(3x)", "y = (C₁cos(3x)+C₂sin(3x))", "y = e^(2x)(C₁cos(3x)+C₂sin(3x))", "y = e^(3x)(C₁cos(2x)+C₂sin(2x))"],
      answer: "y = e^(2x)(C₁cos(3x)+C₂sin(3x))",
      explanation: "The roots are complex conjugates α ± βi with α=2 and β=3. The general solution is y = e^(αx)[C₁cos(βx)+C₂sin(βx)]."
    },
    {
      number: 342,
      question: "A general solution to a second-order ODE contains how many arbitrary constants?",
      grade: 11,
      options: ["0", "1", "2", "3"],
      answer: "2",
      explanation: "Each integration step introduces an arbitrary constant. Since a second-order DE requires two integrations to solve, its general solution will have two arbitrary constants (C₁ and C₂)."
    },
    {
      number: 343,
      question: "What kind of equation is ∂u/∂t = α (∂²u/∂x²)?",
      grade: 11,
      options: ["An Ordinary Differential Equation (ODE)", "A Partial Differential Equation (PDE)", "A characteristic equation", "A linear first-order equation"],
      answer: "A Partial Differential Equation (PDE)",
      explanation: "The equation contains partial derivatives (∂), which means the unknown function u depends on more than one independent variable (t and x). This is the definition of a PDE. It is the Heat Equation."
    },
    {
      number: 344,
      question: "A unit vector has a magnitude of...",
      grade: 11,
      options: ["0", "1", "-1", "π"],
      answer: "1",
      explanation: "By definition, a unit vector is a vector with a magnitude (or length) of exactly 1."
    },
    {
      number: 345,
      question: "Find a unit vector in the direction of v = <3, -4>.",
      grade: 11,
      options: ["<3/5, -4/5>", "<3/7, -4/7>", "<1, -1>", "<3, -4>"],
      answer: "<3/5, -4/5>",
      explanation: "First find the magnitude: |v| = √(3²+(-4)²) = √25 = 5. To get a unit vector, divide the original vector by its magnitude: v/|v| = <3/5, -4/5>."
    },
    {
      number: 346,
      question: "What is the projection of vector u = <2, 3> onto vector v = <4, 0>?",
      grade: 11,
      options: ["<2, 0>", "<2, 3>", "<4, 0>", "8"],
      answer: "<2, 0>",
      explanation: "Vector projection proj_v(u) = [(u·v)/|v|²]v.\nu·v = 2*4 + 3*0 = 8. |v|² = 4² + 0² = 16.\nproj_v(u) = (8/16)<4,0> = (1/2)<4,0> = <2,0>."
    },
    {
      number: 347,
      question: "The work done by a constant force F⃗ in moving an object along a displacement vector d⃗ is calculated as:",
      grade: 11,
      options: ["F⃗ × d⃗", "|F⃗||d⃗|", "|F⃗ × d⃗|", "F⃗ · d⃗"],
      answer: "F⃗ · d⃗",
      explanation: "Work is a scalar quantity defined by the dot product of the force and displacement vectors, W = F⃗ · d⃗."
    },
    {
      number: 348,
      question: "What is the result of k · (i × j)? (Scalar Triple Product)",
      grade: 11,
      options: ["0", "1", "-1", "j"],
      answer: "1",
      explanation: "First, i × j = k. Then k · (i × j) = k · k. The dot product of a vector with itself is its magnitude squared. |k|² = 1² = 1."
    },
    {
      number: 349,
      question: "The value of the scalar triple product u · (v × w) gives the...",
      grade: 11,
      options: ["Area of the parallelogram formed by u and v.", "Volume of the parallelepiped formed by u, v, and w.", "Area of the triangle formed by v and w.", "Angle between u and v×w."],
      answer: "Volume of the parallelepiped formed by u, v, and w.",
      explanation: "The absolute value of the scalar triple product represents the volume of the parallelepiped with the three vectors as adjacent edges."
    },
    {
      number: 350,
      question: "Find the symmetric equations for the line passing through (1, 0, 2) with direction vector <2, 3, 4>.",
      grade: 11,
      options: ["(x-1)/2 = y/3 = (z-2)/4", "x/1 = y/0 = z/2", "2(x-1) = 3y = 4(z-2)", "x=1+2t, y=3t, z=2+4t"],
      answer: "(x-1)/2 = y/3 = (z-2)/4",
      explanation: "The symmetric form is (x-x₀)/a = (y-y₀)/b = (z-z₀)/c. Substituting the values gives (x-1)/2 = (y-0)/3 = (z-2)/4."
    },
    {
      number: 351,
      question: "Find a normal vector for the plane defined by the points P(1,0,0), Q(0,1,0), and R(0,0,1).",
      grade: 11,
      options: ["<1,1,1>", "<1,0,0>", "<1,-1,0>", "<-1,-1,1>"],
      answer: "<1,1,1>",
      explanation: "Find two vectors in the plane, e.g., PQ = <-1,1,0> and PR = <-1,0,1>. The normal vector is their cross product: PQ×PR = |i j k| |-1 1 0| |-1 0 1| = i(1)-j(-1)+k(1) = <1,1,1>."
    },
    {
      number: 352,
      question: "The planes 2x-y+3z=1 and 4x-2y+6z=5 are...",
      grade: 11,
      options: ["Perpendicular", "The same plane", "Intersecting but not perpendicular", "Parallel"],
      answer: "Parallel",
      explanation: "Their normal vectors are n₁=<2,-1,3> and n₂=<4,-2,6>. Notice that n₂ = 2n₁. Since the normal vectors are parallel (scalar multiples of each other), the planes are parallel. They are not the same plane because the constant terms are not in the same ratio."
    },
    {
      number: 353,
      question: "The angle between the planes x+y=1 and y+z=1 is:",
      grade: 11,
      options: ["30°", "45°", "60°", "90°"],
      answer: "60°",
      explanation: "The angle between planes is the angle between their normal vectors. n₁=<1,1,0>, n₂=<0,1,1>. cosθ=(n₁·n₂)/(|n₁||n₂|) = (1*0+1*1+0*1)/(√(2)√(2)) = 1/2. θ = arccos(1/2) = 60°."
    },
    {
      number: 354,
      question: "Which field associates a scalar value with every point in space?",
      grade: 11,
      options: ["Vector Field", "Scalar Field", "Force Field", "Magnetic Field"],
      answer: "Scalar Field",
      explanation: "This is the definition of a scalar field, e.g., temperature or pressure in a room."
    },
    {
      number: 355,
      question: "Which physical quantity is best represented by a vector field?",
      grade: 11,
      options: ["Temperature", "Pressure", "Wind Velocity", "Density"],
      answer: "Wind Velocity",
      explanation: "Wind has both a magnitude (speed) and a direction at every point, making it a vector quantity that forms a vector field."
    },
    {
      number: 356,
      question: "Find the distance from the point (1,1,5) to the plane x+2y+2z=4.",
      grade: 11,
      options: ["3", "9", "1", "5"],
      answer: "3",
      explanation: "The distance from (x₁,y₁,z₁) to Ax+By+Cz+D=0 is |Ax₁+By₁+Cz₁+D|/√(A²+B²+C²).\nThe plane is x+2y+2z-4=0. Point is (1,1,5). A=1, B=2, C=2, D=-4.\nDistance = |1(1)+2(1)+2(5)-4|/√(1²+2²+2²) = |1+2+10-4|/√9 = |9|/3 = 3."
    },
    {
      number: 357,
      question: "The main diagonal of a square matrix consists of elements a_ij where...",
      grade: 11,
      options: ["i > j", "i < j", "i = j", "i + j = n+1"],
      answer: "i = j",
      explanation: "The main (or principal) diagonal runs from the top left to the bottom right and consists of elements where the row index equals the column index (a₁₁, a₂₂, a₃₃, ...)."
    },
    {
      number: 358,
      question: "If A is a 3x2 matrix and B is a 2x4 matrix, what is the order of matrix AB?",
      grade: 11,
      options: ["3x4", "2x2", "4x3", "Not defined"],
      answer: "3x4",
      explanation: "The inner dimensions (2 and 2) match, so the product is defined. The resulting matrix has the outer dimensions: 3 rows and 4 columns (3x4)."
    },
    {
      number: 359,
      question: "A matrix that is equal to its own transpose (A = A^T) is called:",
      grade: 11,
      options: ["Skew-symmetric", "Symmetric", "An identity matrix", "A diagonal matrix"],
      answer: "Symmetric",
      explanation: "This is the definition of a symmetric matrix, where a_ij = a_ji."
    },
    {
      number: 360,
      question: "If A and B are invertible matrices, then (AB)⁻¹ = ?",
      grade: 11,
      options: ["A⁻¹B⁻¹", "B⁻¹A⁻¹", "(BA)⁻¹", "A B"],
      answer: "B⁻¹A⁻¹",
      explanation: "This is the 'socks and shoes' rule for matrix inverses (and transposes). The order of the product is reversed when taking the inverse."
    },
    {
      number: 361,
      question: "Find the determinant of A = [[1, 0, 5], [2, 1, 6], [3, 4, 0]].",
      grade: 11,
      options: ["1", "-1", "21", "-19"],
      answer: "1",
      explanation: "Expand along the first row: 1*det([[1,6],[4,0]]) - 0... + 5*det([[2,1],[3,4]]) = 1*(0 - 24) + 5*(8 - 3) = -24 + 5*(5) = -24 + 25 = 1."
    },
    {
      number: 362,
      question: "What does Cramer's Rule calculate directly?",
      grade: 11,
      options: ["The inverse of a matrix.", "The determinant of a matrix.", "The solution to a system of linear equations.", "The rank of a matrix."],
      answer: "The solution to a system of linear equations.",
      explanation: "Cramer's rule is a method that uses determinants to find the unique solution (x, y, z, etc.) of a system of linear equations AX=B, provided det(A)≠0."
    },
    {
      number: 363,
      question: "The matrix system AX=B represents a system of linear equations. B is the...",
      grade: 11,
      options: ["Coefficient matrix", "Variable matrix", "Solution matrix", "Constant matrix"],
      answer: "Constant matrix",
      explanation: "In AX=B, A is the matrix of coefficients, X is the column matrix of variables, and B is the column matrix of constants on the right-hand side of the equations."
    },
    {
      number: 364,
      question: "An elementary row operation (ERO) for solving systems with augmented matrices is:",
      grade: 11,
      options: ["Deleting a row.", "Adding a constant to a row.", "Multiplying a row by a non-zero constant.", "Squaring a row."],
      answer: "Multiplying a row by a non-zero constant.",
      explanation: "The three EROs are: 1) swapping two rows, 2) multiplying a row by a non-zero constant, and 3) adding a multiple of one row to another row."
    },
    {
      number: 365,
      question: "The goal of Gauss-Jordan elimination is to transform the augmented matrix [A|B] into the form...",
      grade: 11,
      options: ["[I | X], where I is the identity matrix and X is the solution.", "[A⁻¹ | B]", "A row-echelon form requiring back-substitution.", "[A^T | B]"],
      answer: "[I | X], where I is the identity matrix and X is the solution.",
      explanation: "Gauss-Jordan elimination continues past the row-echelon form to create a reduced row-echelon form, which ideally is the identity matrix on the left side, allowing the solution vector to be read directly from the right side."
    },
    {
      number: 366,
      question: "A system of equations with a determinant of its coefficient matrix equal to zero might have...",
      grade: 11,
      options: ["A unique solution.", "No solution or infinitely many solutions.", "Only the trivial solution.", "No solutions, always."],
      answer: "No solution or infinitely many solutions.",
      explanation: "A zero determinant means the matrix is singular and not invertible. This corresponds to a dependent or inconsistent system, which will either have no solution (e.g., parallel lines) or infinitely many solutions (e.g., coincident lines)."
    },
    {
      number: 367,
      question: "The cofactor C_ij of a matrix is defined as:",
      grade: 11,
      options: ["The minor M_ij", "(-1)^ij M_ij", "(-1)^(i+j) M_ij", "(i+j) M_ij"],
      answer: "(-1)^(i+j) M_ij",
      explanation: "The cofactor is the signed minor. The sign is determined by (-1)^(i+j), which creates the 'checkerboard' pattern of signs."
    },
    {
      number: 368,
      question: "The set of all polynomials of degree exactly 3 is NOT a vector space because:",
      grade: 11,
      options: ["It does not contain the zero vector.", "It is not closed under addition.", "It is not closed under scalar multiplication.", "It is a vector space."],
      answer: "It is not closed under addition.",
      explanation: "The sum of two polynomials of degree exactly 3 can result in a polynomial of a lower degree. For example, (x³ + 2x) + (-x³ + 5x) = 7x, which is not degree 3. Therefore, it is not closed under addition. (The set of polynomials of degree less than or equal to 3 is a vector space)."
    },
    {
      number: 369,
      question: "In R², the span of the single non-zero vector <2, 3> is:",
      grade: 11,
      options: ["The point (2,3)", "The entire R² plane.", "The line passing through the origin and (2,3).", "A circle."],
      answer: "The line passing through the origin and (2,3).",
      explanation: "The span of a single non-zero vector consists of all its scalar multiples (c*<2,3>). This set of points forms a line passing through the origin."
    },
    {
      number: 370,
      question: "To check if a subset W is a subspace of V, one must verify:",
      grade: 11,
      options: ["Closure under addition and scalar multiplication.", "It contains the zero vector, is closed under addition, and closed under scalar multiplication.", "It is a smaller set than V.", "Every vector in W is also in V."],
      answer: "It contains the zero vector, is closed under addition, and closed under scalar multiplication.",
      explanation: "The subspace test has three conditions: must be non-empty (easiest to check by showing it has the zero vector), must be closed under vector addition, and must be closed under scalar multiplication."
    },
    {
      number: 371,
      question: "The dimension of the vector space of all 2x3 matrices is:",
      grade: 11,
      options: ["2", "3", "5", "6"],
      answer: "6",
      explanation: "The dimension is the number of elements in a basis. A basis for M₂₃ would consist of 6 matrices, each with a '1' in one position and '0's elsewhere. Thus, the dimension is 2x3=6."
    },
    {
      number: 372,
      question: "Any set of three vectors in R² must be:",
      grade: 11,
      options: ["A basis for R²", "Linearly independent", "Linearly dependent", "A spanning set for R²"],
      answer: "Linearly dependent",
      explanation: "The dimension of R² is 2. Any set containing more vectors than the dimension of the space must be linearly dependent."
    },
    {
      number: 373,
      question: "An eigenvector of a matrix A corresponding to an eigenvalue λ=0 means:",
      grade: 11,
      options: ["The transformation A sends this vector to itself.", "The transformation A sends this vector to the zero vector.", "The eigenvalue is not valid.", "The matrix is the zero matrix."],
      answer: "The transformation A sends this vector to the zero vector.",
      explanation: "The definition is Av=λv. If λ=0, then Av=0v=0. This means the eigenvector is in the null space of the transformation."
    },
    {
      number: 374,
      question: "If v is an eigenvector of A with eigenvalue 3, what is A(2v)?",
      grade: 11,
      options: ["2v", "3v", "5v", "6v"],
      answer: "6v",
      explanation: "A(2v) = 2(Av) because A is a linear transformation. Since Av=3v, we have 2(Av) = 2(3v) = 6v."
    },
    {
      number: 375,
      question: "A function T: V->W is a linear transformation if it preserves:",
      grade: 11,
      options: ["Vector magnitudes", "Vector addition and scalar multiplication", "The zero vector", "Angles between vectors"],
      answer: "Vector addition and scalar multiplication",
      explanation: "The definition of a linear transformation is T(u+v)=T(u)+T(v) and T(cu)=cT(u). These are the properties of preserving vector addition and scalar multiplication."
    },
    {
      number: 376,
      question: "In a standard deck of 52 cards, what is the probability of drawing a King, given that the card drawn is a face card (King, Queen, or Jack)?",
      grade: 11,
      options: ["1/13", "1/3", "4/52", "12/52"],
      answer: "1/3",
      explanation: "There are 12 face cards in total (4 Kings, 4 Queens, 4 Jacks). This is our new sample space. The number of Kings within this space is 4. P(King | Face Card) = (Favorable Outcomes) / (Total Outcomes in new sample) = 4 / 12 = 1/3."
    },
    {
      number: 377,
      question: "Bayes' Theorem is used to calculate:",
      grade: 11,
      options: ["The probability of an intersection of events.", "The probability of a union of events.", "A posterior probability based on a prior probability and new evidence.", "The expected value of a random variable."],
      answer: "A posterior probability based on a prior probability and new evidence.",
      explanation: "Bayes' Theorem provides a mathematical way to update our beliefs (prior probability) in light of new data or evidence, resulting in a revised or posterior probability."
    },
    {
      number: 378,
      question: "A factory has two machines, A and B. Machine A produces 60% of items, with 2% defective. Machine B produces 40% of items, with 3% defective. What is the total probability that a randomly selected item is defective?",
      grade: 11,
      options: ["5%", "2.5%", "2.4%", "2.6%"],
      answer: "2.4%",
      explanation: "Use the Law of Total Probability: P(Defective) = P(Defective|A)P(A) + P(Defective|B)P(B).\nP(D) = (0.02)(0.60) + (0.03)(0.40) = 0.012 + 0.012 = 0.024 or 2.4%."
    },
    {
      number: 379,
      question: "In the context of the previous question, if an item is found to be defective, what is the probability it came from Machine A?",
      grade: 11,
      options: ["0.5", "0.6", "0.012", "0.4"],
      answer: "0.5",
      explanation: "Use Bayes' Theorem: P(A|D) = [P(D|A)P(A)] / P(D).\nP(A|D) = [(0.02)(0.60)] / 0.024 = 0.012 / 0.024 = 0.5 or 50%."
    },
    {
      number: 380,
      question: "A variable that can take on any value in an interval is called:",
      grade: 11,
      options: ["A discrete random variable", "A continuous random variable", "A categorical variable", "A parameter"],
      answer: "A continuous random variable",
      explanation: "This is the definition of a continuous random variable (e.g., height, time)."
    },
    {
      number: 381,
      question: "What is the variance of a binomial distribution with n=20 and p=0.4?",
      grade: 11,
      options: ["8", "4.8", "12", "2.19"],
      answer: "4.8",
      explanation: "Variance σ² = npq = np(1-p) = 20(0.4)(1-0.4) = 8(0.6) = 4.8."
    },
    {
      number: 382,
      question: "When can the Poisson distribution be used to approximate the Binomial distribution?",
      grade: 11,
      options: ["When n is large and p is close to 0.5.", "When n is small and p is large.", "When n is large and p is small.", "When np > nq."],
      answer: "When n is large and p is small.",
      explanation: "The Poisson distribution is a good approximation for the Binomial when the number of trials n is large and the probability of success p is small (often called a 'rare event' scenario). A common rule of thumb is n ≥ 20 and p ≤ 0.05."
    },
    {
      number: 383,
      question: "What is the key parameter for the Exponential distribution?",
      grade: 11,
      options: ["n, the number of trials", "p, the probability of success", "λ, the rate parameter", "μ and σ, the mean and standard deviation"],
      answer: "λ, the rate parameter",
      explanation: "The exponential distribution, which models the time between events in a Poisson process, is defined by a single parameter λ (lambda), which is the average rate of event occurrences."
    },
    {
      number: 384,
      question: "A machine produces items with a 10% defect rate. What is the probability that in a sample of 10 items, exactly one is defective?",
      grade: 11,
      options: ["(0.1)¹(0.9)⁹", "10(0.1)¹(0.9)⁹", "¹⁰C₂(0.1)²(0.9)⁸", "(0.9)¹⁰"],
      answer: "10(0.1)¹(0.9)⁹",
      explanation: "This is a binomial problem with n=10, p=0.1. P(X=1) = ¹⁰C₁ (0.1)¹ (0.9)¹⁰⁻¹ = 10(0.1)¹(0.9)⁹."
    },
    {
      number: 385,
      question: "The graph of a continuous Uniform distribution f(x) from x=a to x=b looks like a:",
      grade: 11,
      options: ["Bell curve", "Skewed curve", "Rectangle", "Triangle"],
      answer: "Rectangle",
      explanation: "The probability density function is constant over the interval [a,b], f(x) = 1/(b-a), and zero elsewhere. This creates a rectangular shape."
    },
    {
      number: 386,
      question: "The mean of an exponential distribution with rate parameter λ = 0.2 is:",
      grade: 11,
      options: ["0.2", "5", "0.04", "25"],
      answer: "5",
      explanation: "The mean of an exponential distribution is E(X) = 1/λ. So, E(X) = 1/0.2 = 5."
    },
    {
      number: 387,
      question: "The standard normal distribution has a mean and standard deviation of:",
      grade: 11,
      options: ["μ=1, σ=0", "μ=1, σ=1", "μ=0, σ=1", "μ=0, σ=0"],
      answer: "μ=0, σ=1",
      explanation: "By definition, the standard normal distribution, denoted Z, is a normal distribution that has been standardized to have a mean of 0 and a standard deviation of 1."
    },
    {
      number: 388,
      question: "What is the value of E(X²) if E(X) = 5 and Var(X) = 3?",
      grade: 11,
      options: ["8", "16", "22", "28"],
      answer: "28",
      explanation: "The computational formula for variance is Var(X) = E(X²) - [E(X)]².\n3 = E(X²) - (5)² => 3 = E(X²) - 25 => E(X²) = 28."
    },
    {
      number: 389,
      question: "Two events A and B are mutually exclusive. If P(A)=0.4 and P(B)=0.3, what is P(A∪B)?",
      grade: 11,
      options: ["0.1", "0.12", "0.7", "0.58"],
      answer: "0.7",
      explanation: "For mutually exclusive events, P(A∩B) = 0. The addition rule is P(A∪B) = P(A) + P(B) - P(A∩B) = 0.4 + 0.3 - 0 = 0.7."
    },
    {
      number: 390,
      question: "If P(X≤k) is the cumulative distribution function (CDF), then the probability P(a < X ≤ b) is:",
      grade: 11,
      options: ["P(X≤b) / P(X≤a)", "P(X≤b) - P(X≤a)", "P(X≤a) - P(X≤b)", "P(X≤b) + P(X≤a)"],
      answer: "P(X≤b) - P(X≤a)",
      explanation: "The probability of being in an interval is the cumulative probability up to the upper bound minus the cumulative probability up to the lower bound."
    },
    {
      number: 391,
      question: "The 68-95-99.7 rule for normal distributions states that 95% of data falls within how many standard deviations of the mean?",
      grade: 11,
      options: ["1", "2", "3", "1.96"],
      answer: "2",
      explanation: "The empirical rule states approximately 68% of data is within ±1σ, 95% within ±2σ, and 99.7% within ±3σ of the mean."
    },
    {
      number: 392,
      question: "What happens to the width of a confidence interval as the sample size (n) increases?",
      grade: 11,
      options: ["It increases.", "It decreases.", "It stays the same.", "It becomes negative."],
      answer: "It decreases.",
      explanation: "The formula for the margin of error has √n in the denominator. As n increases, the margin of error decreases, making the confidence interval narrower and more precise."
    },
    {
      number: 393,
      question: "A 99% confidence interval will be ___ a 90% confidence interval for the same data.",
      grade: 11,
      options: ["wider than", "narrower than", "the same width as", "centered differently than"],
      answer: "wider than",
      explanation: "To be more confident (99% vs 90%) that you have captured the true parameter, you need to cast a wider net. The critical value (Z* or t*) is larger for a higher confidence level, resulting in a wider interval."
    },
    {
      number: 394,
      question: "In a hypothesis test, the p-value is 0.25. At a 5% significance level, this means:",
      grade: 11,
      options: ["We have strong evidence against the null hypothesis.", "We reject the null hypothesis.", "We fail to reject the null hypothesis.", "The alternative hypothesis is true."],
      answer: "We fail to reject the null hypothesis.",
      explanation: "The p-value (0.25) is greater than the significance level α (0.05). When p-value > α, we fail to reject the null hypothesis. There is not enough evidence to support the alternative."
    },
    {
      number: 395,
      question: "A Type II error in hypothesis testing is:",
      grade: 11,
      options: ["Rejecting a true H₀", "Failing to reject a true H₀", "Rejecting a false H₀", "Failing to reject a false H₀"],
      answer: "Failing to reject a false H₀",
      explanation: "A Type II error is a 'missed opportunity'. It's the error of failing to detect an effect that is actually there, i.e., not rejecting the null hypothesis when it is, in fact, false."
    },
    {
      number: 396,
      question: "The degrees of freedom for a t-test of a single population mean with a sample of size n=20 is:",
      grade: 11,
      options: ["20", "19", "18", "Not applicable"],
      answer: "19",
      explanation: "For a one-sample t-test, the degrees of freedom (df) are n - 1. So, df = 20 - 1 = 19."
    },
    {
      number: 397,
      question: "For a chi-square goodness-of-fit test with 5 categories, the degrees of freedom are:",
      grade: 11,
      options: ["5", "4", "2.5", "Dependent on sample size."],
      answer: "4",
      explanation: "For a goodness-of-fit test, df = (number of categories) - 1. So, df = 5 - 1 = 4."
    },
    {
      number: 398,
      question: "If a linear regression model has an r² value of 0.64, what is the correlation coefficient, r?",
      grade: 11,
      options: ["0.8", "0.41", "0.64", "Cannot be determined"],
      answer: "Cannot be determined",
      explanation: "r² = 0.64 means r = ±√0.64 = ±0.8. We know the strength of the correlation is 0.8, but without seeing the scatterplot or the sign of the slope, we cannot determine if the relationship is positive or negative."
    },
    {
      number: 399,
      question: "The act of using a regression line to estimate a y-value for an x-value that is outside the range of the original data is called:",
      grade: 11,
      options: ["Interpolation", "Extrapolation", "A valid prediction", "Standard error"],
      answer: "Extrapolation",
      explanation: "Extrapolation is predicting outside the observed range of x-values. It is generally unreliable as the linear trend may not continue. Interpolation is predicting within the range."
    },
    {
      number: 400,
      question: "In a chi-square test for independence, the null hypothesis states that the two categorical variables are:",
      grade: 11,
      options: ["Associated", "Dependent", "Correlated", "Independent"],
      answer: "Independent",
      explanation: "The null hypothesis for this test is that there is no relationship or association between the two variables, i.e., they are independent. The alternative hypothesis is that they are dependent (associated)."
    },
    {
      number: 401,
      question: "If a z-test statistic for a two-tailed test is -2.15, and the critical values are ±1.96, what is the conclusion?",
      grade: 12,
      options: ["Reject H₀", "Fail to reject H₀", "Accept H₀", "Reduce the sample size."],
      answer: "Reject H₀",
      explanation: "The test statistic (-2.15) falls in the rejection region, as it is more extreme than the critical value of -1.96 (i.e., -2.15 < -1.96)."
    },
    {
      number: 402,
      question: "What is arg(1)?",
      grade: 12,
      options: ["0", "π", "π/2", "Not defined"],
      answer: "0",
      explanation: "The number 1 lies on the positive real axis. Its angle with the positive real axis is 0 radians."
    },
    {
      number: 403,
      question: "Find the coefficient of x⁶ in the expansion of (1 - x²)⁸.",
      grade: 12,
      options: ["28", "-28", "56", "-56"],
      answer: "-56",
      explanation: "We need the term with (x²)³. This occurs when r=3 in the expansion using (y)ʳ.\nThe term is ⁸C₃ (1)⁸⁻³ (-x²)³ = 56 * 1 * (-x⁶) = -56x⁶. The coefficient is -56."
    },
    {
      number: 404,
      question: "A polynomial has a root x=2 with multiplicity 3. The equation could be:",
      grade: 12,
      options: ["(x-2)² = 0", "x-2 = 0", "(x-3)² = 0", "(x-2)³(x+1) = 0"],
      answer: "(x-2)³(x+1) = 0",
      explanation: "A root of x=2 with multiplicity 3 means the factor (x-2) appears 3 times. Option D contains the factor (x-2)³."
    },
    {
      number: 405,
      question: "Solve e^(x+1) = 1.",
      grade: 12,
      options: ["x = 0", "x = 1", "x = -1", "x = e"],
      answer: "x = -1",
      explanation: "For e^y = 1, y must be 0. So, we need x+1=0, which means x=-1."
    },
    {
      number: 406,
      question: "Find lim (h→0) [ (x+h)³ - x³ ] / h.",
      grade: 12,
      options: ["x³", "3x²", "3x", "0"],
      answer: "3x²",
      explanation: "This is the definition of the derivative of the function f(x)=x³. Using the power rule, the derivative is 3x²."
    },
    {
      number: 407,
      question: "Evaluate ∫[0,π] sin(x) dx.",
      grade: 12,
      options: ["0", "1", "2", "-2"],
      answer: "2",
      explanation: "∫sin(x)dx = -cos(x). Evaluating: [-cos(x)]_[0,π] = (-cos(π)) - (-cos(0)) = (-(-1)) - (-1) = 1 + 1 = 2."
    },
    {
      number: 408,
      question: "Find the characteristic equation for y'' - 16y = 0.",
      grade: 12,
      options: ["m² - 16 = 0", "m² - 16m = 0", "m - 16 = 0", "m² + 16 = 0"],
      answer: "m² - 16 = 0",
      explanation: "y'' corresponds to m² and y corresponds to 1 (or c=-16). The y' term is missing, so there is no m term. The equation is m² - 16 = 0."
    },
    {
      number: 409,
      question: "What is i · k? (dot product of standard unit vectors)",
      grade: 12,
      options: ["j", "-j", "1", "0"],
      answer: "0",
      explanation: "i=<1,0,0> and k=<0,0,1>. The standard unit vectors are orthogonal. Therefore, their dot product is 0."
    },
    {
      number: 410,
      question: "If A = [[2, 1], [4, 2]], find its inverse.",
      grade: 12,
      options: ["[[2, -1], [-4, 2]]", "Does not exist", "[[1/2, -1/4], [-1, 1]]", "[[-2, 1], [4, -2]]"],
      answer: "Does not exist",
      explanation: "The determinant is det(A) = (2)(2) - (1)(4) = 4 - 4 = 0. A matrix with a zero determinant is singular and does not have an inverse."
    },
    {
      number: 411,
      question: "Which of the following sets could be a basis for R²?",
      grade: 12,
      options: ["{<1,1>}", "{<1,0>, <0,1>, <1,1>}", "{<2,3>, <4,6>}", "{<1,2>, <3,1>}"],
      answer: "{<1,2>, <3,1>}",
      explanation: "A basis for R² must contain exactly two linearly independent vectors.\nA: only one vector, cannot span R².\nB: three vectors, must be linearly dependent.\nC: The vectors are linearly dependent (<4,6>=2*<2,3>).\nD: Two vectors that are not scalar multiples of each other, so they are linearly independent and form a basis."
    },
    {
      number: 412,
      question: "A fair die is rolled. What is the probability of rolling a number greater than 4?",
      grade: 12,
      options: ["1/6", "2/6 (1/3)", "3/6 (1/2)", "4/6 (2/3)"],
      answer: "2/6 (1/3)",
      explanation: "The outcomes greater than 4 are {5, 6}. There are 2 favorable outcomes out of 6 possible outcomes. P = 2/6 = 1/3."
    },
    {
      number: 413,
      question: "In the equation for a regression line, ŷ = a + bx, 'b' represents the:",
      grade: 12,
      options: ["Y-intercept", "Slope", "Correlation coefficient", "Predicted y value"],
      answer: "Slope",
      explanation: "In the standard form of a linear equation, the coefficient of the independent variable x (here 'b') represents the slope of the line."
    },
    {
      number: 414,
      question: "Express i/(1-i) in the form a+bi.",
      grade: 12,
      options: ["1/2 - i/2", "-1/2 + i/2", "1/2 + i/2", "-1/2 - i/2"],
      answer: "-1/2 + i/2",
      explanation: "[i(1+i)]/[(1-i)(1+i)] = [i+i²]/[1²+1²] = [i-1]/2 = -1/2 + i/2."
    },
    {
      number: 415,
      question: "Find a critical point for the function f(x) = x³ - 3x + 5.",
      grade: 12,
      options: ["x=0", "x=3", "x=1 and x=-1", "x=√3"],
      answer: "x=1 and x=-1",
      explanation: "Critical points occur where f'(x)=0. f'(x) = 3x² - 3. Set to zero: 3x²-3=0 => 3x²=3 => x²=1 => x=±1."
    },
    {
      number: 416,
      question: "The square of any purely imaginary number (bi, where b≠0) is always:",
      grade: 12,
      options: ["Positive real", "Negative real", "Complex", "Zero"],
      answer: "Negative real",
      explanation: "(bi)² = b²i² = b²(-1) = -b². Since b≠0, b² is a positive real number, so -b² is a negative real number."
    },
    {
      number: 417,
      question: "Find z such that 2z + z̅ = 9 - 2i.",
      grade: 12,
      options: ["3 + 2i", "3 - 2i", "3 - i", "9/2 - 2i"],
      answer: "3 - 2i",
      explanation: "Let z=a+bi. Then z̅=a-bi.\n2(a+bi) + (a-bi) = 9-2i\n2a+2bi + a-bi = 9-2i\n(3a) + (b)i = 9 - 2i.\nEquating real and imaginary parts: 3a=9 => a=3. b=-2. So z=3-2i."
    },
    {
      number: 418,
      question: "The argument of z is φ. What is the argument of 1/z?",
      grade: 12,
      options: ["φ", "-φ", "1/φ", "π-φ"],
      answer: "-φ",
      explanation: "1/z = z⁻¹. By De Moivre's theorem for division/powers, the argument of zⁿ is nφ. So the argument of z⁻¹ is -1*φ = -φ."
    },
    {
      number: 419,
      question: "If z is a root of the polynomial equation ax³+bx²+cx+d=0 with real coefficients, then ___ must also be a root.",
      grade: 12,
      options: ["-z", "1/z", "z̅", "|z|"],
      answer: "z̅",
      explanation: "The Complex Conjugate Root Theorem states that for polynomials with real coefficients, complex roots must occur in conjugate pairs. If z is a root, z̅ must be a root."
    },
    {
      number: 420,
      question: "The inequality |z - 3| < 2 describes:",
      grade: 12,
      options: ["The exterior of a circle with center (3,0) and radius 2.", "The interior of a circle with center (3,0) and radius 2.", "The circle itself with center (3,0) and radius 2.", "A line segment."],
      answer: "The interior of a circle with center (3,0) and radius 2.",
      explanation: "The inequality describes the set of all points z whose distance from the point 3 (i.e., 3+0i) is less than 2. This is the interior of a circle (a disk without the boundary)."
    },
    {
      number: 421,
      question: "Evaluate |(3+4i)/(5-12i)|.",
      grade: 12,
      options: ["1/5", "5/13", "1", "13/5"],
      answer: "5/13",
      explanation: "Use the property |z₁/z₂| = |z₁|/|z₂|.\n|3+4i| = √(3²+4²) = 5.\n|5-12i| = √(5²+(-12)²) = √(25+144)=√169=13.\nThe result is 5/13."
    },
    {
      number: 422,
      question: "Convert z = 4e^(iπ/3) to Cartesian form.",
      grade: 12,
      options: ["2 + 2i√3", "2√3 + 2i", "4√3 + 4i", "4 + 4i√3"],
      answer: "2 + 2i√3",
      explanation: "z = 4(cos(π/3) + isin(π/3)) = 4(1/2 + i(√3/2)) = 2 + 2i√3."
    },
    {
      number: 423,
      question: "Which of the following is one of the 4th roots of -1?",
      grade: 12,
      options: ["i", "-i", "1/√2 + i/√2", "1"],
      answer: "1/√2 + i/√2",
      explanation: "-1 = 1(cosπ + isinπ). Roots are w_k = 1[cos((π+2kπ)/4)+isin((π+2kπ)/4)]. For k=0, w₀ = cos(π/4)+isin(π/4) = 1/√2 + i/√2."
    },
    {
      number: 424,
      question: "The term with the greatest coefficient in the expansion of (x+y)¹⁰ is:",
      grade: 12,
      options: ["The 1st term", "The 11th term", "The 6th term", "The 5th term"],
      answer: "The 6th term",
      explanation: "For (x+y)ⁿ where n is even, the binomial coefficient nCr is largest in the middle, at r=n/2. For n=10, the largest coefficient is ¹⁰C₅. This is the coefficient of the (5+1)=6th term."
    },
    {
      number: 425,
      question: "If (1+kx)⁶ = 1 - 12x + ..., find the value of k.",
      grade: 12,
      options: ["-2", "2", "-6", "6"],
      answer: "-2",
      explanation: "Expansion is 1 + 6(kx) + ... = 1 + 6kx + ...\nEquating coefficients: 6k = -12 => k = -2."
    },
    {
      number: 426,
      question: "Find the coefficient of x³ in the expansion of (2 - x/2)⁸.",
      grade: 12,
      options: ["-64", "-128", "-224", "-28"],
      answer: "-224",
      explanation: "The general term is T_(r+1) = ⁸Cᵣ(2)⁸⁻ʳ(-x/2)ʳ. For the term in x³, we need r=3.\nT₄ = ⁸C₃ (2)⁵ (-x/2)³ = 56 * 32 * (-x³/8) = 56 * 4 * (-x³) = -224x³. The coefficient is -224."
    },
    {
      number: 427,
      question: "Using the first two terms of the expansion for 1/√(4+x), approximate 1/√4.08.",
      grade: 12,
      options: ["0.49", "0.495", "0.51", "0.505"],
      answer: "0.495",
      explanation: "(4+x)⁻¹/² = 4⁻¹/²(1+x/4)⁻¹/² = (1/2)(1+x/4)⁻¹/².\n≈ (1/2)[1 + (-1/2)(x/4)] = (1/2)[1 - x/8].\nHere x=0.08. So, (1/2)[1 - 0.08/8] = (1/2)[1 - 0.01] = (1/2)[0.99] = 0.495."
    },
    {
      number: 428,
      question: "What is the sum of the coefficients of the expansion of (3x - 2y)⁴?",
      grade: 12,
      options: ["1", "81", "16", "625"],
      answer: "1",
      explanation: "To find the sum of coefficients, substitute x=1 and y=1.\n(3(1) - 2(1))⁴ = (3-2)⁴ = 1⁴ = 1."
    },
    {
      number: 429,
      question: "The Taylor series for f(x) expanded about x=a begins f(a) + f'(a)(x-a) + ... What is the next term?",
      grade: 12,
      options: ["f''(a)(x-a)²", "f''(a)(x-a)² / 2", "f''(a)(x-a)² / 3!", "f''(x)(x-a)² / 2"],
      answer: "f''(a)(x-a)² / 2",
      explanation: "The Taylor series term for the k-th derivative is (f^(k)(a)/k!)(x-a)^k. For k=2, this is (f''(a)/2!)(x-a)², which is f''(a)(x-a)²/2."
    },
    {
      number: 430,
      question: "The Maclaurin series for ln(1+x) is valid for:",
      grade: 12,
      options: ["All real x", "|x| < 1", "-1 < x ≤ 1", "x > -1"],
      answer: "-1 < x ≤ 1",
      explanation: "The Maclaurin series for ln(1+x) converges for -1 < x < 1. At x=1, the series becomes the convergent alternating harmonic series. At x=-1, it's the divergent harmonic series. So the interval of convergence is (-1, 1]."
    },
    {
      number: 431,
      question: "Given P(x) = (x-1)(x-2)(x-3), what is the remainder when P(x) is divided by (x-4)?",
      grade: 12,
      options: ["0", "-6", "6", "24"],
      answer: "6",
      explanation: "By the Remainder Theorem, the remainder is P(4).\nP(4) = (4-1)(4-2)(4-3) = (3)(2)(1) = 6."
    },
    {
      number: 432,
      question: "The sum of the roots of a cubic ax³+bx²+cx+d=0 is -b/a. The product of the roots is:",
      grade: 12,
      options: ["c/a", "-c/a", "d/a", "-d/a"],
      answer: "-d/a",
      explanation: "For a cubic, the product of the roots (r₁r₂r₃) is equal to -d/a."
    },
    {
      number: 433,
      question: "Find all real roots of the equation x⁴ - 81 = 0.",
      grade: 12,
      options: ["3", "-3", "3, -3", "3, -3, 3i, -3i"],
      answer: "3, -3",
      explanation: "x⁴ - 81 = (x² - 9)(x² + 9) = 0.\nx² - 9 = 0 => (x-3)(x+3)=0 => x=3, x=-3.\nx² + 9 = 0 => x²=-9 => x=±3i.\nThe question asks for only the real roots."
    },
    {
      number: 434,
      question: "The vertical asymptote of y = x/(x²-4) are:",
      grade: 12,
      options: ["x=2", "x=-2", "x=2 and x=-2", "y=0"],
      answer: "x=2 and x=-2",
      explanation: "Vertical asymptotes occur where the denominator is zero. x²-4=0 => (x-2)(x+2)=0 => x=2 and x=-2."
    },
    {
      number: 435,
      question: "Find the x-intercepts of y = (x² - 5x + 6) / (x + 1).",
      grade: 12,
      options: ["-1", "2 and 3", "-2 and -3", "6"],
      answer: "2 and 3",
      explanation: "X-intercepts occur where the numerator is zero. x²-5x+6=0 => (x-2)(x-3)=0. So x=2 and x=3."
    },
    {
      number: 436,
      question: "When performing synthetic division on x³-8 by x-2, the initial setup line is:",
      grade: 12,
      options: ["2 | 1 0 0 -8", "-2 | 1 -8", "2 | 1 -8", "2 | 1 0 -8"],
      answer: "2 | 1 0 0 -8",
      explanation: "The polynomial x³-8 is x³ + 0x² + 0x - 8. You must include zero coefficients for the missing terms. The coefficients are 1, 0, 0, -8. The divisor x-2 means c=2."
    },
    {
      number: 437,
      question: "What is log₅(1)?",
      grade: 12,
      options: ["5", "1", "0", "undefined"],
      answer: "0",
      explanation: "For any valid base b, b⁰ = 1. Therefore, log_b(1) = 0."
    },
    {
      number: 438,
      question: "The graph of an exponential function f(x) = b^x (where b > 0, b ≠ 1) always passes through the point:",
      grade: 12,
      options: ["(0, 0)", "(1, 1)", "(1, 0)", "(0, 1)"],
      answer: "(0, 1)",
      explanation: "For any base b, b⁰ = 1. So, when x=0, y=1. The graph always contains the y-intercept (0, 1)."
    },
    {
      number: 439,
      question: "Solve for x: 2 log(x) = log(9).",
      grade: 12,
      options: ["x = 3", "x = 4.5", "x = 81", "x = 9"],
      answer: "x = 3",
      explanation: "Using the power rule, log(x²) = log(9). If the logs are equal, their arguments are equal: x² = 9. Since the argument of a log must be positive, x = 3 (we reject x=-3)."
    },
    {
      number: 440,
      question: "Which expression is undefined in the real number system?",
      grade: 12,
      options: ["log(100)", "ln(e)", "log(0)", "log(0.5)"],
      answer: "log(0)",
      explanation: "The argument of a logarithm must be a positive number. The logarithm of zero or a negative number is undefined in the real number system."
    },
    {
      number: 441,
      question: "An earthquake measures 6 on the Richter scale, and another measures 4. The intensity of the first is how many times greater than the second? (Richter scale is logarithmic base 10).",
      grade: 12,
      options: ["2", "1.5", "20", "100"],
      answer: "100",
      explanation: "The Richter scale is a measure of magnitude M=log(I/I₀). A difference of 1 on the scale means a 10-fold increase in intensity (I). A difference of 2 (from 4 to 6) means a 10² = 100-fold increase in intensity."
    },
    {
      number: 442,
      question: "If log_a(x)=2 and log_a(y)=3, find log_a(xy²).",
      grade: 12,
      options: ["8", "12", "7", "9"],
      answer: "8",
      explanation: "log_a(xy²) = log_a(x) + log_a(y²) = log_a(x) + 2log_a(y) = 2 + 2(3) = 2 + 6 = 8."
    },
    // Continuation of the Questions array from the easyGT object

    {
      number: 443,
      question: "The decay model N(t) = N₀e^(-λt) is given. What does λ represent?",
      grade: 12,
      options: ["The half-life", "The initial amount", "The amount remaining", "The decay constant"],
      answer: "The decay constant",
      explanation: "λ (lambda) is the positive constant that determines the rate of decay. It is related to the half-life by t½ = ln(2)/λ."
    },
    {
      number: 444,
      question: "lim (x→-∞) [x³ + 2x - 1]",
      grade: 12,
      options: ["∞", "-∞", "0", "Does not exist"],
      answer: "-∞",
      explanation: "The end behavior of a polynomial is determined by its leading term. As x becomes a large negative number, x³ also becomes a large negative number."
    },
    {
      number: 445,
      question: "What is the derivative of y = (x² + 1)⁻¹?",
      grade: 12,
      options: ["-1(x²+1)⁻²", "-2x(x²+1)⁻²", "(x²+1)⁻²", "-2x"],
      answer: "-2x(x²+1)⁻²",
      explanation: "Using the chain rule: y' = -1(x²+1)⁻² * d/dx(x²+1) = -1(x²+1)⁻² * (2x) = -2x(x²+1)⁻²."
    },
    {
      number: 446,
      question: "The derivative of y = ln(kx) for a constant k is:",
      grade: 12,
      options: ["k/x", "1/(kx)", "1/x", "ln(k) + 1/x"],
      answer: "1/x",
      explanation: "Method 1: Use log properties. y = ln(k) + ln(x). The derivative of ln(k) (a constant) is 0, and derivative of ln(x) is 1/x. So y'=1/x.\nMethod 2: Chain rule. y' = (1/kx) * d/dx(kx) = (1/kx) * k = 1/x."
    },
    {
      number: 447,
      question: "At a point of inflection, which of the following MUST be true?",
      grade: 12,
      options: ["The first derivative is zero.", "The second derivative is zero.", "The concavity of the graph changes.", "The function is at a maximum or minimum."],
      answer: "The concavity of the graph changes.",
      explanation: "This is the definition of a point of inflection. The second derivative being zero is a necessary condition (for smooth functions), but not sufficient; the concavity must actually change sign."
    },
    {
      number: 448,
      question: "A particle's position is given by s(t) = t³ - 6t² + 9t. When is the particle at rest?",
      grade: 12,
      options: ["t = 1 and t = 3", "t = 2", "t = 0", "Never"],
      answer: "t = 1 and t = 3",
      explanation: "The particle is at rest when its velocity is zero. Velocity v(t) = s'(t) = 3t² - 12t + 9.\nSet v(t)=0: 3(t² - 4t + 3) = 0 => 3(t-1)(t-3) = 0. So t=1 and t=3."
    },
    {
      number: 449,
      question: "For the function in the previous question, what is the acceleration at t=2?",
      grade: 12,
      options: ["0", "-6", "6", "12"],
      answer: "0",
      explanation: "Acceleration a(t) = v'(t) = s''(t) = 6t - 12.\na(2) = 6(2) - 12 = 12 - 12 = 0."
    },
    {
      number: 450,
      question: "Find the derivative of y = x ln(x).",
      grade: 12,
      options: ["1", "ln(x)", "1 + ln(x)", "1/x"],
      answer: "1 + ln(x)",
      explanation: "Using the product rule: y' = (1)(ln x) + (x)(1/x) = ln(x) + 1."
    },
    {
      number: 451,
      question: "Find dy/dt if y = x² and x = 2t + 1 (Related Rates/Chain Rule).",
      grade: 12,
      options: ["4t+2", "2x", "2(4t+2)", "4(2t+1)"],
      answer: "4(2t+1)",
      explanation: "By the chain rule, dy/dt = (dy/dx)(dx/dt).\ndy/dx = 2x. dx/dt = 2.\ndy/dt = (2x)(2) = 4x. Substitute x=2t+1 back in: dy/dt = 4(2t+1)."
    },
    {
      number: 452,
      question: "The first derivative test for a local maximum at x=c requires the sign of f'(x) to change from...",
      grade: 12,
      options: ["positive to negative.", "negative to positive.", "positive to positive.", "negative to negative."],
      answer: "positive to negative.",
      explanation: "A local maximum occurs where the function stops increasing (f'>0) and starts decreasing (f'<0)."
    },
    {
      number: 453,
      question: "If F(x) = ∫[1,x] t² dt, what is F'(x)?",
      grade: 12,
      options: ["x²", "x²/2", "2x", "x² - 1"],
      answer: "x²",
      explanation: "This is an application of the Fundamental Theorem of Calculus, Part 1: d/dx [∫[a,x] f(t)dt] = f(x). Here, f(t)=t², so F'(x) = x²."
    },
    {
      number: 454,
      question: "The expression ∫ f(x) dx is called:",
      grade: 12,
      options: ["A definite integral", "A proper integral", "An indefinite integral", "An improper integral"],
      answer: "An indefinite integral",
      explanation: "An integral without limits of integration is an indefinite integral, and its result is a family of functions (an antiderivative + C)."
    },
    {
      number: 455,
      question: "Find the average value of f(x) = 3x² on the interval [0, 2].",
      grade: 12,
      options: ["8", "4", "2", "12"],
      answer: "4",
      explanation: "Avg Value = (1/2) ∫[0,2] 3x² dx = (1/2) [x³]_[0,2] = (1/2)(2³ - 0³) = (1/2)(8) = 4."
    },
    {
      number: 456,
      question: "From x=a to x=b, the area of the region between y=f(x) and the x-axis that is above the axis is 10, and the area of the region below the axis is 3. Find ∫[a,b] f(x) dx.",
      grade: 12,
      options: ["13", "7", "-3", "10"],
      answer: "7",
      explanation: "The definite integral represents net signed area. Area above is positive (+10), area below is negative (-3). The net area is 10 - 3 = 7."
    },
    {
      number: 457,
      question: "Which integral represents the volume when the region between y=x² and y=√x is rotated about the x-axis?",
      grade: 12,
      options: ["∫[0,1] π (√x - x²)² dx", "∫[0,1] π (x - x⁴) dx", "∫[0,1] 2π (√x - x²) dx", "∫[0,1] π (x² - √x) dx"],
      answer: "∫[0,1] π (x - x⁴) dx",
      explanation: "Using the Washer Method. First find intersection points: x²=√x => x⁴=x => x⁴-x=0 => x(x³-1)=0. Intersections at x=0, x=1. In [0,1], √x is the upper curve (outer radius R(x)) and x² is the lower curve (inner radius r(x)).\nVolume = ∫[0,1] π([R(x)]² - [r(x)]²)dx = ∫[0,1] π((√x)² - (x²)²)dx = ∫[0,1] π(x - x⁴)dx."
    },
    {
      number: 458,
      question: "Use integration by parts to evaluate ∫ ln(x) dx.",
      grade: 12,
      options: ["x ln(x) - x + C", "1/x + C", "x ln(x) + C", "ln(x)/x + C"],
      answer: "x ln(x) - x + C",
      explanation: "Let u = ln(x) and dv = dx. Then du = (1/x)dx and v = x.\n∫ln(x)dx = uv - ∫vdu = ln(x)x - ∫x(1/x)dx = xln(x) - ∫1dx = xln(x) - x + C."
    },
    {
      number: 459,
      question: "The partial fraction decomposition of 1 / (x²(x-1)) is of the form:",
      grade: 12,
      options: ["A/x + B/(x-1)", "A/x² + B/(x-1)", "Ax+B / x² + C/(x-1)", "A/x + B/x² + C/(x-1)"],
      answer: "A/x + B/x² + C/(x-1)",
      explanation: "For a repeated linear factor like x², you need a term for each power up to the multiplicity. So you need a term for x and a term for x². The distinct linear factor (x-1) gets its own term."
    },
    {
      number: 460,
      question: "The general solution of dy/dx = k is:",
      grade: 12,
      options: ["y = kx + C", "y = kx²/2 + C", "y = e^(kx) + C", "y = ln|x| + C"],
      answer: "y = kx + C",
      explanation: "This is a simple separation of variables: dy = k dx. Integrating both sides gives y = kx + C, the equation of a family of lines with slope k."
    },
    {
      number: 461,
      question: "The standard form for a first-order linear DE solved with an integrating factor is y' + P(x)y = Q(x). The integrating factor is e^(∫P(x)dx). After multiplying by the IF, the left side of the equation becomes:",
      grade: 12,
      options: ["d/dx [y]", "d/dx [IF * Q(x)]", "d/dx [IF * y]", "IF * y'"],
      answer: "d/dx [IF * y]",
      explanation: "The entire point of the integrating factor is that it turns the left side of the equation into the result of the product rule for the derivative of (IF * y). So d/dx [IF * y] = IF*y' + (IF)'*y."
    },
    {
      number: 462,
      question: "What type of DE is y' = (x²+y²)/xy?",
      grade: 12,
      options: ["Separable", "Linear", "Homogeneous", "Second-order"],
      answer: "Homogeneous",
      explanation: "A DE is homogeneous if it can be written in the form y' = f(y/x). Here, divide top and bottom by x²: y' = (1 + (y/x)²)/(y/x). Since it's a function of (y/x), it is homogeneous and can be solved with the substitution v=y/x."
    },
    {
      number: 463,
      question: "An initial condition for a first-order DE specifies:",
      grade: 12,
      options: ["The slope of the solution at a point.", "The area under the solution curve.", "The value of the solution (y) at a specific point (x).", "The concavity of the solution."],
      answer: "The value of the solution (y) at a specific point (x).",
      explanation: "An initial condition, like y(x₀)=y₀, provides a single point that the solution curve must pass through. This allows finding the specific value of the constant C in the general solution."
    },
    {
      number: 464,
      question: "If the characteristic equation am²+bm+c=0 for a damped harmonic oscillator has two distinct negative real roots, the system is:",
      grade: 12,
      options: ["Underdamped (oscillates)", "Critically damped", "Overdamped (does not oscillate)", "Undamped"],
      answer: "Overdamped (does not oscillate)",
      explanation: "Distinct real roots correspond to an overdamped system. The solution is y = C₁e^(m₁x)+C₂e^(m₂x), where m₁ and m₂ are negative. This is a sum of two decaying exponentials, which approaches zero without oscillating."
    },
    {
      number: 465,
      question: "Two vectors are collinear if they are:",
      grade: 12,
      options: ["Perpendicular", "Parallel", "Have the same magnitude", "Both start at the origin"],
      answer: "Parallel",
      explanation: "Collinear means the vectors lie on the same line if placed tip-to-tail. This is equivalent to them being parallel (one is a scalar multiple of the other)."
    },
    {
      number: 466,
      question: "What is the value of i × i?",
      grade: 12,
      options: ["1", "i", "0 (the zero vector)", "-1"],
      answer: "0 (the zero vector)",
      explanation: "The cross product of any vector with itself (or any parallel vector) is the zero vector, because the angle between them is 0 and sin(0)=0."
    },
    {
      number: 467,
      question: "The line given by r=<1,1,1> + t<2,3,4> and the plane 2x+3y+4z=5 are:",
      grade: 12,
      options: ["Parallel", "Perpendicular", "Neither parallel nor perpendicular", "The line lies in the plane."],
      answer: "Perpendicular",
      explanation: "A line is perpendicular to a plane if its direction vector is parallel to the plane's normal vector. The line's direction vector is v=<2,3,4>. The plane's normal vector is n=<2,3,4>. Since v=n, they are parallel, and thus the line is perpendicular to the plane."
    },
    {
      number: 468,
      question: "If u=<a,b,c>, what is u · u?",
      grade: 12,
      options: ["0", "1", "a+b+c", "|u|²"],
      answer: "|u|²",
      explanation: "u·u = a*a + b*b + c*c = a²+b²+c². The magnitude squared is |u|² = (√(a²+b²+c²))² = a²+b²+c². So u·u = |u|²."
    },
    {
      number: 469,
      question: "Find the parametric equations for the line segment starting at P(1,2) and ending at Q(4,6).",
      grade: 12,
      options: ["x=1+3t, y=2+4t, for 0≤t≤1", "x=4+t, y=6+2t, for 0≤t≤1", "x=1+4t, y=2+6t, for 0≤t≤1", "x=3t, y=4t, for 0≤t≤1"],
      answer: "x=1+3t, y=2+4t, for 0≤t≤1",
      explanation: "A point on the line is P(1,2). The direction vector is PQ = Q-P = <4-1, 6-2> = <3,4>.\nThe equation of the line is r = <1,2>+t<3,4>.\nThe parametric equations are x=1+3t, y=2+4t.\nAt t=0, we are at (1,2) = P. At t=1, we are at (1+3, 2+4) = (4,6) = Q. So the parameter range 0≤t≤1 defines the segment."
    },
    {
      number: 470,
      question: "A matrix that does not have an inverse is called:",
      grade: 12,
      options: ["Singular", "Non-singular", "Symmetric", "A zero matrix"],
      answer: "Singular",
      explanation: "A square matrix is called singular if its determinant is 0, which is the condition for it not having a multiplicative inverse."
    },
    {
      number: 471,
      question: "A linear transformation T maps the basis vectors of R² as T(i)=<2,3> and T(j)=<0,1>. What is the matrix representation of T?",
      grade: 12,
      options: ["[[2, 3], [0, 1]]", "[[2, 0], [3, 1]]", "[[2, 0], [1, 3]]", "[[3, 1], [2, 0]]"],
      answer: "[[2, 0], [3, 1]]",
      explanation: "The columns of the matrix for a linear transformation are the images of the basis vectors. The first column is T(i)=<2,3> and the second column is T(j)=<0,1>. The matrix is [[2, 0], [3, 1]]."
    },
    {
      number: 472,
      question: "On any given day, the probability of rain is 0.4. What is the probability that it does not rain for three consecutive days, assuming independence?",
      grade: 12,
      options: ["0.064", "0.216", "0.6", "0.4"],
      answer: "0.216",
      explanation: "The probability of not raining on one day is 1 - 0.4 = 0.6. The probability of this happening for three independent days is (0.6) * (0.6) * (0.6) = (0.6)³ = 0.216."
    },
    {
      number: 473,
      question: "A study is conducted to see if a new drug lowers blood pressure. What is the most appropriate alternative hypothesis (H₁)?",
      grade: 12,
      options: ["H₁: μ = 120 (where μ is average blood pressure)", "H₁: μ ≠ 120", "H₁: μ > 120", "H₁: μ < μ₀ (where μ₀ is average pressure before the drug)"],
      answer: "H₁: μ < μ₀ (where μ₀ is average pressure before the drug)",
      explanation: "The research goal is to see if the drug lowers blood pressure. This directional goal translates into a one-tailed alternative hypothesis, stating that the mean pressure with the drug (μ) is less than the original mean pressure (μ₀)."
    },
    {
      number: 474,
      question: "What is |e^(ix)|?",
      grade: 12,
      options: ["1", "e", "x", "cos(x)"],
      answer: "1",
      explanation: "e^(ix) = cos(x) + i sin(x). Its modulus is √(cos²x + sin²x) = √1 = 1."
    },
    {
      number: 475,
      question: "In the expansion of (3x - 2)ⁿ, the sum of the coefficients is 1. What can be said about n?",
      grade: 12,
      options: ["n is any positive integer.", "n is any even integer.", "n is any odd integer.", "n must be 1."],
      answer: "n is any positive integer.",
      explanation: "The sum of coefficients is found by setting x=1.\n(3(1) - 2)ⁿ = (1)ⁿ = 1. This is true for any power n."
    },
    {
      number: 476,
      question: "If P(x) is a polynomial of degree 4, what is the end behavior if the leading coefficient is positive?",
      grade: 12,
      options: ["Rises left, falls right", "Falls left, rises right", "Rises left, rises right", "Falls left, falls right"],
      answer: "Rises left, rises right",
      explanation: "A positive leading coefficient means the graph rises on the right. An even degree (4) means the left end does the same thing as the right end. So, it rises left and rises right (like a 'U')."
    },
    {
      number: 477,
      question: "What is logₓ(x)?",
      grade: 12,
      options: ["1", "0", "x", "10"],
      answer: "1",
      explanation: "To what power must x be raised to get x? The answer is 1. (x¹=x)."
    },
    {
      number: 478,
      question: "Differentiate y = √(x²+9).",
      grade: 12,
      options: ["1 / (2√(x²+9))", "x / √(x²+9)", "2x / √(x²+9)", "x √(x²+9)"],
      answer: "x / √(x²+9)",
      explanation: "y=(x²+9)¹/². Use chain rule: y' = (1/2)(x²+9)⁻¹/² * (2x) = x(x²+9)⁻¹/² = x / √(x²+9)."
    },
    {
      number: 479,
      question: "Evaluate ∫[0,1] e^x dx.",
      grade: 12,
      options: ["e", "e-1", "1", "0"],
      answer: "e-1",
      explanation: "∫e^x dx = e^x. Evaluating: [e^x]_[0,1] = e¹ - e⁰ = e - 1."
    },
    {
      number: 480,
      question: "A differential equation whose general solution is y=Ce^x is:",
      grade: 12,
      options: ["y' = y", "y' = -y", "y' = x", "y'' = y"],
      answer: "y' = y",
      explanation: "If y=Ce^x, then y'=Ce^x. Thus, y'=y."
    },
    {
      number: 481,
      question: "What are the direction cosines for the vector v = <1, 2, 2>?",
      grade: 12,
      options: ["<1/9, 2/9, 2/9>", "<1, 2, 2>", "<1/3, 2/3, 2/3>", "<1/√3, 2/√3, 2/√3>"],
      answer: "<1/3, 2/3, 2/3>",
      explanation: "The magnitude is |v| = √(1²+2²+2²)=√9=3. The direction cosines are the components of the unit vector in that direction. The unit vector is <1/3, 2/3, 2/3>."
    },
    {
      number: 482,
      question: "If det(A)=4 and det(B)=5, what is det(A^T B)?",
      grade: 12,
      options: ["9", "20", "-1", "4/5"],
      answer: "20",
      explanation: "det(A^T) = det(A) = 4. det(AB) = det(A)det(B). Therefore, det(A^T B) = det(A^T)det(B) = 4 * 5 = 20."
    },
    {
      number: 483,
      question: "Is the set of all vectors <x,y> where x ≥ 0 a subspace of R²?",
      grade: 12,
      options: ["Yes", "No, it does not contain the zero vector.", "No, it is not closed under addition.", "No, it is not closed under scalar multiplication."],
      answer: "No, it is not closed under scalar multiplication.",
      explanation: "The set contains the zero vector <0,0> and is closed under addition. However, it is not closed under scalar multiplication. Take vector <1,1> from the set. Multiplying by scalar c=-1 gives <-1,-1>, which is not in the set because the x-component is negative."
    },
    {
      number: 484,
      question: "For a standard normal distribution, P(Z < 0) is:",
      grade: 12,
      options: ["0", "1", "0.5", "Not determinable."],
      answer: "0.5",
      explanation: "The standard normal curve is symmetric about its mean, Z=0. The total area under the curve is 1, so the area to the left of 0 must be exactly half, which is 0.5."
    },
    {
      number: 485,
      question: "In regression analysis, a single data point's residual is:",
      grade: 12,
      options: ["Its predicted y-value (ŷ)", "The difference between the actual y and the predicted y (y - ŷ)", "The difference between its x-value and the mean x-value.", "The square of the error."],
      answer: "The difference between the actual y and the predicted y (y - ŷ)",
      explanation: "The residual for a point is its vertical distance from the regression line, representing the prediction error for that specific point. It is calculated as actual - predicted, or y - ŷ."
    },
    {
      number: 486,
      question: "Find z₁/z₂ if z₁=10e^(iπ/2) and z₂=5e^(iπ/4).",
      grade: 12,
      options: ["2e^(iπ/4)", "2e^(i3π/4)", "50e^(i3π/4)", "2e^(iπ/2)"],
      answer: "2e^(iπ/4)",
      explanation: "To divide complex numbers in exponential form, divide the moduli and subtract the exponents (which represent the arguments). z₁/z₂ = (10/5)e^(i(π/2 - π/4)) = 2e^(iπ/4)."
    },
    {
      number: 487,
      question: "A complex number is purely real if and only if:",
      grade: 12,
      options: ["z = z̅", "z = -z̅", "|z| = 1", "Re(z) = Im(z)"],
      answer: "z = z̅",
      explanation: "Let z = a+bi. If it is purely real, b=0, so z=a. Its conjugate z̅ is also a. So z=z̅. Conversely, if z=z̅, then a+bi = a-bi => 2bi=0 => b=0."
    },
    {
      number: 488,
      question: "The complex number corresponding to the Cartesian point (0, -4) is:",
      grade: 12,
      options: ["4", "-4", "4i", "-4i"],
      answer: "-4i",
      explanation: "A point (a, b) corresponds to the complex number a + bi. So, (0, -4) corresponds to 0 + (-4)i = -4i."
    },
    {
      number: 489,
      question: "Simplify: (2-i)²",
      grade: 12,
      options: ["3", "5", "3 - 4i", "5 - 4i"],
      answer: "3 - 4i",
      explanation: "(2-i)² = 2² - 2(2)(i) + i² = 4 - 4i + (-1) = 3 - 4i."
    },
    {
      number: 490,
      question: "What is the value of |i|?",
      grade: 12,
      options: ["0", "1", "-1", "i"],
      answer: "1",
      explanation: "i = 0+1i. |i| = √(0² + 1²) = √1 = 1."
    },
    {
      number: 491,
      question: "If the product of two complex numbers is a real number, the two numbers must be:",
      grade: 12,
      options: ["Equal", "Additive inverses", "Multiplicative inverses", "Not necessarily related in any special way."],
      answer: "Not necessarily related in any special way.",
      explanation: "While complex conjugates have a real product, other pairs do too. For example (1+i)(2-2i) = 2-2i+2i-2i² = 2+2=4, which is real. But (1+i) and (2-2i) are not conjugates. So there's no mandatory relationship."
    },
    {
      number: 492,
      question: "What are the solutions to z³ = 1?",
      grade: 12,
      options: ["1, i, -i", "1, -1, i", "1, (-1+i√3)/2, (-1-i√3)/2", "1, 1/2+i√3/2, 1/2-i√3/2"],
      answer: "1, (-1+i√3)/2, (-1-i√3)/2",
      explanation: "These are the three cube roots of unity. 1 is the principal root. The other two are complex conjugates found using the root formula or knowing that the roots are 1, ω, and ω²."
    },
    {
      number: 493,
      question: "⁰C₀ = ?",
      grade: 12,
      options: ["0", "1", "undefined", "0!"],
      answer: "1",
      explanation: "nCn = 1 and nC0 = 1 for any non-negative integer n. By definition, 0! = 1. So ⁰C₀ = 0!/(0!0!) = 1/1 = 1."
    },
    {
      number: 494,
      question: "The expansion of (1+x)ⁿ terminates (is finite) if and only if n is:",
      grade: 12,
      options: ["any real number", "negative", "a fraction", "a positive integer or zero"],
      answer: "a positive integer or zero",
      explanation: "The binomial theorem gives a finite series of n+1 terms only when the power n is a non-negative integer. For all other real number powers, the expansion is an infinite series."
    },
    {
      number: 495,
      question: "To approximate 1/(1.05)², you would use the binomial expansion of:",
      grade: 12,
      options: ["(1+0.05)²", "(1-0.05)²", "(1+0.05)⁻²", "(1-0.05)⁻²"],
      answer: "(1+0.05)⁻²",
      explanation: "1/(1.05)² can be rewritten as (1.05)⁻² which is (1 + 0.05)⁻²."
    },
    {
      number: 496,
      question: "What is the fourth term in the Maclaurin series for e^x?",
      grade: 12,
      options: ["x³/3", "x⁴/4", "x³/3!", "x⁴/4!"],
      answer: "x³/3!",
      explanation: "The series is 1 + x + x²/2! + x³/3! + ... The first term is 1, second is x, third is x²/2!, fourth is x³/3!."
    },
    {
      number: 497,
      question: "The horizontal asymptote of f(x) = (8x³ - ...)/(2x³ + ...) is:",
      grade: 12,
      options: ["y = 8", "y = 2", "y = 4", "y = 0"],
      answer: "y = 4",
      explanation: "When the degrees of the numerator and denominator are equal, the horizontal asymptote is the ratio of their leading coefficients. Here, it's y = 8/2 = 4."
    },
    {
      number: 498,
      question: "If x=c is a vertical asymptote of y=f(x), then as x approaches c, |f(x)| approaches:",
      grade: 12,
      options: ["0", "1", "∞", "c"],
      answer: "∞",
      explanation: "At a vertical asymptote, the function value increases or decreases without bound, heading towards positive or negative infinity. The absolute value |f(x)| therefore approaches infinity."
    },
    {
      number: 499,
      question: "The polynomial P(x)=x⁵+3x³+2x has how many real roots?",
      grade: 12,
      options: ["1", "2", "3", "5"],
      answer: "1",
      explanation: "P(x) = x(x⁴+3x²+2). One real root is x=0. The other factor is a 'quadratic in disguise'. Let u=x². Then u²+3u+2=0 => (u+1)(u+2)=0. So u=-1 or u=-2. This means x²=-1 or x²=-2. Both of these give complex roots (x=±i, x=±i√2). Thus, there is only one real root, x=0."
    },
    {
      number: 500,
      question: "A polynomial with real coefficients has roots 1, 2, and 3+i. What must be the minimum degree of the polynomial?",
      grade: 12,
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "Because the coefficients are real, the complex root 3+i must be paired with its conjugate, 3-i. This gives a total of four roots: 1, 2, 3+i, and 3-i. Therefore, the minimum degree is 4."
    },
    {
      number: 501,
      question: "lim (x→3⁻) (x-3) / |x-3|",
      grade: 12,
      options: ["1", "-1", "0", "Does not exist"],
      answer: "-1",
      explanation: "As x approaches 3 from the left (x→3⁻), x is slightly less than 3, so (x-3) is a small negative number. Therefore, |x-3| = -(x-3). The expression becomes (x-3)/(-(x-3)) = -1."
    },
    {
      number: 502,
      question: "The derivative is undefined for the function f(x)=|x| at which point?",
      grade: 12,
      options: ["x = 1", "x = -1", "x = 0", "It is defined everywhere."],
      answer: "x = 0",
      explanation: "The graph of f(x)=|x| has a sharp corner (a 'cusp') at x=0. The slope is -1 from the left and +1 from the right. Since the left and right derivatives are not equal, the derivative is undefined at x=0."
    },
    {
      number: 503,
      question: "A rectangle has a fixed perimeter of 20 units. What is the maximum possible area?",
      grade: 12,
      options: ["20", "25", "30", "100"],
      answer: "25",
      explanation: "Let length be L and width be W. 2L+2W=20 => L+W=10 => W=10-L. Area A = LW = L(10-L) = 10L - L². To maximize, find A'(L)=0. A'(L) = 10 - 2L. 10-2L=0 => L=5. If L=5, W=5. The shape is a square. Area = 5*5=25."
    },
    {
      number: 504,
      question: "Differentiate y = tan⁻¹(x).",
      grade: 12,
      options: ["sec²(x)", "1 / (1+x²)", "-1 / (1+x²)", "1 / √(1-x²)"],
      answer: "1 / (1+x²)",
      explanation: "This is a standard derivative rule for inverse trigonometric functions: d/dx(arctan(x)) = 1 / (1+x²)."
    },
    {
      number: 505,
      question: "Find all critical points of f(x) = x e^x.",
      grade: 12,
      options: ["x = 0", "x = 1", "x = -1", "x = 0 and x = -1"],
      answer: "x = -1",
      explanation: "Use the product rule: f'(x) = (1)e^x + (x)e^x = e^x(1+x). Since e^x is never zero, f'(x)=0 only when 1+x=0, which means x=-1."
    },
    {
      number: 506,
      question: "If the acceleration of a particle is a(t)=6t and v(0)=2, find the velocity v(t).",
      grade: 12,
      options: ["v(t) = 3t²", "v(t) = 3t² + 2", "v(t) = 6", "v(t) = 6t² + 2"],
      answer: "v(t) = 3t² + 2",
      explanation: "Velocity is the integral of acceleration: v(t) = ∫6t dt = 3t² + C. Use the initial condition v(0)=2 to find C. v(0) = 3(0)² + C = 2 => C=2. So, v(t) = 3t² + 2."
    },
    {
      number: 507,
      question: "A function is said to be differentiable at x=c if...",
      grade: 12,
      options: ["It is continuous at x=c.", "The limit lim (h→0) [f(c+h)-f(c)]/h exists.", "The tangent line at x=c is horizontal.", "The graph is smooth at x=c."],
      answer: "The limit lim (h→0) [f(c+h)-f(c)]/h exists.",
      explanation: "This is the definition of the derivative at a point. If this limit exists, the function is differentiable there. While smoothness is a consequence and continuity is a necessary condition, this is the formal definition."
    },
    {
      number: 508,
      question: "Evaluate ∫ tan(x) dx.",
      grade: 12,
      options: ["sec²(x) + C", "ln|sec(x)| + C", "ln|sin(x)| + C", "sec(x)tan(x) + C"],
      answer: "ln|sec(x)| + C",
      explanation: "∫ tan(x)dx = ∫ (sin(x)/cos(x))dx. Use u-sub with u=cos(x), du=-sin(x)dx. Integral becomes ∫ -du/u = -ln|u|+C = -ln|cos(x)|+C. Using log properties, this is ln|cos(x)|⁻¹ + C = ln|sec(x)| + C."
    },
    {
      number: 509,
      question: "∫[a,b] f(x)dx = -∫[b,a] f(x)dx. This property means that:",
      grade: 12,
      options: ["The integral is always negative.", "Reversing the limits of integration negates the value of the integral.", "The area is always positive.", "The function must be odd."],
      answer: "Reversing the limits of integration negates the value of the integral.",
      explanation: "This is a fundamental property of definite integrals. Swapping the upper and lower limits of integration changes the sign of the result."
    },
    {
      number: 510,
      question: "The value of ∫[ -2, 2 ] x³ dx is:",
      grade: 12,
      options: ["8", "16", "4", "0"],
      answer: "0",
      explanation: "The function f(x)=x³ is an odd function (f(-x) = -f(x)). The integral of an odd function over a symmetric interval [-a, a] is always zero, because the positive and negative areas cancel out perfectly."
    },
    {
      number: 511,
      question: "Which integral gives the length of the arc of the curve y=f(x) from x=a to x=b?",
      grade: 12,
      options: ["∫[a,b] √(1 + [f'(x)]²) dx", "∫[a,b] √(1 + [f(x)]²) dx", "∫[a,b] 2π f(x) dx", "∫[a,b] |f(x)| dx"],
      answer: "∫[a,b] √(1 + [f'(x)]²) dx",
      explanation: "This is the standard formula for arc length in Cartesian coordinates, derived from the Pythagorean theorem on an infinitesimal segment of the curve."
    },
    {
      number: 512,
      question: "Use partial fractions to evaluate ∫ 1 / (x² - 4) dx.",
      grade: 12,
      options: ["(1/4) ln|(x-2)/(x+2)| + C", "(1/2) ln|(x-2)/(x+2)| + C", "ln|x-2| - ln|x+2| + C", "arctan(x/2) + C"],
      answer: "(1/4) ln|(x-2)/(x+2)| + C",
      explanation: "1/(x²-4) = A/(x-2) + B/(x+2). A=1/4, B=-1/4. The integral becomes (1/4)∫(1/(x-2) - 1/(x+2))dx = (1/4)[ln|x-2| - ln|x+2|] + C = (1/4)ln|(x-2)/(x+2)| + C."
    },
    {
      number: 513,
      question: "The Cylindrical Shells method for finding volume is often useful when:",
      grade: 12,
      options: ["Rotating a region about the x-axis.", "The function is easily solved for x in terms of y.", "Rotating about an axis requires integrating with respect to the other variable (e.g. rotating about y-axis, integrating dx).", "The solid has a hole in it."],
      answer: "Rotating about an axis requires integrating with respect to the other variable (e.g. rotating about y-axis, integrating dx).",
      explanation: "The Washer method would require integrating dy in this case, which might be hard if the functions are difficult to express as x=g(y). The Shells method allows you to integrate with respect to x for a y-axis rotation, which can be much simpler."
    },
    {
      number: 514,
      question: "The equation y' + xy² = 0 is best described as:",
      grade: 12,
      options: ["Linear", "Separable", "Second-order", "Homogeneous with constant coefficients"],
      answer: "Separable",
      explanation: "It is not linear because of the y² term. It is first-order. It can be separated: dy/y² = -x dx."
    },
    {
      number: 515,
      question: "What kind of solution to a DE is y=0?",
      grade: 12,
      options: ["A general solution", "A particular solution", "A trivial solution", "Not a solution"],
      answer: "A trivial solution",
      explanation: "The solution y=0 is often a valid solution, especially for homogeneous equations, and is referred to as the trivial solution."
    },
    {
      number: 516,
      question: "Find the integrating factor for dy/dx - 3y = e^x.",
      grade: 12,
      options: ["e³", "e^(3x)", "e^(-3)", "e^(-3x)"],
      answer: "e^(-3x)",
      explanation: "The equation is in the form y' + P(x)y = Q(x), with P(x)=-3. IF = e^(∫-3 dx) = e^(-3x)."
    },
    {
      number: 517,
      question: "The general solution of y'' + 4y = 0 is y = C₁cos(2x)+C₂sin(2x). If y(0)=1 and y'(0)=6, find C₁.",
      grade: 12,
      options: ["1", "2", "3", "6"],
      answer: "1",
      explanation: "Use the first condition y(0)=1. y(0) = C₁cos(0) + C₂sin(0) = C₁(1) + C₂(0) = C₁. Therefore, C₁=1."
    },
    {
      number: 518,
      question: "Using the previous question's info, find C₂.",
      grade: 12,
      options: ["1", "2", "3", "6"],
      answer: "3",
      explanation: "First find y'. y'(x) = -2C₁sin(2x) + 2C₂cos(2x).\nUse y'(0)=6: y'(0) = -2C₁sin(0) + 2C₂cos(0) = 0 + 2C₂(1) = 2C₂.\nSo 2C₂ = 6 => C₂ = 3."
    },
    {
      number: 519,
      question: "The Wave Equation, which describes the propagation of waves, is an example of a:",
      grade: 12,
      options: ["Linear first-order ODE", "Non-linear ODE", "Partial Differential Equation", "System of ODEs"],
      answer: "Partial Differential Equation",
      explanation: "The Wave Equation (∂²u/∂t² = c² ∂²u/∂x²) involves partial derivatives because the wave's displacement u depends on both position x and time t."
    },
    {
      number: 520,
      question: "If u = <1,-2,3> and v = <-3,6,-9>, the vectors are:",
      grade: 12,
      options: ["Orthogonal", "Collinear (parallel)", "Unit vectors", "Skew"],
      answer: "Collinear (parallel)",
      explanation: "Notice that v = -3 * <1,-2,3> = -3u. Since one vector is a scalar multiple of the other, they are collinear (parallel)."
    },
    {
      number: 521,
      question: "Find a vector perpendicular to both u=i+j and v=i-j.",
      grade: 12,
      options: ["k", "2i", "2k", "-2k"],
      answer: "-2k",
      explanation: "The cross product u×v is perpendicular to both u and v.\nu×v = | i j k | | 1 1 0 | | 1 -1 0 | = i(0-0) - j(0-0) + k(-1-1) = -2k."
    },
    {
      number: 522,
      question: "Find the equation of the plane that contains the point (3,2,1) and is perpendicular to the vector <1,1,1>.",
      grade: 12,
      options: ["x+y+z = 6", "3x+2y+z = 1", "x+y+z = 0", "The plane does not exist."],
      answer: "x+y+z = 6",
      explanation: "The normal vector is n=<1,1,1>. The equation is 1(x-3) + 1(y-2) + 1(z-1) = 0 => x-3+y-2+z-1=0 => x+y+z=6."
    },
    {
      number: 523,
      question: "The gradient of a scalar field, ∇φ, is a:",
      grade: 12,
      options: ["Scalar field", "Vector field", "Constant", "Matrix"],
      answer: "Vector field",
      explanation: "The gradient operation takes a scalar field (like temperature) and produces a vector field that points in the direction of the steepest increase of that scalar."
    },
    {
      number: 524,
      question: "The line segment from (1,1) to (5,4) is represented by r(t) = (1-t)<1,1> + t<5,4> for:",
      grade: 12,
      options: ["t in (-∞, ∞)", "t > 0", "t = 0 and t = 1", "t in [0, 1]"],
      answer: "t in [0, 1]",
      explanation: "This is another way to write a line segment. When t=0, r(0)=<1,1>. When t=1, r(1)=<5,4>. As t varies from 0 to 1, the point r(t) traces the line segment between them."
    },
    {
      number: 525,
      question: "A scalar matrix is a special type of:",
      grade: 12,
      options: ["Identity matrix", "Zero matrix", "Diagonal matrix", "Symmetric matrix"],
      answer: "Diagonal matrix",
      explanation: "A diagonal matrix has non-zero elements only on the main diagonal. A scalar matrix is a diagonal matrix where all those diagonal elements are equal (e.g., 5I)."
    },
    {
      number: 526,
      question: "Find the product [[1, 2]] * [[3], [4]].",
      grade: 12,
      options: ["[11]", "[1, 8]", "[[3, 2], [4, 8]]", "Not defined"],
      answer: "[11]",
      explanation: "A is a 1x2 matrix, B is a 2x1 matrix. The product is defined and will be a 1x1 matrix. The single element is (1*3 + 2*4) = 3 + 8 = 11."
    },
    {
      number: 527,
      question: "If you interchange two rows of a square matrix A to get matrix B, then det(B) = ?",
      grade: 12,
      options: ["det(A)", "-det(A)", "1/det(A)", "2det(A)"],
      answer: "-det(A)",
      explanation: "Interchanging any two rows (or columns) of a matrix negates its determinant."
    },
    {
      number: 528,
      question: "Find the adjugate (adjoint) of the matrix A = [[1,2],[3,4]].",
      grade: 12,
      options: ["[[4, -2], [-3, 1]]", "[[4, -3], [-2, 1]]", "[[-4, 2], [3, -1]]", "[[1, 3], [2, 4]]"],
      answer: "[[4, -2], [-3, 1]]",
      explanation: "The matrix of cofactors is [[4, -3], [-2, 1]]. The adjugate is the transpose of the cofactor matrix, which is [[4, -2], [-3, 1]]. This is the matrix used in the inverse formula before multiplying by 1/det(A)."
    },
    {
      number: 529,
      question: "A system of 3 linear equations in 3 unknowns has a unique solution. Geometrically, this means the three planes:",
      grade: 12,
      options: ["Intersect in a single line.", "Are parallel.", "Intersect at a single point.", "Are all the same plane."],
      answer: "Intersect at a single point.",
      explanation: "A unique solution (x, y, z) corresponds to a single point where all three planes intersect."
    },
    {
      number: 530,
      question: "A matrix is in row-echelon form. What can you do to solve the corresponding system of equations?",
      grade: 12,
      options: ["Perform Cramer's Rule", "Find the inverse", "Use back-substitution", "The solution is immediately obvious."],
      answer: "Use back-substitution",
      explanation: "Row-echelon form creates a 'triangular' system. You can solve for the last variable from the last equation, then substitute that value back into the equation above it to solve for the next variable, and so on."
    },
    {
      number: 531,
      question: "Eigenvalues are associated with what type of matrix?",
      grade: 12,
      options: ["Any matrix", "Rectangular matrix", "Column matrix", "Square matrix"],
      answer: "Square matrix",
      explanation: "The eigenvalue problem Av=λv requires that the matrix A maps a vector from a space back into the same space, which means it must be a square (n x n) matrix."
    },
    {
      number: 532,
      question: "The sum of the probabilities P(X=x) for a discrete random variable X over all possible values of x is:",
      grade: 12,
      options: ["0", "1", "E(X)", "Dependent on the distribution"],
      answer: "1",
      explanation: "This is a fundamental axiom of probability theory. The total probability of the sample space must be 1."
    },
    {
      number: 533,
      question: "Decreasing the significance level α (e.g., from 0.05 to 0.01) makes it...",
      grade: 12,
      options: ["easier to reject H₀ and increases the risk of a Type I error.", "harder to reject H₀ and decreases the risk of a Type I error.", "harder to reject H₀ and increases the risk of a Type II error.", "Both B and C are correct."],
      answer: "Both B and C are correct.",
      explanation: "A smaller α means you require stronger evidence to reject H₀. This decreases the probability of a Type I error (rejecting a true H₀) but increases the probability of a Type II error (failing to reject a false H₀). Both B and C are consequences."
    },
    {
      number: 534,
      question: "What is Re(i(3-4i))?",
      grade: 12,
      options: ["3", "-4", "4", "-3"],
      answer: "4",
      explanation: "i(3-4i) = 3i - 4i² = 3i - 4(-1) = 4 + 3i. The real part is 4."
    },
    {
      number: 535,
      question: "The number of terms in the expansion of (x+y+z)³ is:",
      grade: 12,
      options: ["4", "6", "10", "9"],
      answer: "10",
      explanation: "This is a multinomial expansion. The number of terms for (x₁+...+x_k)ⁿ is (n+k-1)C(k-1). Here n=3, k=3. So (3+3-1)C(3-1) = ⁵C₂ = 10."
    },
    {
      number: 536,
      question: "If P(x) has a leading term 2x⁵, as x→-∞, P(x)→?",
      grade: 12,
      options: ["∞", "-∞", "0", "2"],
      answer: "-∞",
      explanation: "The degree (5) is odd, so the ends go in opposite directions. The leading coefficient (2) is positive, so it rises to the right and must fall to the left. As x→-∞, P(x)→-∞."
    },
    {
      number: 537,
      question: "Use log properties to solve log₂(x) + log₂(4) = 5.",
      grade: 12,
      options: ["8", "16", "4", "32"],
      answer: "8",
      explanation: "log₂(4x) = 5. In exponential form: 4x = 2⁵ = 32. x = 32/4 = 8."
    },
    {
      number: 538,
      question: "Find lim (x→∞) (e^x / x²).",
      grade: 12,
      options: ["0", "1", "∞", "Does not exist"],
      answer: "∞",
      explanation: "Exponential functions grow much faster than polynomial functions. As x gets large, the numerator grows significantly faster than the denominator. This can also be shown with two applications of L'Hopital's rule: lim e^x/x² -> lim e^x/2x -> lim e^x/2 = ∞."
    },
    {
      number: 539,
      question: "Evaluate ∫ dx / (1+x²).",
      grade: 12,
      options: ["ln(1+x²) + C", "2x / (1+x²)² + C", "tan⁻¹(x) + C", "-1 / (1+x)² + C"],
      answer: "tan⁻¹(x) + C",
      explanation: "This is the standard integral form for the inverse tangent (arctangent) function."
    },
    {
      number: 540,
      question: "If a mass-spring system is described by x''+4x=0, what is its natural angular frequency ω?",
      grade: 12,
      options: ["4", "16", "1/2", "2"],
      answer: "2",
      explanation: "The standard form for SHM is x''+ω²x=0. By comparing the two equations, ω²=4, so ω=2 rad/s."
    },
    {
      number: 541,
      question: "Find the area of the triangle with vertices P(0,0,0), Q(1,1,0) and R(0,1,1).",
      grade: 12,
      options: ["√3 / 2", "√3", "1/2", "1"],
      answer: "√3 / 2",
      explanation: "The area is half the magnitude of the cross product of the vectors forming two sides, PQ = <1,1,0> and PR = <0,1,1>. PQ×PR = i-j+k. The magnitude is √3. The area of the triangle is (1/2)|PQ×PR| = √3 / 2."
    },
    {
      number: 542,
      question: "A is a 2x2 matrix and A⁻¹ = A. What could det(A) be?",
      grade: 12,
      options: ["1 or -1", "1 only", "-1 only", "0"],
      answer: "1 or -1",
      explanation: "A⁻¹ = A => AA = AA⁻¹ => A² = I.\nTaking the determinant of both sides: det(A²) = det(I) => (det(A))² = 1. Therefore, det(A) = ±1. An example is the identity matrix I or [[0,1],[1,0]]."
    },
    {
      number: 543,
      question: "The set of all solutions to the homogeneous linear DE y'' - y = 0 forms a vector space. What is its dimension?",
      grade: 12,
      options: ["0", "1", "2", "Infinite"],
      answer: "2",
      explanation: "The characteristic equation is m²-1=0, with roots m=±1. The general solution is y=C₁e^x + C₂e⁻ˣ. The solutions are all linear combinations of the two basis functions {e^x, e⁻ˣ}. Therefore, the solution space has a dimension of 2."
    },
    {
      number: 544,
      question: "The probability of event A is 0.6. The probability of event B is 0.5. If P(A∩B)=0.2, are the events independent?",
      grade: 12,
      options: ["Yes, because P(A)+P(B) > 1.", "Yes, because P(A∩B) = P(A)P(B).", "No, because P(A)+P(B) ≠ 1.", "No, because P(A∩B) ≠ P(A)P(B)."],
      answer: "No, because P(A∩B) ≠ P(A)P(B).",
      explanation: "Two events are independent if P(A∩B) = P(A)P(B). Here, P(A)P(B) = 0.6 * 0.5 = 0.3. Since 0.2 ≠ 0.3, the events are not independent (they are dependent)."
    },
    {
      number: 545,
      question: "In order to use a one-sample z-test for a population mean, which of the following is required?",
      grade: 12,
      options: ["The population standard deviation σ must be known.", "The sample must be small (n<30).", "The data must be categorical.", "The population must be exactly normal."],
      answer: "The population standard deviation σ must be known.",
      explanation: "The z-test requires knowledge of the population standard deviation σ to calculate the standard error σ/√n. If σ is unknown, a t-test is used instead (which estimates σ with the sample standard deviation s). The CLT can relax the normality assumption for large samples, but the need for σ remains for the z-test."
    },
    {
      number: 546,
      question: "The polar representation of a complex number is unique.",
      grade: 12,
      options: ["True", "False"],
      answer: "False",
      explanation: "The modulus r is unique, but the argument φ is not. You can add any multiple of 2π to φ and get the same complex number. A unique principal argument is usually defined to lie in an interval like (-π, π]."
    },
    {
      number: 547,
      question: "Evaluate Re(1/i).",
      grade: 12,
      options: ["1", "-1", "i", "0"],
      answer: "0",
      explanation: "1/i = i/(i²) = i/(-1) = -i. This is 0 - 1i. The real part is 0."
    },
    {
      number: 548,
      question: "Let z = -1 - i√3. What is |z|?",
      grade: 12,
      options: ["√2", "2", "4", "1+√3"],
      answer: "2",
      explanation: "|z| = √((-1)² + (-√3)²) = √(1+3) = √4 = 2."
    },
    {
      number: 549,
      question: "Using the previous question, what is the principal argument of z = -1 - i√3?",
      grade: 12,
      options: ["-π/3", "2π/3", "4π/3", "-2π/3"],
      answer: "-2π/3",
      explanation: "The point is in Q3. The reference angle is arctan(|-√3/-1|) = arctan(√3) = π/3. For Q3, the principal argument is φ = ref - π = π/3 - π = -2π/3."
    },
    {
      number: 550,
      question: "If (a+bi)² = 8 + 6i, what is a² - b²?",
      grade: 12,
      options: ["8", "6", "14", "10"],
      answer: "8",
      explanation: "(a+bi)² = (a²-b²) + (2ab)i. We are given this equals 8 + 6i. Equating the real parts gives a² - b² = 8."
    },
    {
      number: 551,
      question: "Find the middle term in the expansion of (x + 1/x)¹⁰.",
      grade: 12,
      options: ["252", "210 x²", "210", "252 x"],
      answer: "252",
      explanation: "The expansion has 11 terms, so the middle term is the 6th term (r=5).\nT₆ = ¹⁰C₅ (x)¹⁰⁻⁵ (1/x)⁵ = ¹⁰C₅ x⁵ x⁻⁵ = ¹⁰C₅ x⁰ = ¹⁰C₅ = (10*9*8*7*6)/(5*4*3*2*1) = 252."
    },
    {
      number: 552,
      question: "The binomial expansion of (1+x)⁻¹/² represents:",
      grade: 12,
      options: ["ln(1+x)", "1/√(1+x)", "e^x", "sin(x)"],
      answer: "1/√(1+x)",
      explanation: "A negative power means reciprocal, and a power of 1/2 means square root. So (1+x)⁻¹/² is 1/√(1+x)."
    },
    {
      number: 553,
      question: "What is the value of ³P₃?",
      grade: 12,
      options: ["1", "3", "6", "9"],
      answer: "6",
      explanation: "³P₃ = 3! / (3-3)! = 3!/0! = 6/1 = 6. (The number of ways to arrange 3 items)."
    },
    {
      number: 554,
      question: "For the expansion of (1+3x)⁻¹, what is the condition of validity?",
      grade: 12,
      options: ["|x| < 3", "|x| < 1", "|x| < 1/3", "All x"],
      answer: "|x| < 1/3",
      explanation: "Let y=3x. The expansion is valid for |y|<1 => |3x|<1 => 3|x|<1 => |x|<1/3."
    },
    {
      number: 555,
      question: "What is the sum of the roots taken two at a time for the cubic ax³+bx²+cx+d=0?",
      grade: 12,
      options: ["c/a", "-c/a", "d/a", "b/a"],
      answer: "c/a",
      explanation: "This is one of Vieta's formulas. The sum of the roots is -b/a, the sum of roots taken two at a time (r₁r₂+r₁r₃+r₂r₃) is c/a, and the product of roots is -d/a."
    },
    {
      number: 556,
      question: "The polynomial P(x)=x³-3x²+3x-1 is equal to:",
      grade: 12,
      options: ["(x+1)³", "x³ - 1", "(x-1)³", "(x-1)(x²+1)"],
      answer: "(x-1)³",
      explanation: "This matches the pattern of the binomial expansion for (x-1)³ = x³ - 3x²(1) + 3x(1)² - 1³ = x³-3x²+3x-1."
    },
    {
      number: 557,
      question: "Which of the following is true about the function f(x) = (x²+1)/(x²+2)?",
      grade: 12,
      options: ["It has a vertical asymptote.", "It has a horizontal asymptote at y=0.", "It has a horizontal asymptote at y=1.", "It has a slant asymptote."],
      answer: "It has a horizontal asymptote at y=1.",
      explanation: "The denominator x²+2 is never zero, so there are no vertical asymptotes. The degrees of the numerator and denominator are equal (2), so the HA is the ratio of leading coefficients: y=1/1 = 1."
    },
    {
      number: 558,
      question: "A polynomial P(x) has a double root at x=1. This means which of the following is a factor of P(x)?",
      grade: 12,
      options: ["x-1", "x+1", "(x-1)²", "(x+1)²"],
      answer: "(x-1)²",
      explanation: "A double root (multiplicity 2) at x=c means that (x-c)² is a factor of the polynomial."
    },
    {
      number: 559,
      question: "If 10^x = y, then...",
      grade: 12,
      options: ["log_y(10) = x", "log(y) = x", "log(x) = y", "ln(y) = x"],
      answer: "log(y) = x",
      explanation: "The common logarithm, log, has a base of 10. The statement 10^x = y in logarithmic form is log₁₀(y) = x, or simply log(y) = x."
    },
    {
      number: 560,
      question: "A bacterial culture starts with 500 cells and doubles every hour. The model for the population P after t hours is:",
      grade: 12,
      options: ["P(t) = 500e^(2t)", "P(t) = 500(2^t)", "P(t) = 500 + 2t", "P(t) = 500(t²)"],
      answer: "P(t) = 500(2^t)",
      explanation: "The initial amount is 500. Doubling means the growth factor is 2. The formula is P(t) = Initial * (Growth Factor)^t, so P(t) = 500(2^t)."
    },
    {
      number: 561,
      question: "Solve for t: 50 = 100e^(-0.1t).",
      grade: 12,
      options: ["t = 10 ln(2)", "t = -10 ln(2)", "t = 2 ln(10)", "t = 10"],
      answer: "t = 10 ln(2)",
      explanation: "50/100 = e^(-0.1t) => 0.5 = e^(-0.1t). Take natural log: ln(0.5) = -0.1t. Since ln(0.5)=ln(1/2)=-ln(2), we have -ln(2)=-0.1t => ln(2)=0.1t => t=ln(2)/0.1 = 10ln(2)."
    },
    {
      number: 562,
      question: "Simplify e^(ln(x²)).",
      grade: 12,
      options: ["x", "x²", "2x", "2ln(x)"],
      answer: "x²",
      explanation: "The exponential function e^x and the natural logarithm ln(x) are inverse functions. Therefore, e^(ln(y)) = y. Here, y=x², so e^(ln(x²))=x²."
    },
    {
      number: 563,
      question: "Which theorem is used to prove lim (x→0) [x sin(1/x)] = 0?",
      grade: 12,
      options: ["Intermediate Value Theorem", "Mean Value Theorem", "Squeeze (or Sandwich) Theorem", "L'Hôpital's Rule"],
      answer: "Squeeze (or Sandwich) Theorem",
      explanation: "L'Hôpital's rule is not applicable here. We know -1 ≤ sin(1/x) ≤ 1. Multiplying by |x| gives -|x| ≤ x sin(1/x) ≤ |x|. As x→0, both -|x| and |x| approach 0. By the Squeeze Theorem, the function in the middle must also approach 0."
    },
    {
      number: 564,
      question: "Find the equation of the tangent line to y=1/x at x=2.",
      grade: 12,
      options: ["y - 1/2 = (-1/4)(x-2)", "y - 1/2 = (-1/2)(x-2)", "y - 2 = (-1/4)(x-1/2)", "y - 1/2 = (1/4)(x-2)"],
      answer: "y - 1/2 = (-1/4)(x-2)",
      explanation: "y = x⁻¹. y' = -x⁻² = -1/x². At x=2, the slope is m = -1/2² = -1/4. The point is (2, 1/2). The equation is y - 1/2 = (-1/4)(x-2)."
    },
    {
      number: 565,
      question: "The acceleration of a particle is the rate of change of:",
      grade: 12,
      options: ["Position", "Velocity", "Displacement", "Jerk"],
      answer: "Velocity",
      explanation: "Acceleration is the first derivative of velocity with respect to time (a = dv/dt) and the second derivative of position."
    },
    {
      number: 566,
      question: "If a function is continuous at x=c, it must also be differentiable at x=c.",
      grade: 12,
      options: ["True", "False"],
      answer: "False",
      explanation: "Differentiability implies continuity, but the reverse is not true. A function can be continuous but not differentiable, for example, at a sharp corner like y=|x| at x=0."
    },
    {
      number: 567,
      question: "Find the derivative of y = (sin x) / (cos x).",
      grade: 12,
      options: ["1", "-1", "tan²(x)", "sec²(x)"],
      answer: "sec²(x)",
      explanation: "y=tan(x). The derivative of tan(x) is sec²(x). Alternatively, using the quotient rule gives [cos(x)cos(x)-sin(x)(-sin(x))]/cos²x = [cos²x+sin²x]/cos²x = 1/cos²x = sec²x."
    },
    {
      number: 568,
      question: "Which of the following is an improper integral?",
      grade: 12,
      options: ["∫[0,1] x dx", "∫[1,∞] 1/x² dx", "∫[-1,1] x² dx", "∫[π,2π] sin(x) dx"],
      answer: "∫[1,∞] 1/x² dx",
      explanation: "An improper integral is one where at least one of the limits of integration is infinite, or where the integrand is undefined at some point within the interval of integration."
    },
    {
      number: 569,
      question: "The average value of a continuous function f(x) on [a,b] is the value c such that:",
      grade: 12,
      options: ["f(c) * (b-a) = ∫[a,b] f(x) dx", "f'(c) * (b-a) = ∫[a,b] f(x) dx", "c * (b-a) = ∫[a,b] f(x) dx", "∫[a,c] f(x)dx = ∫[c,b] f(x)dx"],
      answer: "f(c) * (b-a) = ∫[a,b] f(x) dx",
      explanation: "The average value, f_avg, is defined as (1/(b-a)) ∫[a,b]f(x)dx. The Mean Value Theorem for Integrals guarantees that for a continuous function, there exists a 'c' in the interval such that f(c) = f_avg. Rearranging the formula gives this answer."
    },
    {
      number: 570,
      question: "Find the volume when the region under y=1/x from x=1 to x=3 is rotated about the x-axis.",
      grade: 12,
      options: ["π ln(3)", "2π/3", "π/3", "8π/9"],
      answer: "2π/3",
      explanation: "Volume = ∫[1,3] π y² dx = ∫[1,3] π(1/x)² dx = π∫[1,3] x⁻² dx.\nV = π [-x⁻¹][1,3] = π [-1/x][1,3] = π [(-1/3) - (-1/1)] = π [-1/3 + 1] = π(2/3) = 2π/3."
    },
    {
      number: 571,
      question: "To integrate ∫ (2x+3)/(x²+x) dx by partial fractions, the first step is:",
      grade: 12,
      options: ["Decompose it into A/x² + B/x", "Factor the denominator as x(x+1)", "Perform long division", "Use u-substitution"],
      answer: "Factor the denominator as x(x+1)",
      explanation: "Before you can set up the partial fraction decomposition, you must fully factor the denominator. x²+x factors into x(x+1)."
    },
    {
      number: 572,
      question: "The general solution y=C₁cos(x)+C₂sin(x) represents what physical phenomenon?",
      grade: 12,
      options: ["Exponential decay", "Unrestricted growth", "Damped oscillation", "Simple harmonic motion"],
      answer: "Simple harmonic motion",
      explanation: "This sinusoidal solution is the hallmark of simple harmonic motion, which is undamped and oscillates forever. It comes from the DE y''+y=0."
    },
    {
      number: 573,
      question: "A particular solution of a differential equation is one that is:",
      grade: 12,
      options: ["Very simple", "Correct for all initial conditions", "Free of any arbitrary constants", "Found using partial fractions"],
      answer: "Free of any arbitrary constants",
      explanation: "A particular solution is derived from the general solution by applying specific initial or boundary conditions to solve for the arbitrary constants C₁, C₂, etc."
    },
    {
      number: 574,
      question: "If the integrating factor for y'+P(x)y=Q(x) is x³, what is P(x)?",
      grade: 12,
      options: ["3/x", "x³", "3x²", "3"],
      answer: "3/x",
      explanation: "IF = e^(∫P(x)dx) = x³. Take the natural log of both sides: ∫P(x)dx = ln(x³) = 3ln(x). To find P(x), differentiate both sides with respect to x: P(x) = d/dx(3lnx) = 3/x."
    },
    {
      number: 575,
      question: "For which of these DEs is y=e^(-2x) a solution?",
      grade: 12,
      options: ["y'' + 4y = 0", "y' - 2y = 0", "y' + 2y = 0", "y'' + 4y' + 3y = 0"],
      answer: "y' + 2y = 0",
      explanation: "If y=e⁻²ˣ, then y'=-2e⁻²ˣ.\ny' + 2y = (-2e⁻²ˣ) + 2(e⁻²ˣ) = 0. So it is a solution to y'+2y=0."
    },
    {
      number: 576,
      question: "The vectors u=<2,1> and v=<x,3> are parallel. Find x.",
      grade: 12,
      options: ["3", "6", "1.5", "-6"],
      answer: "6",
      explanation: "If the vectors are parallel, their components are proportional. x/2 = 3/1. Therefore, x=6."
    },
    {
      number: 577,
      question: "The distance between the points P(1,2,3) and Q(3,4,4) is:",
      grade: 12,
      options: ["3", "9", "√29", "29"],
      answer: "3",
      explanation: "Distance = |PQ| = |Q-P| = |<3-1, 4-2, 4-3>| = |<2,2,1>|.\nMagnitude = √(2²+2²+1²) = √(4+4+1) = √9 = 3."
    },
    {
      number: 578,
      question: "The zero vector, 0⃗ = <0,0,0>, is:",
      grade: 12,
      options: ["Orthogonal to all vectors.", "Parallel to all vectors.", "Neither orthogonal nor parallel to any vector.", "Both orthogonal and parallel to all vectors."],
      answer: "Orthogonal to all vectors.",
      explanation: "The dot product of the zero vector with any other vector u is 0. u · 0⃗ = 0. Since the dot product is zero, by definition, the vectors are orthogonal. (The concept of parallel is based on non-zero scalar multiples, making it ambiguous, but orthogonality is clear from the dot product)."
    },
    {
      number: 579,
      question: "If two lines in 3D are not parallel and do not intersect, they are called:",
      grade: 12,
      options: ["Orthogonal", "Skew", "Collinear", "Planar"],
      answer: "Skew",
      explanation: "This is the definition of skew lines. They exist in different non-parallel planes."
    },
    {
      number: 580,
      question: "What does the dot product measure?",
      grade: 12,
      options: ["The tendency of one vector to rotate another.", "The degree to which two vectors point in the same direction.", "A vector that is perpendicular to two others.", "The area of a parallelogram."],
      answer: "The degree to which two vectors point in the same direction.",
      explanation: "The formula u·v=|u||v|cosθ shows the dot product is maximized when cosθ=1 (θ=0, vectors point in the same direction) and is zero when they are perpendicular. It is essentially the product of one vector's magnitude with the scalar projection of the other onto it."
    },
    {
      number: 581,
      question: "For matrices A and B, if A+B is defined, which is always true?",
      grade: 12,
      options: ["AB is defined.", "BA is defined.", "A^T B is defined.", "A-B is defined."],
      answer: "A-B is defined.",
      explanation: "A+B being defined means A and B have the same order (m x n). If this is true, then A-B is also defined. The products AB, BA etc are not guaranteed to be defined unless the matrices are also square."
    },
    {
      number: 582,
      question: "A 3x3 matrix has three identical rows. What is its determinant?",
      grade: 12,
      options: ["3", "1", "0", "Cannot be determined"],
      answer: "0",
      explanation: "A property of determinants is that if any row (or column) is a multiple of another row (or column), the determinant is zero. Here, the rows are identical (a multiple of 1), so the determinant must be 0."
    },
    {
      number: 583,
      question: "What is the identity element for matrix addition?",
      grade: 12,
      options: ["The identity matrix, I", "The zero matrix, O", "The number 1", "The number 0"],
      answer: "The zero matrix, O",
      explanation: "The identity for an operation is the element that leaves another element unchanged. For matrix addition, A + O = A, so the zero matrix O is the additive identity."
    },
    {
      number: 584,
      question: "If a matrix A has an inverse A⁻¹, then the solution to AX = 0 is:",
      grade: 12,
      options: ["X = A⁻¹", "X = I", "X = 0 (the trivial solution) only.", "X can be non-zero."],
      answer: "X = 0 (the trivial solution) only.",
      explanation: "If A is invertible, we can multiply AX=0 by A⁻¹. A⁻¹AX = A⁻¹0 => IX = 0 => X=0. An invertible matrix guarantees that the only solution to the homogeneous system is the trivial one."
    },
    {
      number: 585,
      question: "To use Cramer's rule for a 3x3 system AX=B, how many determinants must be calculated?",
      grade: 12,
      options: ["1", "2", "3", "4"],
      answer: "4",
      explanation: "You must calculate the determinant of the main coefficient matrix (D), and then the determinants for each variable (D_x, D_y, D_z), where each one has a column replaced by the constant vector B. This is a total of 4 determinants."
    },
    {
      number: 586,
      question: "Any spanning set for R³ must contain at least how many vectors?",
      grade: 12,
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "The dimension of R³ is 3. To span a space of dimension n, you need at least n vectors."
    },
    {
      number: 587,
      question: "A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. What is the probability both are red?",
      grade: 12,
      options: ["16/100", "12/100", "12/90", "20/90"],
      answer: "12/90",
      explanation: "P(1st is Red) = 4/10. Given the first was red, P(2nd is Red) = 3/9. The probability of both is P(R₁) * P(R₂|R₁) = (4/10) * (3/9) = 12/90."
    },
    {
      number: 588,
      question: "A statistical test is conducted, and the result is 'statistically significant at the 5% level'. This means:",
      grade: 12,
      options: ["The p-value was greater than 0.05.", "The null hypothesis was accepted.", "The p-value was less than or equal to 0.05.", "The study was important."],
      answer: "The p-value was less than or equal to 0.05.",
      explanation: "'Statistically significant' means that the result was unlikely to have occurred by random chance alone, under the assumption of the null hypothesis. The threshold for this unlikeliness is the significance level α. So, significance at the 5% level means p ≤ 0.05."
    },
    {
      number: 589,
      question: "What is i⁻¹?",
      grade: 12,
      options: ["i", "-1", "1", "-i"],
      answer: "-i",
      explanation: "i⁻¹ = 1/i = i/(i²) = i/(-1) = -i."
    },
    {
      number: 590,
      question: "The approximation (1+x)ⁿ ≈ 1+nx is most accurate when:",
      grade: 12,
      options: ["n is large", "n is an integer", "x is very small", "x is close to 1"],
      answer: "x is very small",
      explanation: "This is a first-order Taylor/binomial approximation. It works by ignoring higher powers of x (x², x³, etc.). This is a valid simplification only when x is very small, causing the higher power terms to be negligible."
    },
    {
      number: 591,
      question: "If P(x) divided by (x-5) gives a quotient of x+1 and a remainder of 3, what is P(x)?",
      grade: 12,
      options: ["(x-5)(x+1) + 3", "(x-5)(x+1) - 3", "(x+1)(x-5) * 3", "(x-5) / (x+1) + 3"],
      answer: "(x-5)(x+1) + 3",
      explanation: "The division algorithm states P(x) = D(x)Q(x) + R(x). So, P(x) = (x-5)(x+1) + 3."
    },
    {
      number: 592,
      question: "Solve logₓ(64) = 2.",
      grade: 12,
      options: ["32", "128", "8", "4"],
      answer: "8",
      explanation: "Rewrite in exponential form: x² = 64. Since the base x must be positive, x=8."
    },
    {
      number: 593,
      question: "Find lim (x→0) (1-cos(x)) / x.",
      grade: 12,
      options: ["1", "0", "-1", "∞"],
      answer: "0",
      explanation: "Using L'Hôpital's Rule (since it's 0/0 form): lim (d/dx(1-cosx)) / (d/dx(x)) = lim (sin x) / 1 = sin(0) = 0."
    },
    {
      number: 594,
      question: "The integral ∫ x e^(x²) dx evaluates to:",
      grade: 12,
      options: ["(1/2) e^(x²) + C", "x e^(x²) + C", "2x e^(x²) + C", "e^(x²) + C"],
      answer: "(1/2) e^(x²) + C",
      explanation: "Use u-sub with u=x². du=2xdx => xdx = du/2. ∫ e^u (du/2) = (1/2)∫e^u du = (1/2)e^u + C = (1/2)e^(x²) + C."
    },
    {
      number: 595,
      question: "Find a solution to y'' - y' = 0.",
      grade: 12,
      options: ["y = sin(x)", "y = x²", "y = e^x", "y = x"],
      answer: "y = e^x",
      explanation: "Characteristic eq: m²-m=0 => m(m-1)=0. Roots m=0, m=1. General solution is y=C₁e^(0x) + C₂e^(1x) = C₁ + C₂e^x. A specific solution would be when C₁=0 and C₂=1, giving y=e^x. (y=x is not a solution: 0-1≠0)."
    },
    {
      number: 596,
      question: "For any two vectors u and v, |u+v| ≤ |u|+|v|. This is known as the:",
      grade: 12,
      options: ["Pythagorean Theorem", "Law of Cosines", "Cauchy-Schwarz Inequality", "Triangle Inequality"],
      answer: "Triangle Inequality",
      explanation: "This is the Triangle Inequality for vectors. It states that the length of one side of a triangle (formed by vectors u, v, and u+v) cannot be greater than the sum of the lengths of the other two sides."
    },
    {
      number: 597,
      question: "A matrix A is an upper triangular matrix if:",
      grade: 12,
      options: ["a_ij = 0 for i=j", "a_ij = 0 for i>j", "a_ij = 0 for i<j", "a_ij = 0 for i≠j"],
      answer: "a_ij = 0 for i>j",
      explanation: "An upper triangular matrix has all zero elements below the main diagonal. The position of an element is below the diagonal if its row number (i) is greater than its column number (j)."
    },
    {
      number: 598,
      question: "The null space of a matrix A is the set of all vectors x such that:",
      grade: 12,
      options: ["Ax = I", "Ax = x", "Ax = A⁻¹", "Ax = 0"],
      answer: "Ax = 0",
      explanation: "The null space (or kernel) of a matrix/linear transformation is the set of all vectors that are mapped to the zero vector. It is always a subspace."
    },
    {
      number: 599,
      question: "In a lottery, 100 tickets are sold and there is one winner. If you buy 5 tickets, what is your probability of winning?",
      grade: 12,
      options: ["0.01", "0.95", "0.05", "0.1"],
      answer: "0.05",
      explanation: "You have 5 favorable outcomes out of a total of 100 possible outcomes. P(win) = 5/100 = 0.05."
    },
    {
      number: 600,
      question: "In a right-tailed hypothesis test, the p-value is the area...",
      grade: 12,
      options: ["To the left of the test statistic.", "To the right of the test statistic.", "On both tails of the distribution.", "Between the test statistic and the mean."],
      answer: "To the right of the test statistic.",
      explanation: "In a right-tailed test (H₁: μ > μ₀), the p-value represents the probability of getting a result as large as or larger than the observed test statistic. This corresponds to the area in the right tail of the sampling distribution."
    }
  ]
}