export const textbook = {
    "name": "Further Mathematics",
    "author": "Godswill Iyke Dave",
    "coverImage": "",
    "chapters": [
        {
            "name": "Chapter 1: Complex Numbers",
            "image": "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=sbC93xq--kQ",
                "https://www.youtube.com/watch?v=SP-YJe7Vldo",
                "https://www.youtube.com/watch?v=XFzX_-bBKOo"
            ],
            "sections": [
                {
                    "title": "1.1 Definition of Complex Numbers, Argand Diagram",
                    "image": "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=eVrOJq2Qp-s",
                    "content": `Throughout our mathematical journey so far, we have primarily worked within the system of real numbers. Real numbers are sufficient for solving many types of equations and modeling various real-world phenomena. However, certain simple algebraic equations, such as x² + 1 = 0, have no solutions within the real number system because there is no real number whose square is negative. To address this limitation and expand the realm of numbers, mathematicians introduced the concept of imaginary numbers, and combining these with real numbers led to the development of complex numbers. Complex numbers provide a complete algebraic system where every polynomial equation has roots, and they have found profound applications in fields such as electrical engineering, quantum mechanics, signal processing, and fluid dynamics. This chapter will introduce the definition of complex numbers, their representation on the Argand diagram, arithmetic operations, the concepts of conjugates, modulus, and argument, and explore their polar (trigonometric) form, Euler's formula, De Moivre's theorem, and roots of unity.

The Imaginary Unit (i):
The foundation of complex numbers is the imaginary unit, denoted by the symbol i.

i is defined as the square root of -1: i = √(-1)

Therefore, i² = -1.
This definition allows us to find square roots of negative numbers. For example, √(-9) = √(9 × -1) = √9 × √(-1) = 3i.

Definition of a Complex Number (z):
A complex number z is a number that can be expressed in the form:
z = a + bi
where:

a and b are real numbers.

a is called the real part of z, denoted as Re(z) = a.

b is called the imaginary part of z, denoted as Im(z) = b.

i is the imaginary unit (i² = -1).

Examples of Complex Numbers:

3 + 2i (Real part = 3, Imaginary part = 2)

-5 + 7i (Real part = -5, Imaginary part = 7)

4 (Can be written as 4 + 0i; a purely real number, Imaginary part = 0)

6i (Can be written as 0 + 6i; a purely imaginary number, Real part = 0)

The set of all complex numbers is denoted by ℂ. Real numbers (ℝ) are a subset of complex numbers (where b=0).

The Argand Diagram (Complex Plane):
Complex numbers can be represented geometrically as points in a two-dimensional plane called the Argand diagram or complex plane.

The horizontal axis is called the real axis (Re).

The vertical axis is called the imaginary axis (Im).

A complex number z = a + bi is represented by the point with Cartesian coordinates (a, b) in this plane.

Alternatively, the complex number z = a + bi can be represented by a vector originating from the origin (0,0) and terminating at the point (a, b).

This geometric representation is crucial for understanding the modulus, argument, and operations (especially multiplication and division in polar form) of complex numbers.

(Suggested insertion: A clear diagram of the Argand diagram, labeling the real axis (Re), imaginary axis (Im), and showing the plotting of several example complex numbers like 3+2i, -1+4i, 2-3i, -4i, 5. Illustrate one complex number also as a vector from the origin to the point.)

Equality of Complex Numbers:
Two complex numbers, z₁ = a₁ + b₁i and z₂ = a₂ + b₂i, are equal if and only if their real parts are equal and their imaginary parts are equal.
z₁ = z₂ if and only if a₁ = a₂ AND b₁ = b₂.`,
                    "mcq": { "question": "What is the value of i², where i is the imaginary unit?", "options": ["1", "-1", "i", "-i"], "correctAnswer": "-1", "explanation": "The imaginary unit 'i' is defined as the square root of -1 (i = √-1). Therefore, squaring both sides gives i² = -1." }
                },
                {
                    "title": "1.2 Arithmetic of Complex Numbers, Conjugates, Modulus, Argument",
                    "image": "https://images.pexels.com/photos/7111523/pexels-photo-7111523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=ZpMp7IWqMxo",
                    "content": `Arithmetic Operations:
Complex numbers can be added, subtracted, multiplied, and divided.

Addition: Add the real parts and the imaginary parts separately.
(a + bi) + (c + di) = (a + c) + (b + d)i

Example: (3 + 2i) + (1 - 4i) = (3+1) + (2-4)i = 4 - 2i.

Subtraction: Subtract the real parts and the imaginary parts separately.
(a + bi) - (c + di) = (a - c) + (b - d)i

Example: (5 - i) - (2 + 3i) = (5-2) + (-1-3)i = 3 - 4i.

Multiplication: Multiply as binomials (using FOIL or distributive property), remembering that i² = -1.
(a + bi)(c + di) = ac + adi + bci + bdi²
= ac + (ad + bc)i + bd(-1)
= (ac - bd) + (ad + bc)i

Example: (2 + 3i)(1 - i) = 2(1) + 2(-i) + 3i(1) + 3i(-i)
= 2 - 2i + 3i - 3i²
= 2 + i - 3(-1)
= 2 + i + 3 = 5 + i.

Complex Conjugate (z̅ or z*):
The complex conjugate of a complex number z = a + bi is z̅ = a - bi. (The sign of the imaginary part is changed).

Example: If z = 3 + 4i, then z̅ = 3 - 4i.

Example: If z = 2 - 5i, then z̅ = 2 + 5i.

If z is a real number (b=0), then z̅ = z.

Geometrically, z̅ is the reflection of z across the real axis in the Argand diagram.

Properties of Conjugates:

(z̅)̅ = z

z + z̅ = (a + bi) + (a - bi) = 2a (Always a real number)

z - z̅ = (a + bi) - (a - bi) = 2bi (Always purely imaginary if b≠0)

z z̅ = (a + bi)(a - bi) = a² - (bi)² = a² - b²i² = a² - b²(-1) = a² + b² (Always a non-negative real number. This is |z|², see Modulus).

(z₁ + z₂)̅ = z₁̅ + z₂̅

(z₁ - z₂)̅ = z₁̅ - z₂̅

(z₁ z₂)̅ = z₁̅ z₂̅

(z₁ / z₂)̅ = z₁̅ / z₂̅ (if z₂ ≠ 0)

Division: To divide complex numbers, multiply the numerator and denominator by the complex conjugate of the denominator. This makes the denominator a real number.
(a + bi) / (c + di) = [(a + bi)(c - di)] / [(c + di)(c - di)]
= [(ac - adi + bci - bdi²)] / (c² + d²)
= [(ac + bd) + (bc - ad)i] / (c² + d²)
= [(ac + bd) / (c² + d²)] + [(bc - ad) / (c² + d²)]i (Separating real and imaginary parts).

Example: (2 + i) / (1 - 3i)
Multiply numerator and denominator by (1 + 3i):
[(2 + i)(1 + 3i)] / [(1 - 3i)(1 + 3i)] = [2 + 6i + i + 3i²] / [1² + 3²]
= [2 + 7i - 3] / [1 + 9] = [-1 + 7i] / 10 = -1/10 + (7/10)i.

Modulus of a Complex Number (|z|):
The modulus of a complex number z = a + bi is its distance from the origin (0,0) in the Argand diagram. It is a non-negative real number.
|z| = |a + bi| = √(a² + b²)
(This is derived from the Pythagorean theorem, as |z| is the length of the hypotenuse of a right triangle with sides a and b).

|z|² = z z̅ = a² + b².

Properties of Modulus:

|z| ≥ 0; |z| = 0 if and only if z = 0.

|z| = |-z| = |z̅|.

|z₁z₂| = |z₁| |z₂|.

|z₁/z₂| = |z₁| / |z₂| (if z₂ ≠ 0).

Triangle Inequality: |z₁ + z₂| ≤ |z₁| + |z₂|.

Argument of a Complex Number (arg(z) or φ or θ):
The argument of a non-zero complex number z = a + bi is the angle φ (usually in radians) that the vector representing z (from origin to point (a,b)) makes with the positive real axis in the Argand diagram.

tan(φ) = b/a (if a ≠ 0).

The argument is multi-valued, as adding 2πn (where n is an integer) gives the same direction.

Principal Argument (Arg(z)): Usually defined to be in the interval (-π, π] or [0, 2π). Care must be taken to find the correct quadrant based on the signs of a and b.

If a > 0 (Quadrants I or IV): φ = arctan(b/a).

If a < 0, b ≥ 0 (Quadrant II): φ = arctan(b/a) + π (or 180°).

If a < 0, b < 0 (Quadrant III): φ = arctan(b/a) - π (or +π then adjust, or arctan(b/a) + 180° then find principal).

If a = 0, b > 0: φ = π/2 (90°).

If a = 0, b < 0: φ = -π/2 (or 3π/2, 270°).

If z=0, argument is undefined.

(Suggested insertion: Worked examples for addition, subtraction, multiplication of complex numbers. Detailed example for division, emphasizing use of conjugate. Examples calculating modulus and argument (with attention to quadrants for argument) for several complex numbers. Argand diagrams illustrating these.)`,
                    "mcq": {
                        "question": "What is the complex conjugate of z = -5 + 7i?",
                        "options": ["5 - 7i", "5 + 7i", "-5 - 7i", "-5 + 7i"],
                        "correctAnswer": "-5 - 7i",
                        "explanation": "The complex conjugate is found by changing the sign of the imaginary part. The real part (-5) remains the same, and the imaginary part (+7i) becomes -7i."
                    }
                },
                {
                    "title": "1.3 Polar (Trigonometric) Form and Euler’s Formula",
                    "image": "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=7vA8HOu86Os",
                    "content": `Representing a complex number z = a + bi using its modulus r = |z| and argument φ = arg(z).
From the Argand diagram, we can see:

a = r cos(φ)

b = r sin(φ)
So, z = a + bi = r cos(φ) + (r sin(φ))i = r(cos(φ) + i sin(φ)).
This is the polar form (or trigonometric form or modulus-argument form) of a complex number.
z = r(cos φ + i sin φ) (often abbreviated as r cis φ)
Where:

r = |z| = √(a² + b²) (modulus)

φ = arg(z) (argument), with tan(φ) = b/a and correct quadrant considered.

Multiplication and Division in Polar Form:
If z₁ = r₁(cos φ₁ + i sin φ₁) and z₂ = r₂(cos φ₂ + i sin φ₂), then:

Multiplication: Multiply the moduli and add the arguments.
z₁z₂ = r₁r₂ [cos(φ₁ + φ₂) + i sin(φ₁ + φ₂)]

Division: Divide the moduli and subtract the arguments.
z₁/z₂ = (r₁/r₂) [cos(φ₁ - φ₂) + i sin(φ₁ - φ₂)] (for z₂ ≠ 0)
These rules make multiplication and division of complex numbers (especially powers and roots) much simpler than in Cartesian form a+bi.

Euler's Formula (Leonhard Euler):
A fundamental relationship connecting complex exponentials with trigonometric functions:
e^(iφ) = cos(φ) + i sin(φ)
where e is Euler's number (base of natural logarithm, e ≈ 2.718...), and φ is in radians.

This allows the polar form to be written concisely as:
z = r e^(iφ) (Exponential form of a complex number).

From Euler's formula:
cos(φ) = (e^(iφ) + e^(-iφ)) / 2
sin(φ) = (e^(iφ) - e^(-iφ)) / (2i)

A special case: e^(iπ) = cos(π) + i sin(π) = -1 + i(0) = -1. So, e^(iπ) + 1 = 0 (Euler's Identity - links five fundamental mathematical constants).

Using exponential form for multiplication/division:
z₁z₂ = (r₁e^(iφ₁))(r₂e^(iφ₂)) = r₁r₂ e^(i(φ₁ + φ₂))
z₁/z₂ = (r₁e^(iφ₁)) / (r₂e^(iφ₂)) = (r₁/r₂) e^(i(φ₁ - φ₂))

(Suggested insertion: Examples of converting complex numbers from Cartesian form (a+bi) to polar form (r(cosφ + isinφ)) and vice-versa. Worked examples of multiplication and division of complex numbers using their polar forms. State Euler's formula and identity.)`,
                    "mcq": { "question": "According to Euler's Identity, what is the value of e^(iπ) + 1?", "options": ["1", "-1", "0", "i"], "correctAnswer": "0", "explanation": "Euler's formula states e^(iφ) = cos(φ) + i sin(φ). For φ = π, e^(iπ) = cos(π) + i sin(π) = -1 + 0i = -1. Therefore, e^(iπ) + 1 = -1 + 1 = 0." }
                },
                {
                    "title": "1.4 Roots of Unity and De Moivre’s Theorem",
                    "image": "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=B_LYan3OsjA",
                    "content": `De Moivre's Theorem (Abraham de Moivre):
A powerful theorem for finding powers and roots of complex numbers in polar form.
If z = r(cos φ + i sin φ) and n is an integer, then:
zⁿ = [r(cos φ + i sin φ)]ⁿ = rⁿ(cos(nφ) + i sin(nφ))

In exponential form: (re^(iφ))ⁿ = rⁿe^(inφ).

This theorem is very useful for calculating (cos φ + i sin φ)ⁿ and for deriving trigonometric identities (e.g., expressing cos(nφ) and sin(nφ) in terms of powers of cosφ and sinφ).

Finding n-th Roots of a Complex Number:
A non-zero complex number z = r(cos φ + i sin φ) has exactly n distinct n-th roots.
If w = ⁿ√z, and w = R(cos θ + i sin θ), then wⁿ = z.
Using De Moivre's theorem: Rⁿ(cos(nθ) + i sin(nθ)) = r(cos φ + i sin φ).
So, Rⁿ = r => R = ⁿ√r (the real, positive n-th root of r).
And nθ = φ + 2kπ (where k is an integer, because angles can repeat every 2π).
θ = (φ + 2kπ) / n.
To get n distinct roots, let k = 0, 1, 2, ..., (n-1).
The n-th roots are given by:
w_k = ⁿ√r [cos((φ + 2kπ)/n) + i sin((φ + 2kπ)/n)]
for k = 0, 1, 2, ..., (n-1).

The n distinct n-th roots all have the same modulus ⁿ√r.

They are equally spaced around a circle of radius ⁿ√r in the Argand diagram, with an angular separation of 2π/n radians (or 360°/n) between successive roots.

Roots of Unity:
The n-th roots of 1 (i.e., solutions to zⁿ = 1).
Since 1 = 1(cos 0 + i sin 0) (so r=1, φ=0), the n-th roots of unity are:
w_k = cos(2kπ/n) + i sin(2kπ/n)
for k = 0, 1, 2, ..., (n-1).

The principal root (for k=0) is w₀ = 1.

Geometrically, the n-th roots of unity lie on the unit circle in the Argand diagram and form the vertices of a regular n-sided polygon inscribed in the circle, with one vertex at (1,0).

If ω = cos(2π/n) + i sin(2π/n) is the principal complex n-th root, then the roots are 1, ω, ω², ..., ωⁿ⁻¹.

The sum of the n-th roots of unity is 0 (for n > 1).

(Suggested insertion: Worked examples of using De Moivre's Theorem to find powers of complex numbers (e.g., (1+i)⁶). Detailed examples of finding n-th roots of a complex number (e.g., cube roots of 8i, fourth roots of -16), showing how to find r and φ for the original number and then applying the root formula for k=0, 1, ..., n-1. Plotting these roots on an Argand diagram to show their geometric arrangement (e.g., vertices of a regular polygon). Specific example for roots of unity, e.g., cube roots of 1, fourth roots of 1.)`,
                    "mcq": [
                        { "question": "Using De Moivre's Theorem, what is (cos θ + i sin θ)³?", "options": ["cos(3θ) + i sin(3θ)", "cos³θ + i sin³θ", "3(cos θ + i sin θ)", "cos(θ³) + i sin(θ³)"], "correctAnswer": "cos(3θ) + i sin(3θ)", "explanation": "De Moivre's Theorem states that [r(cos φ + i sin φ)]ⁿ = rⁿ(cos(nφ) + i sin(nφ)). Here, r=1 and n=3, so the result is cos(3θ) + i sin(3θ)." },
                        { "question": "How many distinct 4th roots of unity are there?", "options": ["1", "2", "3", "4"], "correctAnswer": "4", "explanation": "A non-zero complex number has exactly n distinct n-th roots. Therefore, there are 4 distinct 4th roots of unity (the solutions to z⁴ = 1)." },
                        { "question": "What is the modulus of the complex number z = 3 - 4i?", "options": ["5", "7", "1", "25"], "correctAnswer": "5", "explanation": "The modulus |z| = √(a² + b²). For z = 3 - 4i, a=3 and b=-4. So, |z| = √(3² + (-4)²) = √(9 + 16) = √25 = 5." },
                        { "question": "If z₁ = 2 + 3i and z₂ = 1 - i, what is z₁ + z₂?", "options": ["1 + 4i", "3 + 2i", "3 + 4i", "1 + 2i"], "correctAnswer": "3 + 2i", "explanation": "To add complex numbers, add the real parts and imaginary parts separately. (2+1) + (3-1)i = 3 + 2i." },
                        { "question": "On an Argand diagram, the complex number z = a + bi is represented by the point with Cartesian coordinates:", "options": ["(a, 0)", "(0, b)", "(a, b)", "(b, a)"], "correctAnswer": "(a, b)", "explanation": "In an Argand diagram, the horizontal axis is the real axis and the vertical axis is the imaginary axis. The complex number z = a + bi corresponds to the point (a, b)." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 2: Binomial Theorem and Series Expansions",
            "image": "https://images.pexels.com/photos/7723354/pexels-photo-7723354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=s19dWIHficY",
                "https://www.youtube.com/watch?v=SwaVN0epc0w",
                "https://www.youtube.com/watch?v=8J7JXEEOOAU"
            ],
            "sections": [
                {
                    "title": "2.1 Binomial Expansion for Positive Integer Powers (n ∈ ℕ)",
                    "image": "https://images.pexels.com/photos/5995311/pexels-photo-5995311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=s19dWIHficY",
                    "content": `The Binomial Theorem provides a powerful formula for expanding expressions of the form (a + x)ⁿ for various types of exponents n. 
                    Initially developed for positive integer powers, it can be generalized to include negative and fractional exponents, leading to infinite series expansions. These expansions are not only crucial for algebraic manipulation but also have significant applications in approximations, probability, and other areas of mathematics and science. This chapter will cover the binomial expansion for different types of n, explore its applications, and introduce the concepts of Maclaurin and Taylor series as a more general way to represent functions as infinite sums.

When n is a positive integer, the binomial theorem provides a finite sum for the expansion of (a + x)ⁿ.
Simple Expansions:
(a + x)⁰ = 1
(a + x)¹ = a + x
(a + x)² = a² + 2ax + x²
(a + x)³ = a³ + 3a²x + 3ax² + x³
(a + x)⁴ = a⁴ + 4a³x + 6a²x² + 4ax³ + x⁴
Observations from these expansions:
There are n + 1 terms in the expansion of (a + x)ⁿ.
The powers of a decrease from n down to 0.
The powers of x increase from 0 up to n.
The sum of the powers of a and x in each term is always n.
The coefficients follow a pattern, known as binomial coefficients.
Pascal's Triangle:
A triangular array of numbers where each number is the sum of the two numbers directly above it (with 1s along the edges). The rows of Pascal's triangle give the binomial coefficients for (a + x)ⁿ.
Row 0: 1 (for n=0)
Row 1: 1 1 (for n=1)
Row 2: 1 2 1 (for n=2)
Row 3: 1 3 3 1 (for n=3)
Row 4: 1 4 6 4 1 (for n=4)
Row 5: 1 5 10 10 5 1 (for n=5)
And so on.
Binomial Coefficients (nCr or (ⁿᵣ) or C(n,r)):
The coefficient of the term a^(n-r) x^r in the expansion of (a + x)ⁿ is given by the binomial coefficient nCr ("n choose r"), which represents the number of ways to choose r items from a set of n distinct items without regard to order.
nCr = n! / [r! (n - r)!]
where n! (n factorial) = n × (n-1) × ... × 2 × 1, and 0! = 1.
nC0 = 1, nCn = 1, nCr = nC(n-r).
The Binomial Theorem (for positive integer n):
(a + x)ⁿ = nC0 aⁿx⁰ + nC1 aⁿ⁻¹x¹ + nC2 aⁿ⁻²x² + ... + nCr aⁿ⁻ʳxʳ + ... + nCn a⁰xⁿ
Or, using summation notation:
(a + x)ⁿ = Σ [from r=0 to n] (nCr aⁿ⁻ʳ xʳ)
Key terms and properties:
General Term ( (r+1)-th term, T_(r+1) ): T_(r+1) = nCr aⁿ⁻ʳ xʳ. (Note: r starts from 0 for the first term).
For the expansion of (1 + x)ⁿ:
(1 + x)ⁿ = nC0 + nC1 x + nC2 x² + ... + nCr xʳ + ... + xⁿ
= 1 + nx + [n(n-1)/2!] x² + [n(n-1)(n-2)/3!] x³ + ... + xⁿ
If the binomial is (a - x)ⁿ, then the terms alternate in sign:
(a - x)ⁿ = nC0 aⁿ - nC1 aⁿ⁻¹x + nC2 aⁿ⁻²x² - ... + (-1)ʳ nCr aⁿ⁻ʳxʳ + ... + (-1)ⁿ xⁿ
(Suggested insertion: Illustration of Pascal's triangle up to n=6. Clear definition of nCr and calculation examples. Worked examples expanding binomials like (x+2y)⁴ and (2x-1)⁵ using both Pascal's triangle and nCr. Examples of finding a specific term or coefficient in an expansion.)`,
                    "mcq": { "question": "What is the coefficient of the x² term in the expansion of (1 + x)⁴?", "options": ["1", "4", "6", "3"], "correctAnswer": "6", "explanation": "The term is given by 4C2 * 1^(4-2) * x². The binomial coefficient 4C2 = 4! / (2! * 2!) = (4*3)/(2*1) = 6." }
                },
                {
                    "title": "2.2 Generalized Binomial Theorem for Fractional and Negative Indices",
                    "image": "https://images.pexels.com/photos/5995311/pexels-photo-5995311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=JnjAr7PhwqI",
                    "content": `The binomial theorem can be extended to cases where the exponent n is not a positive integer (i.e., n can be negative or a fraction). In such cases, the expansion becomes an infinite series and is only valid under certain conditions.
The Generalized Binomial Theorem (for (1 + x)ⁿ where n is any real number):
If n is any real number (negative, fractional, or positive non-integer), and |x| < 1 (the condition for convergence of the series), then:
(1 + x)ⁿ = 1 + nx + [n(n-1)/2!] x² + [n(n-1)(n-2)/3!] x³ + ... + [n(n-1)...(n-r+1)/r!] xʳ + ...
Key Differences from Positive Integer Case:
The series is infinite (does not terminate).
The expansion is valid only if |x| < 1 (or -1 < x < 1). This is the condition of validity or interval of convergence.
The coefficients cannot be written using nCr notation in the same way (as n is not necessarily a positive integer greater than or equal to r). The general form of the coefficient is used.
Expansion of (a + x)ⁿ for general n:
To use the generalized theorem, first factor out a:
(a + x)ⁿ = aⁿ (1 + x/a)ⁿ
Then expand (1 + x/a)ⁿ using the series, provided |x/a| < 1.
(a + x)ⁿ = aⁿ {1 + n(x/a) + [n(n-1)/2!] (x/a)² + [n(n-1)(n-2)/3!] (x/a)³ + ...}
Common Expansions:
(1 + x)⁻¹ = 1 - x + x² - x³ + ... (Geometric series, valid for |x|<1)
(1 - x)⁻¹ = 1 + x + x² + x³ + ... (Valid for |x|<1)
(1 + x)^(1/2) = √ (1+x) = 1 + (1/2)x - (1/8)x² + (1/16)x³ - ... (Valid for |x|<1)
(1 + x)⁻² = 1 - 2x + 3x² - 4x³ + ... (Valid for |x|<1)
(Suggested insertion: Clear statement of the generalized binomial theorem for (1+x)ⁿ. Step-by-step examples of expanding expressions like (1+3x)^(-2) or √(4-x) up to a certain term (e.g., x³), stating the condition of validity for x in each case.)`,
                    "mcq": {
                        "question": "For what values of x is the binomial expansion of (1 + 4x)^(-1/2) valid?",
                        "options": ["|x| < 1", "|x| < 4", "|x| < 1/2", "|x| < 1/4"],
                        "correctAnswer": "|x| < 1/4",
                        "explanation": "The generalized binomial expansion for (1 + y)ⁿ is valid for |y| < 1. In this case, y = 4x. So, we need |4x| < 1, which simplifies to |x| < 1/4."
                    }
                },
                {
                    "title": "2.3 Applications: Approximations, Series Summation Techniques (Focused)",
                    "image": "https://images.pexels.com/photos/5995311/pexels-photo-5995311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=LDBnS4c7YbA",
                    "content": `Approximations:

When x is small (|x| << 1), the binomial expansion provides a good way to approximate (1 + x)ⁿ by using only the first few terms of its infinite series. The accuracy generally improves with more terms.

First-order approximation: (1 + x)ⁿ ≈ 1 + nx (This is often sufficient if x is very small).

Second-order approximation: (1 + x)ⁿ ≈ 1 + nx + [n(n-1)/2!] x².

Procedure for Approximating expressions like (a + x)ⁿ or ⁿ√(a+x):

1. Rewrite the expression in the form A(1 + B)ⁿ where |B| is small. Often involves factoring out the larger part.

2. Apply the binomial expansion to (1 + B)ⁿ up to a desired number of terms.

3. Multiply by A.

Example 1: Find an approximation for √(26).
√(26) = √(25 + 1) = √(25(1 + 1/25)) = √25 * (1 + 1/25)^(1/2) = 5 * (1 + 0.04)^(1/2).
Here n=1/2, x=0.04.
5 * (1 + 0.04)^(1/2) ≈ 5 * [1 + (1/2)(0.04) + ( (1/2)(-1/2) / 2! ) (0.04)² ]
≈ 5 * [1 + 0.02 - (1/8)(0.0016)]
≈ 5 * [1 + 0.02 - 0.0002] = 5 * [1.0198] = 5.0990.
(Calculator: √26 ≈ 5.0990195).

Example 2: Approximate 1 / (1.03)³ = (1 + 0.03)⁻³.
Here n=-3, x=0.03.
≈ 1 + (-3)(0.03) + ( (-3)(-4) / 2! ) (0.03)²
≈ 1 - 0.09 + (12/2)(0.0009) = 1 - 0.09 + 6(0.0009)
≈ 1 - 0.09 + 0.0054 = 0.9154.

Validity of Expansion: Always state the range of x values for which the infinite binomial expansion is valid (converges). For (1 + y)ⁿ, the condition is |y| < 1.

(For a "Further Mathematics" syllabus primarily focused on WAEC/Cambridge Additional Math standards, detailed series summation techniques beyond simple recognition of geometric series via binomial expansion might be limited. If Maclaurin/Taylor are truly just "introduced," this section keeps a focus on core binomial applications.)`,
                    "mcq": { "question": "Using the first-order approximation (1 + x)ⁿ ≈ 1 + nx, what is the approximate value of √1.02?", "options": ["1.01", "1.02", "1.1", "1.005"], "correctAnswer": "1.01", "explanation": "√1.02 can be written as (1 + 0.02)^(1/2). Here, n=1/2 and x=0.02. The approximation is 1 + (1/2)(0.02) = 1 + 0.01 = 1.01." }
                },
                {
                    "title": "2.4 Maclaurin and Taylor Series (Brief Introduction)",
                    "image": "https://images.pexels.com/photos/5995311/pexels-photo-5995311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=LDBnS4c7YbA",
                    "content": `While the binomial theorem specifically expands expressions of the form (a+x)ⁿ, Taylor series and Maclaurin series provide a more general method for representing many well-behaved functions as infinite power series (polynomials of infinite degree).

These series allow us to approximate functions locally using polynomials, understand their behavior, and evaluate them.

Taylor Series Expansion of f(x) about x = a:
If a function f(x) has derivatives of all orders at x=a, its Taylor series is:
f(x) = f(a) + f'(a)(x-a)/1! + f''(a)(x-a)²/2! + f'''(a)(x-a)³/3! + ...
= Σ [from k=0 to ∞] (f^(k)(a)/k!) (x-a)^k
where f^(k)(a) is the k-th derivative of f evaluated at a, and k! = k × (k-1) × ... × 1 (0!=1).

Maclaurin Series: A special case of the Taylor series where the expansion is about x = 0 (i.e., a = 0).
f(x) = f(0) + f'(0)x/1! + f''(0)x²/2! + f'''(0)x³/3! + ...
= Σ [from k=0 to ∞] (f^(k)(0)/k!) x^k

Key Idea: Many common functions can be represented by these series within their interval of convergence.

The generalized binomial series for (1 + x)ⁿ IS the Maclaurin series for f(x) = (1 + x)ⁿ.
Calculating the derivatives of f(x) = (1 + x)ⁿ at x=0:
f(0) = 1
f'(x) = n(1+x)ⁿ⁻¹, f'(0) = n
f''(x) = n(n-1)(1+x)ⁿ⁻², f''(0) = n(n-1)
f'''(x) = n(n-1)(n-2)(1+x)ⁿ⁻³, f'''(0) = n(n-1)(n-2)
Substituting into the Maclaurin formula gives the binomial expansion.

Common Maclaurin Series (often given or derived in early calculus):
(For x in radians for trig functions)

e^x = 1 + x + x²/2! + x³/3! + ... (for all x)

sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ... (for all x)

cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ... (for all x)

ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ... (for -1 < x ≤ 1)

These series are fundamental in advanced mathematics for approximating functions, solving differential equations, and in theoretical physics. For this course, familiarity with the concept and perhaps derivation of the binomial expansion as a Maclaurin series is typical.

(Suggested insertion: Statement of Taylor and Maclaurin series formulas. Derivation showing the binomial expansion is the Maclaurin series for (1+x)ⁿ. Listing of common Maclaurin series for e^x, sin x, cos x, ln(1+x) with their conditions of validity. One simple example of using a Maclaurin series (e.g., first few terms of e^x) to approximate a value.)`,
                    "mcq": [
                        { "question": "The Maclaurin series is a special case of the Taylor series expanded about what value of x?", "options": ["x = 1", "x = -1", "x = 0", "x = a"], "correctAnswer": "x = 0", "explanation": "A Taylor series is an expansion of a function about a point 'a'. A Maclaurin series is the specific case where the expansion is centered at a = 0." },
                        { "question": "What is the formula for the general term, T_(r+1), in the expansion of (a + x)ⁿ for a positive integer n?", "options": ["nCr aʳ xⁿ⁻ʳ", "nCr aⁿ⁻ʳ xʳ", "nPr aⁿ⁻ʳ xʳ", "nCr aⁿ xⁿ⁻ʳ"], "correctAnswer": "nCr aⁿ⁻ʳ xʳ", "explanation": "The (r+1)-th term in the binomial expansion of (a + x)ⁿ is given by the formula T_(r+1) = nCr aⁿ⁻ʳ xʳ, where r starts from 0." },
                        { "question": "The binomial expansion of (1 - 2x)⁻¹ results in which type of series?", "options": ["A finite polynomial", "An infinite geometric series", "A finite arithmetic series", "An infinite alternating series"], "correctAnswer": "An infinite geometric series", "explanation": "For a negative exponent, the binomial expansion is an infinite series. (1-y)⁻¹ = 1 + y + y² + ..., which is an infinite geometric series. Here y = 2x." },
                        { "question": "What are the first three terms in the expansion of (1 - x)^(1/2)?", "options": ["1 + (1/2)x - (1/8)x²", "1 - (1/2)x - (1/8)x²", "1 - (1/2)x + (1/4)x²", "1 + (1/2)x + (1/4)x²"], "correctAnswer": "1 - (1/2)x - (1/8)x²", "explanation": "Using (1+y)ⁿ = 1+ny+[n(n-1)/2!]y²..., with y=-x and n=1/2. 1+(1/2)(-x)+(1/2)(-1/2)/2² = 1 - (1/2)x - (1/8)x²." },
                        { "question": "How many terms are in the expansion of (2a - 3b)¹⁰?", "options": ["9", "10", "11", "12"], "correctAnswer": "11", "explanation": "The binomial expansion of (a + x)ⁿ, where n is a positive integer, has n + 1 terms. Therefore, for n=10, there are 10 + 1 = 11 terms." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 3: Polynomials and Rational Functions",
            "image": "https://images.pexels.com/photos/7723354/pexels-photo-7723354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=fy45qX8cUwQ",
                "https://www.youtube.com/watch?v=_FSXJmESFmQ",
                "https://www.youtube.com/watch?v=0Gq3uw2p6fA"
            ],
            "sections": [
                {
                    "title": "3.1 Polynomial Division, Factor Theorem, and Remainder Theorem",
                    "image": "https://images.pexels.com/photos/32452825/pexels-photo-32452825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=e9ENqo5ploM",
                    "content": `Polynomial and rational functions are fundamental classes of functions extensively used in mathematics, science, and engineering to model various phenomena. This chapter delves deeper into the properties of polynomials, including division, the factor and remainder theorems, and the nature of their roots. We will also explore the graphical behavior of polynomials and extend our analysis to rational functions, focusing on identifying asymptotes and sketching their graphs.

Polynomial (Review): An expression of the form P(x) = a_n x^n + a_{n-1}x^{n-1} + ... + a_1 x + a_0, where a_i are real coefficients, a_n ≠ 0, and n is a non-negative integer (the degree of the polynomial).

Polynomial Division: Similar to long division of numbers, we can divide one polynomial by another (non-zero) polynomial.
If P(x) is a polynomial (dividend) and D(x) is a non-zero polynomial (divisor) with degree(D(x)) ≤ degree(P(x)), then there exist unique polynomials Q(x) (quotient) and R(x) (remainder) such that:
P(x) = D(x) Q(x) + R(x)
where either R(x) = 0 or degree(R(x)) < degree(D(x)).

If R(x) = 0, then D(x) is a factor of P(x).

The process is analogous to numerical long division.

Synthetic Division (Special Case): A shorthand method for dividing a polynomial P(x) by a linear binomial of the form (x - c). It is quicker than long division but only applicable for linear divisors of this specific form.

Remainder Theorem:
If a polynomial P(x) is divided by a linear binomial (x - c), the remainder R is equal to P(c) (the value of the polynomial when x = c).

P(x) = (x - c) Q(x) + R
Substituting x = c: P(c) = (c - c) Q(c) + R = 0 ⋅ Q(c) + R = R.

Useful for finding the remainder without performing the full division, or for evaluating P(c).

Factor Theorem:
A direct consequence of the Remainder Theorem.
A linear binomial (x - c) is a factor of a polynomial P(x) if and only if P(c) = 0 (i.e., if c is a root or zero of the polynomial).

If P(c) = 0, then (x - c) is a factor of P(x).

If (x - c) is a factor of P(x), then P(c) = 0.

Useful for finding factors of polynomials and thus solving polynomial equations. If one root c is known (or found by trial and error, often testing factors of the constant term), then (x-c) is a factor, and polynomial division can be used to find other factors.

(Suggested insertion: Step-by-step worked examples of polynomial long division. A separate step-by-step example of synthetic division. Clear examples illustrating the use of the Remainder Theorem to find remainders, and the Factor Theorem to test for factors and find roots of polynomials (e.g., cubic or quartic where one or two integer roots can be found easily).)
`,
                    "mcq": { "question": "According to the Remainder Theorem, what is the remainder when the polynomial P(x) = x³ - 2x² + x + 5 is divided by (x - 2)?", "options": ["-1", "5", "7", "3"], "correctAnswer": "7", "explanation": "The Remainder Theorem states the remainder is P(c) when dividing by (x - c). Here, c=2. P(2) = (2)³ - 2(2)² + (2) + 5 = 8 - 8 + 2 + 5 = 7." }
                },
                {
                    "title": "3.2 Roots of Polynomials: Nature, Multiplicity, and Complex Roots",
                    "image": "https://images.pexels.com/photos/7081370/pexels-photo-7081370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=a5x4lwnvHM0",
                    "content": `Roots (or Zeros) of a Polynomial: The values of x for which P(x) = 0. These correspond to the x-intercepts of the graph of y = P(x).

Fundamental Theorem of Algebra (stated): Every non-constant single-variable polynomial with complex coefficients has at least one complex root. A corollary is that a polynomial of degree n has exactly n complex roots, counting multiplicities.

Nature of Roots:
For a polynomial with real coefficients:

Real Roots: Values of x where the graph y=P(x) crosses or touches the x-axis.

Complex Roots (Imaginary Roots): Roots that are not real numbers; they involve the imaginary unit i.

If a polynomial with real coefficients has a complex root a + bi (where b ≠ 0), then its complex conjugate a - bi must also be a root. Complex roots with non-zero imaginary parts always occur in conjugate pairs for polynomials with real coefficients.

Multiplicity of a Root:
If (x - c)^k is a factor of P(x) but (x - c)^(k+1) is not, then c is a root of multiplicity k.

If k = 1, it is a simple root (graph crosses x-axis).

If k is even (e.g., k=2, double root), the graph touches the x-axis at x=c but does not cross it (tangent to x-axis).

If k is odd and k > 1 (e.g., k=3, triple root), the graph crosses the x-axis at x=c but flattens out there (point of inflection on x-axis).

Finding Roots:

For linear polynomials (ax+b=0): x = -b/a.

For quadratic polynomials (ax²+bx+c=0): Quadratic formula x = [-b ± √(b²-4ac)] / 2a. Discriminant b²-4ac determines nature of roots.

For higher-degree polynomials:

Rational Root Theorem: If a polynomial with integer coefficients has rational roots p/q (in simplest form), then p must be a factor of the constant term (a_0) and q must be a factor of the leading coefficient (a_n). Helps list possible rational roots to test (using Factor Theorem or synthetic division).

Factoring (if possible, using techniques from 4.1, often after finding one root with Factor Theorem).

Numerical methods (e.g., Newton-Raphson) for approximations if exact roots are hard to find (usually beyond scope here, but can be mentioned).

(Suggested insertion: Examples showing different types of roots (real distinct, real repeated, complex conjugate pairs) for quadratic and simple cubic polynomials. An illustration of root multiplicity effect on the graph (touching vs. crossing x-axis). An example applying the Rational Root Theorem to find possible rational roots of a cubic and then using Factor Theorem to find actual roots.)`,
                    "mcq": {
                        "question": "If a polynomial with real coefficients has a complex root 2 + 3i, which of the following must also be a root?",
                        "options": ["-2 + 3i", "-2 - 3i", "2 - 3i", "3 + 2i"],
                        "correctAnswer": "2 - 3i",
                        "explanation": "The Complex Conjugate Root Theorem states that if a polynomial with real coefficients has a complex root a + bi, then its conjugate a - bi must also be a root."
                    }
                },
                {
                    "title": "3.3 Graphical Behavior of Polynomials (End Behavior, Turning Points)",
                    "image": "https://images.pexels.com/photos/32447977/pexels-photo-32447977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=a5x4lwnvHM0",
                    "content": `The graph of a polynomial function y = P(x) = a_n x^n + ... + a_0 is a smooth, continuous curve with no sharp corners or breaks.

End Behavior: The behavior of f(x) as x → ∞ (x becomes very large positive) and as x → -∞ (x becomes very large negative). Determined by the term with the highest power, a_n x^n (the leading term).

If n is Even:

If a_n > 0 (leading coefficient positive): As x → ±∞, f(x) → +∞. (Graph rises on both left and right ends, U-shape overall).

If a_n < 0 (leading coefficient negative): As x → ±∞, f(x) → -∞. (Graph falls on both left and right ends, ∩-shape overall).

If n is Odd:

If a_n > 0: As x → ∞, f(x) → +∞ (rises right). As x → -∞, f(x) → -∞ (falls left).

If a_n < 0: As x → ∞, f(x) → -∞ (falls right). As x → -∞, f(x) → +∞ (rises left).

Intercepts:

y-intercept: Set x = 0. f(0) = a_0. (Point (0, a_0)).

x-intercepts (Roots/Zeros): Set f(x) = 0 and solve for x. These are where graph crosses/touches x-axis.

Turning Points (Local Maxima and Minima): Points where the graph changes from increasing to decreasing, or vice versa.

A polynomial of degree n has at most n - 1 turning points.

The exact location of turning points requires calculus (finding where derivative P'(x) = 0), but understanding the maximum possible number helps in sketching.

Multiplicity of Roots and Behavior at x-intercepts: (As discussed in 3.2).

Sketching Polynomials:

1. Determine end behavior.

2. Find y-intercept.

3. Find x-intercepts (roots) and their multiplicities (if possible).

4. Consider maximum number of turning points.

5. Plot a few additional points if needed to refine shape.

6. Draw a smooth, continuous curve connecting the points and exhibiting correct end behavior and behavior at roots.

(Suggested insertion: A table or diagrams summarizing end behavior based on degree n (even/odd) and leading coefficient a_n (+/-). Graphs of sample cubic and quartic functions illustrating roots, y-intercept, turning points, and end behavior. Stress that exact turning points need calculus but their maximum number is useful for sketching.)`,
                    "mcq": { "question": "What is the end behavior of the polynomial function f(x) = -3x⁵ + 2x² - 1?", "options": ["Rises left, rises right", "Falls left, falls right", "Rises left, falls right", "Falls left, rises right"], "correctAnswer": "Rises left, falls right", "explanation": "The end behavior is determined by the leading term, -3x⁵. The degree (5) is odd, and the leading coefficient (-3) is negative. Thus, the graph rises to the left (as x → -∞, f(x) → +∞) and falls to the right (as x → +∞, f(x) → -∞)." }
                },
                {
                    "title": "3.4 Asymptotes and Graphing Rational Functions",
                    "image": "https://images.pexels.com/photos/32452825/pexels-photo-32452825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=qQ-zVTX7aGQ",
                    "content": `Rational Function (Review): f(x) = P(x) / Q(x), where P(x) and Q(x) are polynomials and Q(x) ≠ 0.

Asymptotes: Lines that the graph of a function approaches but typically does not touch or cross as the independent variable (x) or dependent variable (y or f(x)) approaches infinity or a specific value where the function is undefined.

Vertical Asymptotes (VA):

Occur at values of x for which the denominator Q(x) = 0 AND the numerator P(x) ≠ 0.

If x = c is a VA, the graph will approach +∞ or -∞ as x approaches c from the left or right.

To find VAs: Set denominator Q(x) = 0 and solve for x. Check that these values do not also make P(x) = 0.

If both P(c)=0 and Q(c)=0, there might be a hole (removable discontinuity) at x=c instead of a VA (if the common factor (x-c) cancels out).

Horizontal Asymptotes (HA): Describe the end behavior of f(x) as x → ∞ or x → -∞.

Compare the degree of the numerator P(x) (let it be n) and the degree of the denominator Q(x) (let it be m):

Case 1: If n < m (degree of numerator < degree of denominator):
The HA is the x-axis, y = 0.

Case 2: If n = m (degrees are equal):
The HA is y = (leading coefficient of P(x)) / (leading coefficient of Q(x)).

Case 3: If n > m (degree of numerator > degree of denominator):
There is no horizontal asymptote.

Slant (Oblique) Asymptotes (SA):

Occur when the degree of the numerator is exactly one greater than the degree of the denominator (n = m + 1).

Found by dividing P(x) by Q(x). The quotient y = ax + b (linear part) is the equation of the SA. The remainder term approaches 0 as x → ±∞.

Sketching Rational Functions:

1. Find Intercepts:

    * y-intercept: Set x=0, find f(0).

    * x-intercepts: Set f(x)=0 (which means set numerator P(x)=0 and solve for x).

2. Find Asymptotes:

    * Vertical Asymptotes (and check for holes).

    * Horizontal or Slant Asymptotes.

3. Determine Behavior Near Vertical Asymptotes: Test values of x slightly to the left and right of each VA to see if f(x) → +∞ or f(x) → -∞.

4. Determine Behavior Near Horizontal/Slant Asymptotes (End Behavior): Does graph approach from above or below?

5. Plot Key Points: Intercepts, points near VAs, points between intercepts/VAs.

6. Check for Symmetry (if any: y-axis if f(-x)=f(x), origin if f(-x)=-f(x)).

7. Draw Smooth Curves: Connect plotted points, approaching the asymptotes. Ensure the graph passes the vertical line test.

(Suggested insertion: Detailed worked examples for finding VAs, HAs, SAs for different rational functions. Step-by-step process of sketching a few rational functions, clearly showing identification of intercepts, asymptotes, testing regions, and final sketch.)`,
                    "mcq": [
                        { "question": "What is the horizontal asymptote of the rational function f(x) = (3x² + 2) / (x² - 1)?", "options": ["y = 0", "y = 3", "y = 2", "No horizontal asymptote"], "correctAnswer": "y = 3", "explanation": "The degree of the numerator (2) is equal to the degree of the denominator (2). The horizontal asymptote is the ratio of the leading coefficients: y = 3/1 = 3." },
                        { "question": "What are the vertical asymptotes of the rational function f(x) = (x + 2) / (x² - 9)?", "options": ["x = -2", "x = 3", "x = -3", "x = 3 and x = -3"], "correctAnswer": "x = 3 and x = -3", "explanation": "Vertical asymptotes occur where the denominator is zero and the numerator is non-zero. The denominator x² - 9 = (x-3)(x+3) is zero at x=3 and x=-3. The numerator is not zero at these values." },
                        { "question": "According to the Factor Theorem, if P(-1) = 0 for a polynomial P(x), which of the following is a factor of P(x)?", "options": ["(x - 1)", "(x + 1)", "x", "(x + 0)"], "correctAnswer": "(x + 1)", "explanation": "The Factor Theorem states that if P(c) = 0, then (x - c) is a factor. Here c = -1, so (x - (-1)) = (x + 1) is a factor." },
                        { "question": "A polynomial of degree 4 can have at most how many turning points?", "options": ["4", "3", "2", "5"], "correctAnswer": "3", "explanation": "A polynomial of degree n has at most n - 1 turning points. For n = 4, the maximum number of turning points is 4 - 1 = 3." },
                        { "question": "If a root x=2 has an even multiplicity for a polynomial P(x), how does the graph of y=P(x) behave at x=2?", "options": ["It crosses the x-axis", "It has a vertical asymptote", "It touches the x-axis but does not cross", "It has a point of inflection"], "correctAnswer": "It touches the x-axis but does not cross", "explanation": "A root with even multiplicity (like a double root) causes the graph to be tangent to the x-axis at that point, meaning it touches the axis and turns around without crossing." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 4: Logarithmic and Exponential Functions",
            "image": "https://images.pexels.com/photos/25626446/pexels-photo-25626446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=10I_TVuYLkQ",
                "https://www.youtube.com/watch?v=7PNIqEXTPWA",
                "https://www.youtube.com/watch?v=oqHJ5xQYTEI"
            ],
            "sections": [
                {
                    "title": "4.1 Laws of Logarithms, Change of Base Formula",
                    "image": "https://images.pexels.com/photos/25626446/pexels-photo-25626446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=ixy9oxsv01Q",
                    "content": `Exponential and logarithmic functions are fundamental in mathematics and describe many phenomena in science, engineering, finance, and nature, such as population growth, radioactive decay, compound interest, and pH scales. Exponential functions involve a constant base raised to a variable exponent, while logarithmic functions are their inverses. This chapter explores the properties of these functions, the laws governing their operations, methods for solving equations involving them, and their common applications.

Exponential Functions (Review):
A function of the form f(x) = b^x or y = b^x, where b is a positive constant called the base (b > 0, b ≠ 1), and x is the variable exponent.

The Natural Exponential Function: f(x) = e^x, where e ≈ 2.71828... (Euler's number) is the natural base. 

Domain: All real numbers ((-∞, ∞)).

Range: All positive real numbers ((0, ∞)).

y-intercept: (0, 1) (since b⁰ = 1).

Horizontal Asymptote: The x-axis (y = 0).

Logarithmic Function: The inverse of an exponential function.
If b^y = x, then log_b (x) = y.
This is read as "logarithm of x to the base b is y".

b is the base (b > 0, b ≠ 1).

x is the argument of the logarithm (x > 0).

y is the logarithm (the exponent).

Common Logarithm: Base 10, denoted log(x) or log₁₀(x).

Natural Logarithm: Base e, denoted ln(x) or log_e(x). (ln(x) = y means e^y = x).

Relationship between Exponential and Logarithmic Forms:
b^y = x <=> log_b(x) = y

log_b(b^x) = x

b^(log_b x) = x (for x > 0)

Laws (Properties) of Logarithms:
(Assume b > 0, b ≠ 1, and M > 0, N > 0. p is any real number.)
Product Rule: log_b (MN) = log_b (M) + log_b (N)
Quotient Rule: log_b (M/N) = log_b (M) - log_b (N)
Power Rule: log_b (M^p) = p log_b (M)
Special Logarithms:
log_b (b) = 1 (since b¹ = b).

log_b (1) = 0 (since b⁰ = 1).

log_b (b^x) = x.

b^(log_b x) = x.

Change of Base Formula:
Allows conversion of logarithms from one base to another.
log_b (M) = log_a (M) / log_a (b)
(where a is any new suitable base, often base 10 or base e for calculator use).
log_b (M) = log(M) / log(b) (using common log, base 10)
log_b (M) = ln(M) / ln(b) (using natural log, base e)
(Suggested insertion: Worked examples for each law of logarithms (expanding and condensing logarithmic expressions). Examples using the change of base formula to evaluate logarithms.)`,
                    "mcq": { "question": "Which of the following expressions is equivalent to log₅(15)?", "options": ["log(5) / log(15)", "ln(15) / ln(5)", "ln(5) / ln(15)", "log(15) - log(5)"], "correctAnswer": "ln(15) / ln(5)", "explanation": "The change of base formula states log_b(M) = log_a(M) / log_a(b). Using base e (natural log), log₅(15) = ln(15) / ln(5)." }
                },
                {
                    "title": "4.2 Exponential Growth and Decay Models",
                    "image": "https://images.pexels.com/photos/25626446/pexels-photo-25626446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=kecr10yzOVA",
                    "content": `Exponential functions model many real-world phenomena where a quantity increases or decreases at a rate proportional to its current value.
General Exponential Growth/Decay Model:
A(t) = A₀ e^(kt) or A(t) = A₀ b^t (where b = e^k)
Where:

A(t) = Amount or quantity at time t.

A₀ = Initial amount or quantity (at t=0).

k = Growth rate constant (if k > 0 for growth) or decay rate constant (if k < 0 for decay).

t = Time.

e = Base of natural logarithm.

b = Growth factor (if b > 1) or decay factor (if 0 < b < 1) per unit time.

Applications:

Population Growth (Unrestricted): Often modeled by P(t) = P₀ e^(kt) where P₀ is initial population, k is relative growth rate. Doubling Time is the time it takes for population to double.

Compound Interest (Continuous Compounding): If principal P is invested at annual rate r compounded continuously, amount A after t years is A(t) = P e^(rt). (For compounding n times per year: A(t) = P(1 + r/n)^(nt). As n → ∞, this approaches P e^(rt)).

Radioactive Decay: The rate of decay of a radioactive substance is proportional to the amount of substance present.
    N(t) = N₀ e^(-λt)
    where N(t) = amount remaining at time t, N₀ = initial amount, λ = decay constant (positive).

Half-Life (t½): Time it takes for half of a radioactive sample to decay.
    t½ = ln(2) / λ ≈ 0.693 / λ.
    After x half-lives, fraction remaining = (½)^x.

Newton's Law of Cooling/Heating: Rate of temperature change of an object is proportional to the difference between its temperature and the ambient temperature. Leads to exponential approach to ambient temperature.

Other examples: Spread of epidemics (initial stages), drug concentration in bloodstream, atmospheric pressure with altitude (decay).

(Suggested insertion: Graphs showing exponential growth (J-curve) and exponential decay. Worked examples for population growth (find k, predict future population, find doubling time), continuous compound interest, and radioactive decay (find λ, predict amount remaining, find half-life).)
`,
                    "mcq": {
                        "question": "In the radioactive decay model N(t) = N₀e^(-λt), what does the constant λ represent?",
                        "options": ["Half-life", "Initial amount", "Decay constant", "Amount remaining"],
                        "correctAnswer": "Decay constant",
                        "explanation": "λ is the decay constant, which determines the rate of decay. The half-life is related to it by t½ = ln(2)/λ."
                    }
                },
                {
                    "title": "4.3 Solving Exponential and Logarithmic Equations",
                    "image": "https://images.pexels.com/photos/25626446/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=9tutJ5xrRwg",
                    "content": `Exponential Equations: Equations where the variable appears in the exponent.

Strategy 1: Same Base Method
If an equation can be written as b^X = b^Y, then X = Y. (Equate exponents).
Example: Solve 2^(x+1) = 8.
2^(x+1) = 2³. So, x+1 = 3 => x = 2.

Strategy 2: Taking Logarithms of Both Sides
If bases cannot be easily made the same, take log (common or natural) of both sides. Then use log properties (especially power rule log(M^p) = p log(M)) to bring variable down.
Example: Solve 3^x = 20.
log(3^x) = log(20)
x log(3) = log(20)
x = log(20) / log(3) ≈ 2.727.

Example: Solve 5^(2x-1) = 10.
ln(5^(2x-1)) = ln(10)
(2x - 1) ln(5) = ln(10)
2x - 1 = ln(10) / ln(5)
2x = 1 + (ln(10) / ln(5))
x = [1 + (ln(10) / ln(5))] / 2 ≈ 1.215.

Logarithmic Equations: Equations that contain logarithmic expressions.

Strategy 1: Using Definition of Logarithm
If an equation is in the form log_b(X) = Y, rewrite it in exponential form b^Y = X and solve for the variable within X.
Example: Solve log₂(x - 3) = 4.
Rewrite: x - 3 = 2⁴
x - 3 = 16 => x = 19.
Check for Validity: Argument of log must be positive. 19 - 3 = 16 > 0. Solution is valid.

Strategy 2: Using Log Properties to Combine/Simplify
If multiple log terms, use log laws to combine them into a single logarithm on one or both sides.
If log_b(X) = log_b(Y), then X = Y.
Example: Solve log₃(x) + log₃(x - 2) = 1.
log₃[x(x - 2)] = 1 (Product rule)
Rewrite in exponential form: x(x - 2) = 3¹
x² - 2x = 3 => x² - 2x - 3 = 0
(x - 3)(x + 1) = 0. Potential solutions: x = 3 or x = -1.
Check for Validity:
* If x = 3: log₃(3) and log₃(1) are defined. Valid.
* If x = -1: log₃(-1) is undefined. Extraneous solution.
Only solution: x = 3.

Always check solutions to logarithmic equations to ensure that arguments of logarithms are positive.

(Suggested insertion: Several worked examples for solving various exponential equations using both same base and logarithm methods. Several worked examples for solving logarithmic equations using definition and log properties, with emphasis on checking for extraneous solutions.)`,
                    "mcq": { "question": "What is the solution to the equation log₂(x) + log₂(x - 7) = 3?", "options": ["x = 8", "x = -1", "x = 8 and x = -1", "x = 3"], "correctAnswer": "x = 8", "explanation": "Combine logs: log₂[x(x-7)] = 3. Convert to exponential form: x(x-7) = 2³. So x² - 7x - 8 = 0. Factoring gives (x-8)(x+1)=0. Potential solutions are x=8, x=-1. We must check for validity. x=-1 makes log₂(-1) undefined. x=8 is valid. So, the only solution is x=8." }
                },
                {
                    "title": "4.4 Applications: Compound Interest, Population Models, Radioactive Decay (Revisited with Equation Solving)",
                    "image": "https://images.pexels.com/photos/25626446/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=BRlKbrnMLuE",
                    "content": `This section applies the equation-solving techniques from 4.3 to the models introduced in 4.2. Now students can solve for time t, rate k, or initial amount A₀, which often requires logarithms.

Compound Interest (A = P(1 + r/n)^(nt) or A = Pe^(rt)):

* Solving for t (time to reach a certain amount).

* Solving for r (rate required).

* Finding Doubling time (time for investment to double).

Example: How long will it take for $1000 to grow to $2000 if invested at 5% per annum compounded continuously?
2000 = 1000 e^(0.05t)
2 = e^(0.05t)
ln(2) = 0.05t
t = ln(2) / 0.05 ≈ 13.86 years.

Population Models (P(t) = P₀ e^(kt)):

* Solving for t (time to reach certain population size).

* Solving for k (growth/decay rate) given population at two different times.

* Finding doubling time or half-life.

Radioactive Decay (N(t) = N₀ e^(-λt) or N(t) = N₀(½)^(t/T½)):

* Solving for t (age of a sample in carbon dating).

* Solving for λ (decay constant) or T½ (half-life).

Example: A sample of Carbon-14 (half-life 5730 years) has 20% of its original C-14 remaining. How old is it?
N(t)/N₀ = 0.20.
0.20 = (½)^(t / 5730)
Take log or ln of both sides: ln(0.20) = (t / 5730) ln(0.5)
t = 5730 × [ln(0.20) / ln(0.5)] ≈ 5730 × [-1.6094 / -0.6931] ≈ 5730 × 2.3219 ≈ 13,300 years.

Newton's Law of Cooling: 
Solving for time to reach a certain temperature, or finding cooling constant.

pH Calculations: 
pH = -log[H⁺]. Can involve solving for [H⁺] = 10^(-pH).

(Suggested insertion: Several worked word problems for each application type (compound interest, population, radioactive decay), specifically demonstrating how to set up the equation and solve for time or rate using logarithms.)`,
                    "mcq": [
                        { "question": "An investment of $P is compounded continuously at an annual rate r for t years. What is the formula for the amount A(t)?", "options": ["A = P(1+r)ᵗ", "A = P(1 + r/n)ⁿᵗ", "A = Peʳᵗ", "A = P(1 + rt)"], "correctAnswer": "A = Peʳᵗ", "explanation": "The formula for continuous compounding is A = Peʳᵗ, where e is Euler's number." },
                        { "question": "Solve the equation 2eˣ = 50 for x.", "options": ["ln(25)", "ln(50)/ln(2)", "25", "log₂(50)"], "correctAnswer": "ln(25)", "explanation": "Divide by 2: eˣ = 25. Take the natural logarithm of both sides: ln(eˣ) = ln(25). This simplifies to x = ln(25)." },
                        { "question": "Which expression is equivalent to 2log(x) - log(y)?", "options": ["log(2x/y)", "log(x² - y)", "log(x²/y)", "log(xy²)"], "correctAnswer": "log(x²/y)", "explanation": "Using the power rule, 2log(x) = log(x²). Using the quotient rule, log(x²) - log(y) = log(x²/y)." },
                        { "question": "If the half-life of a substance is 100 years, what fraction of the original substance remains after 300 years?", "options": ["1/2", "1/3", "1/4", "1/8"], "correctAnswer": "1/8", "explanation": "300 years is equal to 3 half-lives (300/100 = 3). After each half-life, the amount is halved. So after 3 half-lives, the remaining fraction is (1/2) * (1/2) * (1/2) = (1/2)³ = 1/8." },
                        { "question": "Why is x=-2 an extraneous solution to the equation log(x) + log(x+1) = log(2)?", "options": ["It is negative", "It makes the argument of a logarithm negative", "It is not an integer", "It doesn't satisfy the simplified equation"], "correctAnswer": "It makes the argument of a logarithm negative", "explanation": "The domain of log(x) requires x > 0. Substituting x=-2 into the original equation results in log(-2) and log(-1), which are undefined in the real number system. Therefore, it's an extraneous solution." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 5: Limits, Continuity, and Differentiation",
            "image": "https://images.pexels.com/photos/7723354/pexels-photo-7723354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=YNstP0ESndU",
                "https://www.youtube.com/watch?v=fml0-ELYLaE",
                "https://www.youtube.com/watch?v=WT7oxiiFYt8"
            ],
            "sections": [
                {
                    "title": "5.1 The Concept of a Limit and Techniques for Evaluation",
                    "image": "https://images.pexels.com/photos/29112639/pexels-photo-29112639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=YNstP0ESndU",
                    "content": `Calculus, developed independently by Isaac Newton and Gottfried Wilhelm Leibniz in the 17th century, is a powerful branch of mathematics that deals with rates of change (differential calculus) and accumulation (integral calculus). The fundamental concept underpinning all of calculus is the limit. This chapter introduces the intuitive idea of a limit, explores techniques for evaluating limits, defines continuity of functions, and then delves into differential calculus, covering the definition of the derivative, rules for differentiation, and applications such as finding tangents, rates of change, and solving optimization problems.

Intuitive Definition of a Limit:
Let f(x) be a function. If f(x) gets arbitrarily close to a single real number L as x approaches some number c (from either side of c), but not necessarily x=c itself, then we say that the limit of f(x) as x approaches c is L.
We write: lim (x→c) f(x) = L

The limit describes the behavior of the function near a point, not necessarily at the point.

One-Sided Limits:

Right-hand limit: lim (x→c⁺) f(x) = L (x approaches c from values greater than c).

Left-hand limit: lim (x→c⁻) f(x) = M (x approaches c from values less than c).

A two-sided limit lim (x→c) f(x) = L exists if and only if both the left-hand and right-hand limits exist and are equal to L. (L = M).

When Limits Do Not Exist:

Left-hand and right-hand limits are different.

f(x) increases or decreases without bound (approaches ±∞) as x → c.

f(x) oscillates infinitely as x → c (e.g., lim (x→0) sin(1/x)).

Techniques for Evaluating Limits (for well-behaved functions):

Direct Substitution: If f(x) is a polynomial, rational function (and c is in its domain), trigonometric, exponential, or logarithmic function (and c is in its domain), then lim (x→c) f(x) = f(c).

If Direct Substitution yields Indeterminate Form (0/0 or ∞/∞):

Factorization and Cancellation: Factor numerator and denominator, cancel common factors, then try direct substitution again.

Example: lim (x→2) [(x² - 4) / (x - 2)] (0/0 form)
= lim (x→2) [(x-2)(x+2) / (x-2)] = lim (x→2) (x+2) = 2+2 = 4.

Rationalizing (using Conjugates): If expression involves square roots.

L'Hôpital's Rule (if derivatives known): If limit is of form 0/0 or ∞/∞, then lim (x→c) [f(x)/g(x)] = lim (x→c) [f'(x)/g'(x)], provided the latter limit exists.

Limits at Infinity (End Behavior): lim (x→±∞) f(x). For rational functions, divide every term by the highest power of x in the denominator.

Limit Laws (Properties of Limits):
Limits can be distributed over sums, differences, products, quotients, powers, and roots under standard conditions.

(Suggested insertion: Graphs illustrating limit concepts (function approaching a value, hole in graph, jump discontinuity for one-sided limits). Worked examples for evaluating limits using direct substitution, factorization, rationalization. Examples of limits at infinity for rational functions.)`,
                    "mcq": { "question": "What is the value of the limit lim (x→3) of (x² - 9) / (x - 3)?", "options": ["0", "3", "6", "The limit does not exist"], "correctAnswer": "6", "explanation": "Direct substitution gives 0/0 (indeterminate form). Factor the numerator: (x²-9) = (x-3)(x+3). The expression becomes (x-3)(x+3)/(x-3) = x+3. Now substitute x=3 into x+3, which gives 3+3=6." }
                },
                {
                    "title": "5.2 Continuity at a Point and Intermediate Value Theorem",
                    "image": "https://images.pexels.com/photos/6757505/pexels-photo-6757505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=xIbucZYkxjA",
                    "content": `Intuitively, a function is continuous if its graph can be drawn without lifting the pen from the paper (no breaks, jumps, or holes).

Definition of Continuity at a Point x = c:
A function f(x) is continuous at a point x = c if all three of the following conditions are met:

1. f(c) is defined (c is in the domain of f).

2. lim (x→c) f(x) exists (i.e., left-hand limit = right-hand limit).

3. lim (x→c) f(x) = f(c) (The limit equals the function value).

If any of these conditions fail, the function is discontinuous at x = c.

Types of Discontinuities:

Removable Discontinuity (Hole): Limit exists, but f(c) is undefined or lim ≠ f(c).

Jump Discontinuity: Left and right-hand limits exist but are not equal.

Infinite Discontinuity: One or both one-sided limits are ±∞ (often at a vertical asymptote).

Most common functions (Polynomials, rational functions, exponential, log, trig) are continuous on their domains.

Intermediate Value Theorem (IVT):
If a function f(x) is continuous on a closed interval [a, b], and N is any number between f(a) and f(b), then there exists at least one number c in the open interval (a, b) such that f(c) = N.

Significance: Guarantees that a continuous function takes on all intermediate values. A common application is to show the existence of roots: If f(a) and f(b) have opposite signs, there must be at least one root c in (a,b) where f(c) = 0.

(Suggested insertion: Graphs illustrating different types of discontinuities (hole, jump, infinite). Diagram illustrating the Intermediate Value Theorem: a continuous curve on [a,b] must pass through any y-value N between f(a) and f(b). Example applying IVT to show existence of a root.)`,
                    "mcq": {
                        "question": "Which of the following is NOT a condition for a function f(x) to be continuous at a point x = c?",
                        "options": ["f(c) is defined", "lim (x→c) f(x) exists", "lim (x→c) f(x) = f(c)", "f(c) must be positive"],
                        "correctAnswer": "f(c) must be positive",
                        "explanation": "The three conditions for continuity at x=c are: 1) f(c) must be defined, 2) the limit as x approaches c must exist, and 3) the limit must equal the function value. The value f(c) can be positive, negative, or zero."
                    }
                },
                {
                    "title": "5.3 Differentiation Rules: Product, Quotient, Chain Rule",
                    "image": "https://images.pexels.com/photos/29112639/pexels-photo-29112639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=HaHsqDjWMLU",
                    "content": `The Derivative (Definition):
The derivative of a function f(x), denoted f'(x) or dy/dx, measures the instantaneous rate of change of f(x). Geometrically, f'(c) is the slope of the tangent line to the graph of y = f(x) at x = c.
f'(x) = lim (h→0) [ (f(x+h) - f(x)) / h ]

Basic Differentiation Rules:
* Power Rule: d/dx (xⁿ) = nxⁿ⁻¹
* Sum/Difference Rule: d/dx [f(x) ± g(x)] = f'(x) ± g'(x).
* Derivatives of e^x and ln(x):
    * d/dx (e^x) = e^x
    * d/dx (ln(x)) = 1/x
* Derivatives of Trigonometric Functions:
    * d/dx (sin x) = cos x
    * d/dx (cos x) = -sin x
    * d/dx (tan x) = sec²x

Advanced Differentiation Rules:
* Product Rule: If h(x) = f(x) g(x), then h'(x) = f'(x)g(x) + f(x)g'(x).
    Example: d/dx (x² sin x) = (2x)(sin x) + (x²)(cos x).

* Quotient Rule: If h(x) = f(x) / g(x), then h'(x) = [f'(x)g(x) - f(x)g'(x)] / [g(x)]².
    Example: d/dx (x³ / (x+1)) = [ (3x²)(x+1) - (x³)(1) ] / (x+1)² = (2x³ + 3x²) / (x+1)².

* Chain Rule (for Composite Functions): If h(x) = f(g(x)), then h'(x) = f'(g(x)) × g'(x).
    (Derivative of the outer function × derivative of the inner function).
    Example: y = (x² + 1)³. Let u = x² + 1, so y = u³.
    dy/dx = (3u²)(2x) = 3(x² + 1)² (2x) = 6x(x² + 1)².
    Example: y = sin(5x). Let u = 5x, y = sin u.
    dy/dx = (cos u)(5) = 5 cos(5x).

* Implicit Differentiation: Technique used when y is not explicitly solved for. Differentiate both sides with respect to x, treating y as y(x), then solve for dy/dx.

(Suggested insertion: Tables listing basic differentiation rules. Several worked examples for each of product rule, quotient rule, and chain rule, showing step-by-step application. An example of implicit differentiation.)`,
                    "mcq": { "question": "What is the derivative of y = sin(x³)?", "options": ["cos(x³)", "3x²cos(x³)", "3cos(x²)", "cos(3x²)"], "correctAnswer": "3x²cos(x³)", "explanation": "This requires the Chain Rule. The outer function is sin(u) and the inner function is u=x³. The derivative is (derivative of outer) * (derivative of inner) = cos(u) * 3x² = cos(x³) * 3x²." }
                },
                {
                    "title": "5.4 Applications: Tangents, Normals, Rate of Change, Optimization",
                    "image": "https://images.pexels.com/photos/29112639/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=7R2ldh0M1nw",
                    "content": `Finding Equations of Tangent and Normal Lines:
* The derivative f'(c) gives the slope of the tangent line at x = c.
    * Equation of Tangent: y - f(c) = f'(c) (x - c).
* The normal line is perpendicular to the tangent.
    * Slope of normal = -1 / f'(c).
    * Equation of normal: y - f(c) = [-1/f'(c)] (x - c).

Rates of Change:
* Instantaneous rate of change of y with respect to x is dy/dx.
* Velocity and Acceleration: If s(t) is position, then v(t) = s'(t) and a(t) = v'(t) = s''(t).

Increasing and Decreasing Functions; First Derivative Test:
* If f'(x) > 0, f is increasing.
* If f'(x) < 0, f is decreasing.
* Critical points occur where f'(x) = 0 or is undefined.
* First Derivative Test:
    * If f' changes from + to -, it's a local maximum.
    * If f' changes from - to +, it's a local minimum.

Concavity and Points of Inflection; Second Derivative Test:
* If f''(x) > 0, graph is concave upward (U-shape).
* If f''(x) < 0, graph is concave downward (∩-shape).
* A point of inflection is where concavity changes (f''(x)=0 and changes sign).
* Second Derivative Test: If f'(c) = 0:
    * If f''(c) > 0, then f(c) is a local minimum.
    * If f''(c) < 0, then f(c) is a local maximum.
    * If f''(c) = 0, test is inconclusive.

Optimization Problems: 
Finding the maximum or minimum values of a function. Involves setting up a function, finding its critical points (derivative=0), and testing them to find the max/min.

(Suggested insertion: Worked examples for: finding equation of tangent/normal. Determining where a function is increasing/decreasing and finding local max/min. Determining concavity and points of inflection. A complete curve sketching example. A typical optimization word problem.)`,
                    "mcq": [
                        { "question": "What is the slope of the tangent line to the curve y = x³ - 2x at the point x = 2?", "options": ["10", "8", "4", "12"], "correctAnswer": "10", "explanation": "The slope of the tangent is the value of the derivative. The derivative is dy/dx = 3x² - 2. At x=2, the slope is 3(2)² - 2 = 3(4) - 2 = 12 - 2 = 10." },
                        { "question": "If f'(x) changes from positive to negative at a critical point x=c, what does f(c) represent?", "options": ["A local minimum", "A point of inflection", "A local maximum", "An asymptote"], "correctAnswer": "A local maximum", "explanation": "A positive derivative means the function is increasing, and a negative derivative means it is decreasing. A change from increasing to decreasing indicates a local maximum." },
                        { "question": "Using the product rule, what is the derivative of f(x) = x²eˣ?", "options": ["2xeˣ", "x²eˣ + 2xeˣ", "2x + eˣ", "2xeˣ + eˣ"], "correctAnswer": "x²eˣ + 2xeˣ", "explanation": "The product rule is f'g + fg'. Here f=x² and g=eˣ. The derivative is (2x)(eˣ) + (x²)(eˣ) = 2xeˣ + x²eˣ." },
                        { "question": "If the slope of the tangent line to a curve at a point is -1/3, what is the slope of the normal line at that same point?", "options": ["-1/3", "1/3", "3", "-3"], "correctAnswer": "3", "explanation": "The normal line is perpendicular to the tangent line. The slope of the normal is the negative reciprocal of the slope of the tangent. m_normal = -1 / (-1/3) = 3." },
                        { "question": "If a function's second derivative, f''(x), is positive on an interval, what can be said about the function's graph on that interval?", "options": ["It is increasing", "It is decreasing", "It is concave upward", "It is concave downward"], "correctAnswer": "It is concave upward", "explanation": "A positive second derivative (f''(x) > 0) indicates that the graph is concave upward (shaped like a U)." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 6: Integration Techniques",
            "image": "https://images.pexels.com/photos/7723354/pexels-photo-7723354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=IQ15BnVUgis",
                "https://www.youtube.com/watch?v=o75AqTInKDU",
                "https://www.youtube.com/watch?v=bLhxQIdbWW8"
            ],
            "sections": [
                {
                    "title": "6.1 Indefinite Integrals: Power Rule, Substitution",
                    "image": "https://images.pexels.com/photos/17485683/pexels-photo-17485683.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=JTFMeSCxgcA",
                    "content": `Integral calculus is the second major branch of calculus, concerned with the concept of integration. Integration can be viewed as the reverse process of differentiation (finding an antiderivative) or as a method for accumulating quantities, such as finding the area under a curve, volume of a solid, or total change from a rate of change. This chapter introduces indefinite and definite integrals, the Fundamental Theorem of Calculus which links differentiation and integration, and various techniques for evaluating integrals, along with their applications.
Antiderivative:
If F'(x) = f(x), then F(x) is called an antiderivative of f(x).
If F(x) is an antiderivative of f(x), then F(x) + C (where C is any constant) is also an antiderivative, because d/dx (C) = 0. C is called the constant of integration.
Indefinite Integral:
The set of all antiderivatives of a function f(x) is called the indefinite integral of f(x) with respect to x, denoted by:
∫ f(x) dx = F(x) + C
Basic Integration Rules:
Power Rule (for n ≠ -1): ∫ xⁿ dx = (x^(n+1))/(n+1) + C
Case n = -1 (Log Rule): ∫ (1/x) dx = ln|x| + C
Integrals of Exponential Functions: ∫ e^x dx = e^x + C
Integrals of Basic Trigonometric Functions:
∫ cos(x) dx = sin(x) + C
∫ sin(x) dx = -cos(x) + C
∫ sec²(x) dx = tan(x) + C
Integration by Substitution (u-Substitution):
A technique for integrating composite functions, essentially the reverse of the chain rule for differentiation.
If an integral is of the form ∫ f(g(x)) g'(x) dx:
1. Let u = g(x) (the "inner" function).
2. Then du = g'(x) dx.
3. Substitute to get ∫ f(u) du.
4. Integrate f(u) with respect to u.
5. Substitute back g(x) for u.
Example: ∫ 2x (x² + 1)³ dx
Let u = x² + 1. Then du = 2x dx.
Substitute: ∫ u³ du = u⁴/4 + C = (x² + 1)⁴ / 4 + C.
Example: ∫ cos(3x) dx
Let u = 3x. Then du = 3 dx, so dx = du/3.
Substitute: ∫ cos(u) (du/3) = (1/3) ∫ cos(u) du = (1/3) sin(u) + C = (1/3) sin(3x) + C.
(Suggested insertion: A table of basic indefinite integrals. Several worked examples for each basic rule. Multiple detailed examples of integration by substitution, showing careful choice of u and transformation of dx to du.)`,
                    "mcq": { "question": "What is the indefinite integral of f(x) = cos(2x)?", "options": ["sin(2x) + C", "-sin(2x) + C", "(1/2)sin(2x) + C", "2sin(2x) + C"], "correctAnswer": "(1/2)sin(2x) + C", "explanation": "This requires u-substitution. Let u = 2x, so du = 2dx, or dx = du/2. The integral becomes ∫cos(u)(du/2) = (1/2)∫cos(u)du = (1/2)sin(u) + C = (1/2)sin(2x) + C." }
                },
                {
                    "title": "6.2 Definite Integrals and Fundamental Theorem of Calculus",
                    "image": "https://images.pexels.com/photos/17485683/pexels-photo-17485683.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=Gc3QvUB0PkI",
                    "content": `The definite integral of a function f(x) from x = a to x = b, denoted by ∫[a,b] f(x) dx, represents the net signed area between the graph of y = f(x) and the x-axis, over the interval [a, b].
* a is the lower limit of integration.
* b is the upper limit of integration.
* The definite integral is a number, not a function plus a constant.

The Fundamental Theorem of Calculus (FTC):
This theorem connects differentiation and integration, showing they are inverse operations.
* Part 1 (FTC1 - Derivative of an Integral): If G(x) = ∫[a,x] f(t) dt, then G'(x) = f(x).
* Part 2 (FTC2 - Evaluation Theorem): If f is continuous on [a,b] and F is any antiderivative of f (F'(x) = f(x)), then:
    ∫[a,b] f(x) dx = F(b) - F(a)

This part provides the practical method for evaluating definite integrals.

Properties of Definite Integrals:
* ∫[a,a] f(x) dx = 0
* ∫[b,a] f(x) dx = - ∫[a,b] f(x) dx
* ∫[a,c] f(x) dx + ∫[c,b] f(x) dx = ∫[a,b] f(x) dx

Substitution for Definite Integrals:
When using u-substitution, you must also change the limits of integration. If u = g(x), then the new limits are g(a) and g(b).
∫[a,b] f(g(x)) g'(x) dx = ∫[g(a), g(b)] f(u) du.
(Suggested insertion: A graph illustrating the definite integral as area under a curve. Statement of both parts of FTC. Worked examples evaluating definite integrals using FTC2 and basic integration rules. Examples of u-substitution for definite integrals, showing both methods (converting limits vs. back-substituting).)`,
                    "mcq": {
                        "question": "Evaluate the definite integral of 3x² from x=1 to x=2.",
                        "options": ["8", "7", "9", "6"],
                        "correctAnswer": "7",
                        "explanation": "First, find the antiderivative of 3x², which is x³. Then, use the Fundamental Theorem of Calculus: F(b) - F(a) = (2)³ - (1)³ = 8 - 1 = 7."
                    }
                },
                {
                    "title": "6.3 Integration by Parts, Partial Fractions",
                    "image": "https://images.pexels.com/photos/17485683/pexels-photo-17485683.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=mEbayDPybdM",
                    "content": `Integration by Parts:
The reverse of the product rule for differentiation. Used to integrate products of functions.
Formula: ∫ u dv = uv - ∫ v du
Choosing u and dv:
A common mnemonic for choosing u is LIATE:
Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential
Choose u as the function type that appears first in this list.
Example: ∫ x e^x dx.
Let u = x (algebraic) => du = dx.
Let dv = e^x dx (exponential) => v = e^x.
∫ x e^x dx = x e^x - ∫ e^x dx = x e^x - e^x + C.

Integration by Partial Fractions:
Used to integrate rational functions (P(x)/Q(x)) by decomposing them into a sum of simpler fractions.
Steps:
1. If degree(P(x)) ≥ degree(Q(x)), perform long division first.
2. Factor the denominator Q(x) completely.
3. For each factor, write a corresponding partial fraction term:
    * Distinct Linear Factor (ax+b): A / (ax+b)
    * Repeated Linear Factor (ax+b)ⁿ: A₁/(ax+b) + A₂/(ax+b)² + ...
    * Distinct Irreducible Quadratic (ax²+bx+c): (Ax+B) / (ax²+bx+c)
4. Solve for the unknown constants (A, B, etc.).
5. Integrate the sum of the simpler fractions.
Example: ∫ [1 / (x(x+1))] dx.
1 / (x(x+1)) = A/x + B/(x+1) => 1 = A(x+1) + Bx.
If x=0, 1 = A(1) => A=1.
If x=-1, 1 = B(-1) => B=-1.
∫ [1/x - 1/(x+1)] dx = ln|x| - ln|x+1| + C = ln|x/(x+1)| + C.
(Suggested insertion: Several detailed worked examples for integration by parts, including choosing u and dv, and for definite integrals. Several examples of partial fraction decomposition (distinct linear factors, repeated linear factors, simple irreducible quadratic if appropriate for curriculum) followed by integration.)`,
                    "mcq": { "question": "When using integration by parts to evaluate ∫x ln(x) dx, what is the best choice for u?", "options": ["x", "ln(x)", "dx", "x dx"], "correctAnswer": "ln(x)", "explanation": "Using the LIATE mnemonic (Logarithmic, Inverse, Algebraic, Trigonometric, Exponential) for choosing u, the Logarithmic function ln(x) should be chosen as u because its derivative is simpler." }
                },
                {
                    "title": "6.4 Applications: Area Under Curves, Volumes of Revolution",
                    "image": "https://images.pexels.com/photos/17485683/pexels-photo-17485683.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=QLHJl2_aM5Q",
                    "content": `Area Under a Curve (and Between Curves):
* If f(x) ≥ 0 on [a, b], the Area = ∫[a,b] f(x) dx.
* If f(x) is sometimes negative, total area requires integrating positive and negative parts separately and adding absolute values.
* Area Between Two Curves: If f(x) ≥ g(x) on [a, b], the area between them is:
    Area = ∫[a,b] [f(x) - g(x)] dx (Top curve - Bottom curve).

Volumes of Revolution (Solids of Revolution):
Finding the volume of a solid generated by revolving a plane region about an axis.
* Disk Method (Rotation about x-axis): Revolving the region under y=f(x).
    Volume = ∫[a,b] π [f(x)]² dx
* Washer Method (Rotation about x-axis): Revolving region between y = R(x) (outer radius) and y = r(x) (inner radius).
    Volume = ∫[a,b] π ([R(x)]² - [r(x)]²) dx
* Method of Cylindrical Shells (Rotation about y-axis, integrating wrt x):
    Volume = ∫[a,b] 2πx f(x) dx

(Suggested insertion: Graphs illustrating area under a curve, area between two curves, with representative integrals. Clear diagrams showing the formation of a solid of revolution and illustrating a typical disk, washer, and cylindrical shell, along with their respective volume formulas. Several worked examples for calculating areas and volumes of revolution using these methods.)`,
                    "mcq": [
                        { "question": "The region bounded by y = x², the x-axis, and the line x=2 is revolved around the x-axis. Which integral represents the volume of the resulting solid?", "options": ["∫[0,2] πx² dx", "∫[0,2] πx⁴ dx", "∫[0,2] 2πx³ dx", "∫[0,2] x² dx"], "correctAnswer": "∫[0,2] πx⁴ dx", "explanation": "Using the disk method, the volume is V = ∫[a,b] π[f(x)]² dx. Here, f(x) = x², a=0, b=2. So, V = ∫[0,2] π(x²)² dx = ∫[0,2] πx⁴ dx." },
                        { "question": "What is the area of the region enclosed by the curves y = x and y = x²?", "options": ["1/6", "1/3", "1/2", "1"], "correctAnswer": "1/6", "explanation": "The curves intersect at x=0 and x=1. The area is ∫[0,1] (Top Curve - Bottom Curve) dx = ∫[0,1] (x - x²) dx. The integral is [x²/2 - x³/3] from 0 to 1, which is (1/2 - 1/3) - 0 = 1/6." },
                        { "question": "What is the integral of 1/x?", "options": ["-1/x² + C", "ln(x) + C", "ln|x| + C", "x⁻² + C"], "correctAnswer": "ln|x| + C", "explanation": "The integral of 1/x is ln|x| + C. The absolute value is necessary because the domain of 1/x includes negative numbers, while ln(x) is only defined for positive x." },
                        { "question": "The partial fraction decomposition of 1/((x-1)(x+2)) has the form:", "options": ["A/(x-1) + B/(x+2)", "Ax/(x-1) + B/(x+2)", "A/(x-1)² + B/(x+2)", "(Ax+B)/((x-1)(x+2))"], "correctAnswer": "A/(x-1) + B/(x+2)", "explanation": "For distinct linear factors in the denominator, the partial fraction decomposition consists of a sum of terms, where each term has a constant numerator over one of the linear factors." },
                        { "question": "According to the Fundamental Theorem of Calculus, if F'(x) = f(x), then ∫[a,b] f(x) dx is equal to:", "options": ["F(b)", "F(a)", "F(b) - F(a)", "F(a) - F(b)"], "correctAnswer": "F(b) - F(a)", "explanation": "The second part of the Fundamental Theorem of Calculus (the Evaluation Theorem) states that the definite integral of a function f(x) from a to b is the change in its antiderivative F(x) over that interval, which is F(b) - F(a)." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 7: Ordinary Differential Equations (Introductory)",
            "image": "https://images.pexels.com/photos/18069230/pexels-photo-18069230.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=C7nuJjG18",
                "https://www.youtube.com/watch?v=tVFfEaPsA4M",
                "https://www.youtube.com/watch?v=d-43KRvicm8"
            ],
            "sections": [
                {
                    "title": "7.1 First‐Order Differential Equations (Separable, Linear)",
                    "image": "https://images.pexels.com/photos/18069230/pexels-photo-18069230.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=gd1FYn86P0c",
                    "content": `A differential equation (DE) is an equation that relates an unknown function to one or more of its derivatives. DEs arise when modeling systems that change over time or space. The goal is to find the function(s) that satisfy the equation.

Terminology:

* Order: The order of the highest derivative present.
* Ordinary Differential Equation (ODE): Involves derivatives with respect to a single independent variable (e.g., dy/dx).
* Partial Differential Equation (PDE): Involves partial derivatives with respect to multiple variables (e.g., ∂u/∂t).
* General Solution: Contains arbitrary constants (from integration). Represents a family of solutions.
* Particular Solution: Found by using initial conditions to determine the constants.

First-Order Ordinary Differential Equations:
Involve only the first derivative (e.g., dy/dx = f(x,y)).

Separable Equations:
A first-order DE is separable if it can be written as f(y) dy = g(x) dx.
Method of Solution:
1. Separate the variables.
2. Integrate both sides: ∫ f(y) dy = ∫ g(x) dx.
3. Solve to get the general solution.
Example: Solve dy/dx = xy².
Separate: (1/y²) dy = x dx.
Integrate: ∫ y⁻² dy = ∫ x dx  =>  -y⁻¹ = x²/2 + C.

First-Order Linear Differential Equations:
Standard form: dy/dx + P(x)y = Q(x)
Method of Solution (using an Integrating Factor, IF):
1. Identify P(x) from the standard form.
2. Calculate the integrating factor: IF = e^(∫ P(x) dx).
3. Multiply the standard form equation by the IF. The left side becomes d/dx [ (IF) ⋅ y ].
4. The equation becomes d/dx [ (IF) ⋅ y ] = IF ⋅ Q(x).
5. Integrate both sides with respect to x: (IF) ⋅ y = ∫ (IF) ⋅ Q(x) dx.
6. Solve for y.
Example: Solve dy/dx + 2xy = x.
P(x) = 2x, so IF = e^(∫ 2x dx) = e^(x²).
Multiply by IF: e^(x²) (dy/dx) + 2x e^(x²) y = x e^(x²).
d/dx [e^(x²) y] = x e^(x²).
Integrate: e^(x²) y = ∫ x e^(x²) dx = ½ e^(x²) + C.
General solution: y = ½ + C e^(-x²).

(Suggested insertion: Clear examples for both separable and linear equations, including finding a particular solution with an initial condition.)`,
                    "mcq": { "question": "Which of the following first-order differential equations is separable?", "options": ["dy/dx + 2y = x", "dy/dx = x + y", "dy/dx = xy²", "dy/dx - y/x = x²"], "correctAnswer": "dy/dx = xy²", "explanation": "A separable equation can be written in the form f(y)dy = g(x)dx. The equation dy/dx = xy² can be rewritten as (1/y²)dy = xdx, so it is separable." }
                },
                {
                    "title": "7.2 Second‐Order Linear Differential Equations (Homogeneous with Constant Coefficients)",
                    "image": "https://images.pexels.com/photos/18069230/pexels-photo-18069230.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=jEeWfqHVKpc",
                    "content": `A second-order linear DE has the form a(x)y'' + b(x)y' + c(x)y = g(x). This section focuses on a simpler case.

Homogeneous Second-Order Linear DEs with Constant Coefficients:
Form: ay'' + by' + cy = 0, where a, b, c are constants. "Homogeneous" means the right side is zero.

Method of Solution (Characteristic/Auxiliary Equation):
1. Assume a solution of the form y = e^(mx).
2. Substitute into the DE to get the characteristic equation: am² + bm + c = 0.
3. Solve the quadratic equation for m. The nature of the roots m₁ and m₂ determines the general solution:

Case 1: Two Distinct Real Roots (b² - 4ac > 0)
If m₁ and m₂ are distinct real roots, the general solution is:
y(x) = C₁e^(m₁x) + C₂e^(m₂x)

Case 2: One Real Repeated Root (b² - 4ac = 0)
If m₁ = m₂ = m, the general solution is:
y(x) = (C₁ + C₂x)e^(mx) or y(x) = C₁e^(mx) + C₂xe^(mx)

Case 3: Two Complex Conjugate Roots (b² - 4ac < 0)
If roots are m = α ± βi, the general solution is:
y(x) = e^(αx) [C₁cos(βx) + C₂sin(βx)]

Initial conditions are needed to find the particular solution (values of C₁ and C₂).

(Suggested insertion: Worked examples for solving homogeneous second-order linear DEs, covering each of the three cases. One example with initial conditions to find a particular solution.)`,
                    "mcq": {
                        "question": "What is the characteristic (auxiliary) equation for the differential equation y'' - 3y' + 2y = 0?",
                        "options": ["m² - 3m + 2 = 0", "m² + 3m - 2 = 0", "y² - 3y + 2 = 0", "m - 3 = 0"],
                        "correctAnswer": "m² - 3m + 2 = 0",
                        "explanation": "To find the characteristic equation for ay'' + by' + cy = 0, we substitute y = e^(mx) to get the polynomial am² + bm + c = 0. Here, a=1, b=-3, c=2."
                    }
                },
                {
                    "title": "7.3 Applications to Physical Systems: Simple Harmonic Motion, Cooling Problems",
                    "image": "https://images.pexels.com/photos/17485848/pexels-photo-17485848.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=ukNbG7muKho",
                    "content": `Simple Harmonic Motion (SHM):
The motion of a mass m on a spring with constant k (with no damping) is described by Newton's Second Law:
m (d²x/dt²) = -kx
This rearranges to: m(d²x/dt²) + kx = 0, or (d²x/dt²) + ω²x = 0, where ω² = k/m.

This is a homogeneous second-order linear DE.
* Characteristic equation: m² + ω² = 0 => m = ±ωi.
* This is Case 3 (complex roots) with α=0 and β=ω.
* The general solution for displacement x(t) is:
    x(t) = C₁cos(ωt) + C₂sin(ωt)
    This describes oscillatory motion.

Damped Harmonic Motion: If a damping force (-b(dx/dt)) is present, the equation becomes m(d²x/dt²) + b(dx/dt) + kx = 0. The solution type (underdamped, critically damped, overdamped) depends on the roots of the characteristic equation.

Newton's Law of Cooling (or Heating):
The rate of change of an object's temperature dT/dt is proportional to the difference between its temperature T and the ambient temperature T_a.
dT/dt = -k(T - T_a)

This is a first-order separable DE. Let y = T - T_a, then dy/dt = dT/dt.
dy/dt = -ky  =>  (1/y) dy = -k dt.
Integrating gives ln|y| = -kt + C.
The final solution can be written as:
T(t) = T_a + (T₀ - T_a)e^(-kt)
where T₀ is the initial temperature. This describes an exponential approach to the ambient temperature.

(Suggested insertion: Full derivation of the SHM solution. Step-by-step solution of Newton's Law of Cooling with an initial condition.)`,
                    "mcq": { "question": "The differential equation for undamped simple harmonic motion is (d²x/dt²) + ω²x = 0. What does ω represent?", "options": ["Amplitude", "Phase constant", "Angular frequency", "Period"], "correctAnswer": "Angular frequency", "explanation": "In the standard SHM equation, ω is the angular frequency, related to the period T by T = 2π/ω." }
                },
                {
                    "title": "7.4 Introduction to Higher‐Order and Partial Differential Equations (Overview)",
                    "image": "https://images.pexels.com/photos/2882688/pexels-photo-2882688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=wqq-C9RrzU8",
                    "content": `This section provides a brief, conceptual overview for awareness; solving these is typically beyond Further/Additional Maths.

Higher-Order ODEs:
ODEs involving derivatives higher than the second. Linear versions with constant coefficients can be solved using an extension of the characteristic equation method.

Systems of ODEs:
Two or more DEs involving two or more dependent variables. Used to model interacting systems like predator-prey populations or coupled oscillators. Can be solved using matrix methods.

Partial Differential Equations (PDEs):
Equations involving partial derivatives of a function of two or more independent variables. They describe phenomena that vary in both space and time.

Common Examples of PDEs:
* Heat Equation (Diffusion Equation): Describes temperature distribution.
    ∂u/∂t = α (∂²u/∂x²)
* Wave Equation: Describes the propagation of waves.
    (∂²u/∂t²) = c² (∂²u/∂x²)
* Laplace's Equation: Describes steady-state potentials (e.g., electrostatic, steady temperature).
    ∇²u = (∂²u/∂x²) + (∂²u/∂y²) + (∂²u/∂z²) = 0
* Schrödinger Equation (Quantum Mechanics): Describes the wave function of a quantum system.

Solving PDEs requires advanced techniques (e.g., separation of variables, Fourier series).

(Suggested insertion: Just the names and general forms of the heat, wave, and Laplace equations, with a brief qualitative description of what they model. Emphasis that these are advanced topics.)`,
                    "mcq": [
                        { "question": "What is the order of the differential equation (d³y/dx³) + 2(dy/dx)⁴ - y = 0?", "options": ["1", "2", "3", "4"], "correctAnswer": "3", "explanation": "The order of a differential equation is the order of the highest derivative present in the equation. The highest derivative here is d³y/dx³, which is a third-order derivative." },
                        { "question": "The characteristic equation for ay'' + by' + cy = 0 has distinct real roots m₁ and m₂. What is the form of the general solution?", "options": ["y = C₁e^(m₁x) + C₂e^(m₂x)", "y = (C₁ + C₂x)e^(m₁x)", "y = e^(m₁x)(C₁cos(m₂x) + C₂sin(m₂x))", "y = C₁cos(m₁x) + C₂sin(m₂x)"], "correctAnswer": "y = C₁e^(m₁x) + C₂e^(m₂x)", "explanation": "When the characteristic equation has two distinct real roots, the general solution is a linear combination of the two exponential functions corresponding to those roots." },
                        { "question": "The general solution to a first-order linear DE of the form dy/dx + P(x)y = Q(x) is found using what technique?", "options": ["Separation of variables", "An integrating factor", "A characteristic equation", "Partial fractions"], "correctAnswer": "An integrating factor", "explanation": "First-order linear differential equations in standard form are solved by multiplying the entire equation by an integrating factor, I(x) = e^(∫P(x)dx), which makes the left side the derivative of a product." },
                        { "question": "What is the general solution of the separable differential equation dy/dx = 2x/y?", "options": ["y² = 2x² + C", "y = x² + C", "ln|y| = x² + C", "y² = x + C"], "correctAnswer": "y² = 2x² + C", "explanation": "Separate variables: y dy = 2x dx. Integrate both sides: ∫y dy = ∫2x dx. This gives y²/2 = x² + K. Multiplying by 2 gives y² = 2x² + 2K. Let C = 2K, so y² = 2x² + C." },
                        { "question": "The equation ∂u/∂t = α (∂²u/∂x²) is a well-known example of what type of equation?", "options": ["An ordinary differential equation", "The Wave Equation", "Laplace's Equation", "The Heat Equation"], "correctAnswer": "The Heat Equation", "explanation": "This is the standard form of the one-dimensional Heat (or Diffusion) Equation, which is a partial differential equation (PDE) describing how heat distributes over time." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 8: Vectors in Two and Three Dimensions",
            "image": "https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=EzJP9uwV3ms",
                "https://www.youtube.com/watch?v=a6Z-2-1W3bs",
                "https://www.youtube.com/watch?v=2AeLLD8_Q0A"
            ],
            "sections": [
                {
                    "title": "8.1 Vector Addition, Scalar Multiplication, Dot and Cross Products",
                    "image": "https://images.pexels.com/photos/8566875/pexels-photo-8566875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=KBSCMTYaH1s",
                    "content": `Vectors are mathematical objects possessing both magnitude and direction, crucial for describing many physical quantities like displacement, velocity, force, and fields. This chapter extends the treatment of vectors to three dimensions and delves deeper into vector operations.

Vectors (Review and Extension to 3D):
* Component Form in 3D: A vector v⃗ can be represented by its components:
    v⃗ = <v_x, v_y, v_z> or v⃗ = v_x î + v_y ĵ + v_z k̂
    where î, ĵ, k̂ are standard unit vectors along the x, y, and z axes.
* Magnitude (Length or Norm): |v⃗| = √(v_x² + v_y² + v_z²)
* Vector Addition/Subtraction: Performed component-wise.
* Scalar Multiplication: c v⃗ = <cv_x, cv_y, cv_z>.

Dot Product (Scalar Product):
Takes two vectors and produces a scalar.
* Component Form: u⃗ · v⃗ = u_x v_x + u_y v_y + u_z v_z
* Geometric Form: u⃗ · v⃗ = |u⃗| |v⃗| cos(θ), where θ is the angle between the vectors.
* Property: If u⃗ and v⃗ are orthogonal (perpendicular), then u⃗ · v⃗ = 0.
* Applications: Finding the angle between vectors, calculating work done (W = F⃗ · d⃗), finding projections.

Cross Product (Vector Product) (for 3D vectors):
Takes two vectors and produces a new vector perpendicular to both.
* Direction: Given by the right-hand rule.
* Magnitude: |u⃗ × v⃗| = |u⃗| |v⃗| sin(θ). This magnitude is equal to the area of the parallelogram formed by u⃗ and v⃗.
* Component Form (Determinant):
    u⃗ × v⃗ = | î  ĵ  k̂  |
            | u_x u_y u_z |
            | v_x v_y v_z |
    = (u_yv_z - u_zv_y)î - (u_xv_z - u_zv_x)ĵ + (u_xv_y - u_yv_x)k̂
* Property: If u⃗ and v⃗ are parallel, then u⃗ × v⃗ = 0⃗ (the zero vector).
* Applications: Finding a normal vector, calculating torque (τ⃗ = r⃗ × F⃗).

(Suggested insertion: Diagrams illustrating 3D coordinate system, dot product (projection), and cross product (area, right-hand rule). Worked examples for calculations.)`,
                    "mcq": { "question": "If u = <2, 1, -3> and v = <1, -1, 2>, what is the dot product u · v?", "options": ["-5", "-3", "1", "0"], "correctAnswer": "-5", "explanation": "The dot product is the sum of the products of corresponding components: (2)(1) + (1)(-1) + (-3)(2) = 2 - 1 - 6 = -5." }
                },
                {
                    "title": "8.2 Vector Equations of Lines and Planes (Primarily 3D)",
                    "image": "https://images.pexels.com/photos/8566875/pexels-photo-8566875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=UCEaWvjhCaE",
                    "content": `Lines in 3D:
A line is determined by a point P₀(x₀, y₀, z₀) on the line and a direction vector v⃗ = <a, b, c> parallel to the line.
* Vector Equation: r⃗ = r⃗₀ + t v⃗
    or <x,y,z> = <x₀, y₀, z₀> + t <a, b, c>, where t is a scalar parameter.
* Parametric Equations:
    x = x₀ + at
    y = y₀ + bt
    z = z₀ + ct
* Symmetric Equations: (If a, b, c ≠ 0)
    (x - x₀)/a = (y - y₀)/b = (z - z₀)/c

Planes in 3D:
A plane is determined by a point P₀(x₀, y₀, z₀) on the plane and a normal vector n⃗ = <A, B, C> perpendicular to the plane.
The vector from P₀ to any other point P in the plane, (r⃗ - r⃗₀), must be perpendicular to n⃗.
* Vector Equation: n⃗ · (r⃗ - r⃗₀) = 0 or n⃗ · r⃗ = n⃗ · r⃗₀
* Scalar Equation (Cartesian Equation):
    A(x - x₀) + B(y - y₀) + C(z - z₀) = 0
    which simplifies to the general form: Ax + By + Cz = D
    The coefficients A, B, C are the components of a normal vector.

(Suggested insertion: Diagrams illustrating a line (point and direction vector) and a plane (point and normal vector). Worked examples for finding equations of lines and planes in various forms.)`,
                    "mcq": {
                        "question": "What is a normal vector to the plane with the equation 3x - y + 2z = 5?",
                        "options": ["<3, -1, 2>", "<3, 1, 2>", "<5, 0, 0>", "<x, y, z>"],
                        "correctAnswer": "<3, -1, 2>",
                        "explanation": "In the scalar equation of a plane Ax + By + Cz = D, the coefficients A, B, and C are the components of a vector normal (perpendicular) to the plane. So, n = <3, -1, 2>."
                    }
                },
                {
                    "title": "8.3 Applications: Forces, Moments, Geometric Problems",
                    "image": "https://images.pexels.com/photos/7111523/pexels-photo-7111523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=DyfkS3V1JFw",
                    "content": `Forces as Vectors:
* Resultant Force (Net Force): Vector sum of individual forces, F⃗_net = Σ F⃗_i.
* Equilibrium: An object is in equilibrium if F⃗_net = 0⃗.
* Work Done by a constant force: W = F⃗ · d⃗.

Moment (Torque) of a Force:
The turning effect of a force F⃗ about a point, given by the cross product:
τ⃗ = r⃗ × F⃗
where r⃗ is the position vector from the pivot to the point of application of the force.

Geometric Problems in 3D:
* Angle between two lines: Angle between their direction vectors.
* Angle between two planes: Angle between their normal vectors.
* Angle between a line and a plane: If θ is the angle between the line's direction vector v⃗ and the plane's normal n⃗, then the angle between the line and the plane itself is 90° - θ.
* Distance from a point to a line or a point to a plane.
* Shortest distance between two skew lines.
* Determining Relationships:
    * Lines/Planes are parallel if their direction/normal vectors are parallel (scalar multiples).
    * Lines/Planes are perpendicular if their direction/normal vectors are orthogonal (dot product is 0).

(Suggested insertion: Diagrams illustrating resultant force and torque. Example problems from mechanics and geometry using vectors.)`,
                    "mcq": { "question": "Two non-zero vectors u and v are orthogonal (perpendicular) if and only if:", "options": ["u · v = 0", "u × v = 0", "u · v = 1", "|u| = |v|"], "correctAnswer": "u · v = 0", "explanation": "The dot product is defined as u · v = |u||v|cos(θ). If the vectors are orthogonal, the angle θ is 90° (or π/2), and cos(90°) = 0. Therefore, their dot product must be zero." }
                },
                {
                    "title": "8.4 Scalar and Vector Fields (Basic Introduction)",
                    "image": "https://images.pexels.com/photos/7111523/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=mcjcR6AftVM",
                    "content": `These concepts are foundational for advanced physics.

Field: 
A physical quantity that has a value at every point in a region of space.

Scalar Field: 
Associates a scalar value with every point in space.
* Represented by a function φ(x,y,z).
* Examples: Temperature distribution T(x,y,z), Pressure distribution P(x,y,z).
* Visualized by contour lines (2D) or contour surfaces (3D).

Vector Field: 
Associates a vector value (magnitude and direction) with every point in space.
* Represented by a vector function F⃗(x,y,z).
* Examples: Gravitational field g⃗(r⃗), Electric field E⃗(r⃗), a fluid's velocity field v⃗(x,y,z).
* Visualized by drawing arrows at various points.

Operations on Fields (Vector Calculus - Conceptual):
* Gradient of a Scalar Field (grad φ or ∇φ): 
    ∇φ = (∂φ/∂x)î + (∂φ/∂y)ĵ + (∂φ/∂z)k̂
    A vector field that points in the direction of the greatest increase of the scalar field.
* Divergence of a Vector Field (div F⃗ or ∇·F⃗):
    ∇·F⃗ = (∂F_x/∂x) + (∂F_y/∂y) + (∂F_z/∂z)
    A scalar field that measures the "outflow" or "source strength" of the vector field at a point.
* Curl of a Vector Field (curl F⃗ or ∇×F⃗):
    ∇×F⃗ = | î ĵ k̂ | ...
    A vector field that measures the "circulation" or "vorticity" of the vector field at a point.

(The details of these operations are beyond Further Maths, but the conceptual introduction to scalar and vector fields is valuable.)

(Suggested insertion: Visual examples of scalar fields (e.g., temperature map) and vector fields (e.g., wind map). Brief conceptual note about gradient.)`,
                    "mcq": [
                        { "question": "If u = <1, 2, 3> and v = <4, 0, -1>, what is the cross product u × v?", "options": ["<-2, 13, -8>", "<2, -13, 8>", "<4, 0, -3>", "0"], "correctAnswer": "<-2, 13, -8>", "explanation": "The cross product u × v is calculated as the determinant of [i, j, k; 1, 2, 3; 4, 0, -1], which gives i(2*-1 - 3*0) - j(1*-1 - 3*4) + k(1*0 - 2*4) = -2i - (-13)j - 8k = <-2, 13, -8>." },
                        { "question": "What is the magnitude of the vector w = <3, 0, -4>?", "options": ["7", "5", "1", "25"], "correctAnswer": "5", "explanation": "The magnitude is |w| = √(3² + 0² + (-4)²) = √(9 + 0 + 16) = √25 = 5." },
                        { "question": "The parametric equations of a line are x = 1 + 2t, y = 3 - t, z = 4t. What is a direction vector for this line?", "options": ["<1, 3, 0>", "<2, -1, 4>", "<1, -1, 4>", "<x, y, z>"], "correctAnswer": "<2, -1, 4>", "explanation": "In the parametric equations x = x₀ + at, y = y₀ + bt, z = z₀ + ct, the direction vector is v = <a, b, c>. The coefficients of t are a=2, b=-1, and c=4." },
                        { "question": "Which of the following physical quantities is best represented by a scalar field?", "options": ["Wind Velocity", "Gravitational Force", "Temperature in a room", "Electric Field"], "correctAnswer": "Temperature in a room", "explanation": "A scalar field associates a scalar value (magnitude only) with every point in space. Temperature has a value at each point but no inherent direction. Velocity, force, and electric fields are vector quantities." },
                        { "question": "The magnitude of the cross product of two vectors, |u × v|, is geometrically equal to:", "options": ["The volume of the parallelepiped formed by the vectors", "The area of the parallelogram formed by the vectors", "The projection of u onto v", "The sum of their magnitudes"], "correctAnswer": "The area of the parallelogram formed by the vectors", "explanation": "|u × v| = |u||v|sin(θ), which is the formula for the area of a parallelogram with sides of length |u| and |v| and an angle θ between them." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 9: Matrices and Determinants",
            "image": "https://images.pexels.com/photos/7723354/pexels-photo-7723354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=yRwQ7A6jVLk",
                "https://www.youtube.com/watch?v=jh5kSVJv48U",
                "https://www.youtube.com/watch?v=3ROzG6n4yMc"
            ],
            "sections": [
                {
                    "title": "9.1 Definition and Types of Matrices",
                    "image": "https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=cY-cOMKM4YM",
                    "content": `A matrix is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns. Matrices provide a powerful tool for representing and manipulating data, solving systems of linear equations, representing linear transformations, and are widely used in various fields like computer graphics, physics, engineering, economics, and statistics.

Matrix: A rectangular array of elements arranged in m rows and n columns, giving it an order or dimension of m × n.
The element in row i and column j is denoted a_ij.

Types of Matrices:
* Row/Column Matrix: A matrix with only one row or one column.
* Square Matrix: Number of rows equals number of columns (n × n).
    * Main Diagonal: Elements a_ii from top-left to bottom-right.
* Zero Matrix (O): All elements are zero.
* Identity Matrix (I): A square matrix with 1s on the main diagonal and 0s elsewhere. It is the multiplicative identity.
    Example (3×3): I₃ = [ 1 0 0; 0 1 0; 0 0 1 ]
* Diagonal Matrix: A square matrix where all non-diagonal elements are zero.
* Scalar Matrix: A diagonal matrix where all diagonal elements are equal (e.g., kI).
* Triangular Matrix:
    * Upper Triangular: All elements below the main diagonal are zero.
    * Lower Triangular: All elements above the main diagonal are zero.
* Symmetric Matrix: A square matrix A where A = A^T (its transpose).
* Skew-Symmetric Matrix: A square matrix A where A = -A^T.

(Suggested insertion: Examples of each type of matrix, clearly showing their structure.)`,
                    "mcq": { "question": "Which of the following is a 2x2 identity matrix?", "options": ["[ [1, 1], [1, 1] ]", "[ [0, 1], [1, 0] ]", "[ [1, 0], [0, 1] ]", "[ [0, 0], [0, 0] ]"], "correctAnswer": "[ [1, 0], [0, 1] ]", "explanation": "An identity matrix (I) is a square matrix with 1s on the main diagonal (top-left to bottom-right) and 0s elsewhere." }
                },
                {
                    "title": "9.2 Matrix Operations: Addition, Multiplication, Transpose, Inverse (2×2, 3×3)",
                    "image": "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=Mai0b9TxmTI",
                    "content": `Equality, Addition, and Subtraction:
* Matrices are equal if they have the same order and corresponding elements are equal.
* Addition/Subtraction is performed on matrices of the same order by adding/subtracting corresponding elements.

Scalar Multiplication:
Multiply every element of the matrix by the scalar k.

Matrix Multiplication (Product AB):
* Defined only if the number of columns in A equals the number of rows in B.
* If A is m × p and B is p × n, the product AB is an m × n matrix.
* The element c_ij (row i, column j of AB) is the dot product of the i-th row of A and the j-th column of B.
* Matrix multiplication is NOT commutative in general (AB ≠ BA).

Transpose of a Matrix (A^T):
* The matrix obtained by interchanging rows and columns.
* Property: (AB)^T = B^T A^T.

Inverse of a Square Matrix (A⁻¹):
* If A is a square matrix, its inverse A⁻¹ (if it exists) is a matrix such that A A⁻¹ = A⁻¹ A = I.
* A matrix has an inverse if and only if its determinant is non-zero (det(A) ≠ 0). A matrix with det(A)=0 is singular.

Inverse of a 2×2 Matrix:
If A = [a b; c d], then det(A) = ad - bc.
If ad - bc ≠ 0, then A⁻¹ = (1 / (ad - bc)) [ d -b; -c a ].
(Swap diagonal elements, change signs of off-diagonal elements, multiply by 1/determinant).

Inverse of a 3×3 Matrix:
A⁻¹ = (1 / det(A)) Adj(A)
where Adj(A) is the adjugate of A (the transpose of the matrix of cofactors).

(Suggested insertion: Worked examples for all operations. Step-by-step calculation of a 2x2 inverse.)`,
                    "mcq": {
                        "question": "What is the inverse of the matrix A = [ [4, 7], [1, 2] ]?",
                        "options": ["[ [2, -7], [-1, 4] ]", "[ [-4, 1], [-7, 2] ]", "[ [2, -1], [-7, 4] ]", "[ [4, -1], [-7, 2] ]"],
                        "correctAnswer": "[ [2, -7], [-1, 4] ]",
                        "explanation": "First, find the determinant: det(A) = (4)(2) - (7)(1) = 8 - 7 = 1. Then, use the formula A⁻¹ = (1/det(A)) * [ [d, -b], [-c, a] ] = (1/1) * [ [2, -7], [-1, 4] ]."
                    }
                },
                {
                    "title": "9.3 Determinants: Expansion by Minors, Properties, Cramer’s Rule",
                    "image": "https://images.pexels.com/photos/3309775/pexels-photo-3309775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=qMCIW5BMYmY",
                    "content": `Determinant of a Square Matrix (det(A) or |A|):
A scalar value associated with every square matrix.
* 2×2 Matrix: If A = [a b; c d], then det(A) = ad - bc.
* 3×3 Matrix (Expansion by Cofactors):
    Can be expanded along any row or column.
    * Minor (M_ij): Determinant of submatrix from deleting row i, column j.
    * Cofactor (C_ij): C_ij = (-1)^(i+j) M_ij.
    * Determinant (expanding along first row):
        det(A) = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃

Properties of Determinants:
* det(A^T) = det(A).
* If two rows/columns are interchanged, the sign changes.
* If two rows/columns are identical, det(A) = 0.
* If a row/column is multiplied by k, the determinant is multiplied by k.
* Adding a multiple of one row to another does not change the determinant.
* det(AB) = det(A) det(B).
* det(A⁻¹) = 1 / det(A).
* Determinant of a triangular matrix is the product of its diagonal elements.

Cramer's Rule (for solving AX = b):
If D = det(A) ≠ 0, then the solution is given by formulas involving determinants.
For a 2x2 system a₁x + b₁y = c₁, a₂x + b₂y = c₂:
* Let D_x be the determinant of A with the x-column replaced by constants.
* Let D_y be the determinant of A with the y-column replaced by constants.
* x = D_x / D and y = D_y / D.
This pattern extends to 3x3 and larger systems.

(Suggested insertion: Clear calculation of 2x2 and 3x3 determinants. Worked examples solving 2x2 and 3x3 systems using Cramer's Rule.)`,
                    "mcq": { "question": "What is the determinant of the matrix A = [ [5, 2], [3, 1] ]?", "options": ["1", "-1", "11", "0"], "correctAnswer": "-1", "explanation": "For a 2x2 matrix [ [a, b], [c, d] ], the determinant is ad - bc. So, det(A) = (5)(1) - (2)(3) = 5 - 6 = -1." }
                },
                {
                    "title": "9.4 Applications: Solving Systems of Linear Equations",
                    "image": "https://images.pexels.com/photos/17485848/pexels-photo-17485848.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=qJa9Ihrng8w",
                    "content": `A system of linear equations can be written in matrix form as AX = B.

Methods for Solving AX = B:
1. Using Matrix Inverse:
If A is square and invertible (det(A) ≠ 0), then X = A⁻¹B.
This method requires finding the inverse of the coefficient matrix A.

2. Gaussian Elimination (using Augmented Matrix):
1.  Form the augmented matrix [A | B].
2.  Use elementary row operations (EROs) to transform the matrix into row-echelon form.
    *   EROs: 1) Interchange two rows, 2) Multiply a row by a non-zero constant, 3) Add a multiple of one row to another.
    *   Row-Echelon Form has a 'staircase' pattern of leading 1s, with zeros below them.
3.  Solve the resulting system using back-substitution.
    Gauss-Jordan elimination continues the process to reach reduced row-echelon form (zeros also above the leading 1s), from which the solution can be read directly.

This method is general and can reveal if there is no solution or infinitely many solutions.

3. Cramer's Rule (see 9.3)

Types of Solutions:
* Unique Solution: System has one solution (e.g., lines intersect at one point). det(A) ≠ 0.
* No Solution (Inconsistent): System has no solution (e.g., parallel lines). Gaussian elimination leads to a row like \`[0 0 | c]\` where c ≠ 0.
* Infinitely Many Solutions (Dependent): System has infinite solutions (e.g., coincident lines). Gaussian elimination leads to a row of all zeros \`[0 0 | 0]\`.

(Suggested insertion: Examples of solving systems using the inverse method and Gaussian elimination. Discuss how to identify no solution/infinite solutions.)`,
                    "mcq": [
                        { "question": "A square matrix is said to be singular (non-invertible) if its determinant is:", "options": ["1", "-1", "0", "A prime number"], "correctAnswer": "0", "explanation": "A square matrix has an inverse if and only if its determinant is non-zero. If the determinant is zero, the matrix is singular and does not have an inverse." },
                        { "question": "If A and B are square matrices of the same order, which of the following properties of determinants is correct?", "options": ["det(A+B) = det(A) + det(B)", "det(AB) = det(A)det(B)", "det(kA) = k det(A)", "det(A⁻¹) = det(A)"], "correctAnswer": "det(AB) = det(A)det(B)", "explanation": "A key property of determinants is that the determinant of a product of matrices is the product of their individual determinants." },
                        { "question": "If A = [ [1, 2], [0, 3] ] and B = [ [4, 1], [2, 0] ], what is the entry in the first row, first column of the product AB?", "options": ["4", "6", "8", "5"], "correctAnswer": "8", "explanation": "The entry c₁₁ is the dot product of the first row of A and the first column of B: (1)(4) + (2)(2) = 4 + 4 = 8." },
                        { "question": "For a system of linear equations AX = B, if A is invertible, the solution is given by:", "options": ["X = BA⁻¹", "X = A⁻¹B", "X = B⁻¹A", "X = AB"], "correctAnswer": "X = A⁻¹B", "explanation": "To solve AX = B, we multiply both sides on the left by A⁻¹. This gives A⁻¹AX = A⁻¹B, which simplifies to IX = A⁻¹B, or X = A⁻¹B." },
                        { "question": "What is the transpose of the matrix C = [ [1, 2, 3], [4, 5, 6] ]?", "options": ["[ [4, 5, 6], [1, 2, 3] ]", "[ [1, 4], [2, 5], [3, 6] ]", "[ [3, 2, 1], [6, 5, 4] ]", "The transpose does not exist"], "correctAnswer": "[ [1, 4], [2, 5], [3, 6] ]", "explanation": "The transpose of a matrix is found by interchanging its rows and columns. The first row [1, 2, 3] becomes the first column, and the second row [4, 5, 6] becomes the second column." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 10: Introduction to Vector Spaces (Conceptual)",
            "image": "https://images.pexels.com/photos/25626508/pexels-photo-25626508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=EP2ghkO0lSk",
                "https://www.youtube.com/watch?v=KBSCMTYaH1s",
                "https://www.youtube.com/watch?v=kKiNh5ZIVEQ"
            ],
            "sections": [
                {
                    "title": "10.1 Definition of a Vector Space, Subspaces, Span",
                    "image": "https://images.pexels.com/photos/2882688/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=LbiLldIn3XY",
                    "content": `The concept of a vector can be generalized to an abstract algebraic structure called a vector space. Linear algebra studies vector spaces and linear mappings between them, providing a unified framework for many concepts.

Definition of a Vector Space (V):
A vector space is a set of objects called vectors, with two defined operations: vector addition and scalar multiplication. These operations must satisfy ten axioms (closure, commutativity, associativity, zero vector, additive inverse, etc.) that ensure they behave in a consistent, familiar way.
Examples of Vector Spaces: ℝⁿ (n-tuples of real numbers), the set of m × n matrices, the set of polynomials of degree ≤ n.

Subspace (W) of a Vector Space (V):
A non-empty subset W of a vector space V is a subspace if W itself is a vector space under the same operations.
Subspace Test: A non-empty subset W is a subspace if and only if it is:
1. Closed under vector addition: If u⃗, v⃗ ∈ W, then u⃗ + v⃗ ∈ W.
2. Closed under scalar multiplication: If u⃗ ∈ W and c is a scalar, then c u⃗ ∈ W.
(These two conditions imply the zero vector is in W).
Examples: In ℝ³, any line or plane passing through the origin is a subspace.

Linear Combination and Span:
* A linear combination of vectors v⃗₁, v⃗₂, ..., v⃗_k is a vector of the form w⃗ = c₁v⃗₁ + c₂v⃗₂ + ... + c_k v⃗_k where cᵢ are scalars.
* The span of a set of vectors S is the set of all possible linear combinations of the vectors in S. It is denoted span(S).
* The span of any set of vectors in V is always a subspace of V.
* If span(S) = V, the set S is said to span or generate the vector space V.

(Suggested insertion: Examples of verifying the subspace test. Geometric illustration of span in ℝ² (span of one vector is a line, span of two non-collinear vectors is the plane).)
`,
                    "mcq": { "question": "Which of the following is a necessary condition for a non-empty subset W of a vector space V to be a subspace?", "options": ["W contains the vector <1,1>", "W must have a finite number of vectors", "W is closed under vector addition and scalar multiplication", "Every vector in W must be non-zero"], "correctAnswer": "W is closed under vector addition and scalar multiplication", "explanation": "The subspace test requires that the subset W contains the zero vector and is closed under both vector addition and scalar multiplication." }
                },
                {
                    "title": "10.2 Linear Independence, Basis, and Dimension",
                    "image": "https://images.pexels.com/photos/4115096/pexels-photo-4115096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=_zK2TgkHJb8",
                    "content": `Linear Independence and Linear Dependence:
A set of vectors S = {v⃗₁, v⃗₂, ..., v⃗_k} is linearly independent if the only solution to the vector equation:
c₁v⃗₁ + c₂v⃗₂ + ... + c_k v⃗_k = 0⃗
is the trivial solution c₁ = c₂ = ... = c_k = 0.
If there is at least one non-trivial solution (where some cᵢ ≠ 0), the set is linearly dependent.

* Meaning (Independent): No vector in the set can be written as a linear combination of the others.
* Meaning (Dependent): At least one vector in the set is redundant (can be written as a combination of others).
* Example: In ℝ², {<1,0>, <0,1>} is linearly independent. {<1,2>, <2,4>} is linearly dependent since <2,4> = 2<1,2>.

Basis of a Vector Space:
A set of vectors B is a basis for a vector space V if:
1. B is linearly independent.
2. B spans V (span(B) = V).
A basis provides a minimal set of building blocks for the entire space.

Dimension of a Vector Space:
If a vector space V has a basis with n vectors, then the dimension of V is n, written dim(V) = n.
* All bases for a space have the same number of vectors.
* dim(ℝⁿ) = n.
* In an n-dimensional space:
    * Any set of more than n vectors is linearly dependent.
    * Any set of fewer than n vectors cannot span the space.
    * Any linearly independent set of n vectors is a basis.
    * Any spanning set of n vectors is a basis.

(Suggested insertion: Worked examples testing sets of vectors in ℝ² or ℝ³ for linear independence/dependence. Examples showing a set forms a basis.)`,
                    "mcq": {
                        "question": "A set of vectors {v₁, v₂, ..., vₖ} is linearly independent if the equation c₁v₁ + c₂v₂ + ... + cₖvₖ = 0 has:",
                        "options": ["Only the trivial solution (all cᵢ=0)", "At least one non-trivial solution", "No solution", "Infinitely many solutions"],
                        "correctAnswer": "Only the trivial solution (all cᵢ=0)",
                        "explanation": "This is the definition of linear independence. If the only way to form the zero vector as a linear combination of the vectors is by using all zero scalars, the set is linearly independent."
                    }
                },
                {
                    "title": "10.3 Eigenvalues and Eigenvectors (Conceptual Overview)",
                    "image": "https://images.pexels.com/photos/2882688/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=61fj80rmULA",
                    "content": `For a square matrix A, which represents a linear transformation:
* An eigenvector of A is a non-zero vector v⃗ such that when A acts on it, the result is a scalar multiple of v⃗.
    Av⃗ = λv⃗
* The scalar λ is the eigenvalue corresponding to v⃗.
* Meaning: Eigenvectors are special vectors whose direction is unchanged (or reversed if λ < 0) by the transformation; they are only scaled. They represent the "characteristic directions" of the transformation.

Finding Eigenvalues and Eigenvectors:
1. The equation Av⃗ = λv⃗ is rewritten as (A - λI)v⃗ = 0⃗.
2. For this equation to have a non-zero solution for v⃗, the matrix (A - λI) must be singular. This means its determinant must be zero:
    det(A - λI) = 0
3. This is the characteristic equation of matrix A. Solving it for λ gives the eigenvalues.
4. For each eigenvalue λ, substitute it back into (A - λI)v⃗ = 0⃗ and solve for the non-zero vectors v⃗, which are the corresponding eigenvectors.

Applications:
Eigenvalues and eigenvectors are crucial in many areas, including stability analysis of systems, vibrational analysis in physics, quantum mechanics, data science (Principal Component Analysis), and diagonalization of matrices.

(Suggested insertion: A simple 2x2 example showing how to set up and solve the characteristic equation for eigenvalues, and then how to find the corresponding eigenvectors. A geometric interpretation of a simple transformation, showing its eigenvectors.)`,
                    "mcq": { "question": "An eigenvector v of a matrix A corresponds to an eigenvalue λ such that:", "options": ["Av = λ", "A = λv", "Av = λv", "det(A) = λ"], "correctAnswer": "Av = λv", "explanation": "This is the fundamental defining equation for eigenvalues and eigenvectors. It states that the action of the matrix A on the eigenvector v results in a vector that is simply a scalar multiple (λ) of the original eigenvector v." }
                },
                {
                    "title": "10.4 Applications to Differential Equations and Transformations",
                    "image": "https://images.pexels.com/photos/2882688/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=pYjwTIwaR9U",
                    "content": `Linear Transformations:
A function T: V → W between vector spaces is a linear transformation if T(u⃗ + v⃗) = T(u⃗) + T(v⃗) and T(c u⃗) = c T(u⃗).
* Any linear transformation T: ℝⁿ → ℝᵐ can be represented by multiplication by an m × n matrix A: T(x⃗) = Ax⃗.
* Matrices are the concrete representations of linear transformations like rotations, reflections, and shears.

Systems of Linear Differential Equations:
A system of first-order linear ODEs can be written in matrix form: X'(t) = AX(t).
* Solutions are often sought in the form X(t) = v⃗ e^(λt).
* Substituting this into the DE leads to the eigenvalue problem Av⃗ = λv⃗.
* The eigenvalues (λ) and eigenvectors (v⃗) of matrix A are used to construct the general solution to the system. This is a powerful method for analyzing coupled systems.

Diagonalization of Matrices:
If an n × n matrix A has n linearly independent eigenvectors, it can be diagonalized.
* This means A can be written as A = PDP⁻¹, where:
    * P is an invertible matrix whose columns are the eigenvectors of A.
    * D is a diagonal matrix whose diagonal entries are the corresponding eigenvalues of A.
* Diagonalization simplifies calculations like finding powers of matrices (A^k = PD^kP⁻¹) and solving systems of linear DEs.

(Suggested insertion: A simple example of a matrix representation for a rotation or reflection. A brief mention of how a system of 2 linear ODEs can be written as X' = AX and linked to eigenvalues/eigenvectors.)`,
                    "mcq": [
                        { "question": "A set of vectors that is linearly independent and spans a vector space V is called a:", "options": ["Subspace", "Span", "Basis", "Dimension"], "correctAnswer": "Basis", "explanation": "A basis for a vector space is a minimal set of vectors that can represent every vector in the space, defined by the two conditions of linear independence and spanning the space." },
                        { "question": "What is the dimension of the vector space R⁴?", "options": ["1", "2", "3", "4"], "correctAnswer": "4", "explanation": "The dimension of a vector space is the number of vectors in any basis for that space. The standard basis for Rⁿ has n vectors, so the dimension of R⁴ is 4." },
                        { "question": "The eigenvalues of a matrix A are found by solving which equation?", "options": ["det(A) = 0", "Av = 0", "det(A - λI) = 0", "A - λI = 0"], "correctAnswer": "det(A - λI) = 0", "explanation": "This is the characteristic equation. It must be solved for λ to find the eigenvalues of the matrix A." },
                        { "question": "Which of the following sets of vectors in R² is linearly dependent?", "options": ["{<1,0>, <0,1>}", "{<1,1>, <1,-1>}", "{<2,3>, <4,6>}", "{<1,0>, <1,1>}"], "correctAnswer": "{<2,3>, <4,6>}", "explanation": "A set is linearly dependent if one vector is a scalar multiple of another. Here, <4,6> = 2 * <2,3>, so the set is linearly dependent." },
                        { "question": "Which of the following is NOT a vector space (with standard operations)?", "options": ["The set of all 2x2 matrices", "The set of all polynomials of degree ≤ 3", "The set R³", "The set of integers"], "correctAnswer": "The set of integers", "explanation": "The set of integers is not a vector space over the real numbers because it is not closed under scalar multiplication. For example, 0.5 (a real scalar) times 3 (an integer) is 1.5, which is not an integer." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 11: Advanced Probability Concepts",
            "image": "https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=KzfWUEJjG18",
                "https://www.youtube.com/watch?v=94AmzeR9n2w",
                "https://www.youtube.com/watch?v=SkidyDQuupA"
            ],
            "sections": [
                {
                    "title": "11.1 Conditional Probability and Bayes’ Theorem",
                    "image": "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=B6PM9Wjl9xU",
                    "content": `Building upon basic probability concepts, this chapter delves into more advanced topics like conditional probability, Bayes' Theorem, and key probability distributions for discrete and continuous random variables.

Conditional Probability (P(A|B)):
The probability of event A occurring, given that event B has already occurred.
P(A|B) = P(A ∩ B) / P(B) (provided P(B) > 0)
Rearranging gives the General Multiplication Rule:
P(A ∩ B) = P(B) × P(A|B).

Law of Total Probability:
If B₁, B₂, ..., B_k form a partition of the sample space S, then for any event A:
P(A) = Σ P(A|B_i)P(B_i)
This helps find the total probability of an event by considering different scenarios.

Bayes' Theorem:
Describes how to update the probability of a hypothesis based on new evidence. It relates P(A|B) to P(B|A).
P(A_i | B) = [P(B | A_i) P(A_i)] / P(B)
Where:
* P(A_i) is the prior probability of a hypothesis.
* P(B | A_i) is the likelihood of observing evidence B given the hypothesis is true.
* P(B) is the total probability of the evidence (calculated using the Law of Total Probability).
* P(A_i | B) is the posterior probability of the hypothesis after observing the evidence.

For a hypothesis H and evidence E:
P(H | E) = [P(E | H) P(H)] / [P(E | H) P(H) + P(E | ¬H) P(¬H)]

Bayes' Theorem is crucial for inference in fields like medical diagnosis and machine learning.

(Suggested insertion: Worked examples for conditional probability, Law of Total Probability, and a detailed Bayes' Theorem problem (e.g., medical testing).) `,
                    "mcq": { "question": "Given two events A and B with P(B) > 0, the conditional probability of A given B, P(A|B), is defined as:", "options": ["P(A ∩ B) / P(A)", "P(A ∩ B) / P(B)", "P(A) * P(B)", "P(A) + P(B)"], "correctAnswer": "P(A ∩ B) / P(B)", "explanation": "This is the standard definition of conditional probability. It is the probability of the intersection of A and B, divided by the probability of the event that is known to have occurred, B." }
                },
                {
                    "title": "11.2 Discrete Random Variables: Binomial, Poisson Distributions",
                    "image": "https://images.pexels.com/photos/8386440/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=_zXfD0GTR-g",
                    "content": `Random Variable (X): 
A variable whose value is a numerical outcome of a random phenomenon.
A Discrete Random Variable can take on a finite or countably infinite number of values. Its distribution is described by a Probability Mass Function (PMF), P(X=x).

1. Binomial Distribution:
Describes the probability of k "successes" in a fixed number (n) of independent Bernoulli trials.
Conditions:
1. Fixed number of trials, n.
2. Each trial is independent.
3. Two outcomes per trial (success/failure).
4. Probability of success, p, is constant.
Let X ~ Bin(n, p).
* PMF: P(X = k) = nCk p^k (1-p)^(n-k)
* Mean: E(X) = np
* Variance: Var(X) = np(1-p)

2. Poisson Distribution:
Describes the probability of a given number of events occurring in a fixed interval of time or space, given a known average rate (λ). Often models rare events.
Let X ~ Po(λ).
* PMF: P(X = k) = (e^(-λ) λ^k) / k!
* Mean: E(X) = λ
* Variance: Var(X) = λ (Mean equals Variance)

Poisson Approximation to Binomial: If n is large and p is small (e.g., n > 20, p < 0.05), a Bin(n, p) distribution can be approximated by a Po(λ) distribution with λ = np.

(Suggested insertion: Clear statement of conditions for each distribution. Formulas for PMF, mean, and variance. Worked examples calculating probabilities for both binomial and Poisson scenarios.)`,
                    "mcq": {
                        "question": "A random variable X follows a Binomial distribution with n=10 trials and probability of success p=0.2. What is the mean (expected value) of X?",
                        "options": ["2", "5", "1.6", "8"],
                        "correctAnswer": "2",
                        "explanation": "The mean of a Binomial distribution is given by the formula μ = np. Here, μ = 10 * 0.2 = 2."
                    }
                },
                {
                    "title": "11.3 Continuous Random Variables: Uniform, Normal, Exponential",
                    "image": "https://images.pexels.com/photos/8386440/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=rbfLaj0N9SY",
                    "content": `A Continuous Random Variable can take on any value in an interval. Its distribution is described by a Probability Density Function (PDF), f(x). Probability is the area under the PDF curve, so P(a ≤ X ≤ b) = ∫[a,b] f(x) dx.

1. Uniform Distribution:
All values over a finite interval [a, b] are equally likely.
* PDF: f(x) = 1 / (b - a) for a ≤ x ≤ b.
* Mean: E(X) = (a + b) / 2
* Variance: Var(X) = (b - a)² / 12

2. Normal Distribution (Gaussian):
The ubiquitous bell-shaped, symmetric curve, defined by mean μ and variance σ². X ~ N(μ, σ²).
* Any normal variable X can be standardized to Z ~ N(0, 1) using the Z-score:
    Z = (X - μ) / σ
* Probabilities are found using Z-tables or software.
* Empirical Rule: About 68% of data lies within μ ± σ, 95% within μ ± 2σ, and 99.7% within μ ± 3σ.
* Normal Approximation to Binomial: If np > 5 and n(1-p) > 5, Bin(n,p) can be approximated by N(μ=np, σ²=np(1-p)).

3. Exponential Distribution:
Describes the time between events in a Poisson process. Models waiting times or lifetimes. Defined by a rate parameter λ.
* PDF: f(x) = λe^(-λx) for x ≥ 0.
* Mean: E(X) = 1/λ
* Variance: Var(X) = 1/λ²
* Memoryless Property: The probability of a future event is independent of how much time has already passed.

(Suggested insertion: Graphs of the PDFs for each distribution. Worked examples of calculating probabilities using the normal distribution and Z-scores.)`,
                    "mcq": { "question": "What percentage of data in a normal distribution lies within one standard deviation of the mean (μ ± σ)?", "options": ["50%", "68%", "95%", "99.7%"], "correctAnswer": "68%", "explanation": "This is part of the Empirical Rule (or 68-95-99.7 rule) for the normal distribution. Approximately 68% of the values fall within one standard deviation of the mean." }
                },
                {
                    "title": "11.4 Expected Value, Variance, and Moment Generating Functions (Conceptual)",
                    "image": "https://images.pexels.com/photos/8386440/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=H79X65-_DO8",
                    "content": `Expected Value (Mean) of a Random Variable (E(X) or μ):
The weighted average of all possible values. Represents the long-run average.
* Discrete: E(X) = Σ [x ⋅ P(X=x)]
* Continuous: E(X) = ∫[-∞,∞] x f(x) dx
* Properties: E(c) = c, E(cX) = cE(X), E(X + Y) = E(X) + E(Y).

Variance of a Random Variable (Var(X) or σ²):
A measure of the spread of values around the mean.
* Definition: Var(X) = E[(X - μ)²]
* Computational Formula: Var(X) = E(X²) - [E(X)]²
* Standard Deviation (σ): σ = √Var(X).
* Properties: Var(c) = 0, Var(cX) = c²Var(X). If X and Y are independent, Var(X + Y) = Var(X) + Var(Y).

Moment Generating Function (MGF) (M_X(t) - Conceptual):
A function used to "generate" the moments (like mean and variance) of a distribution.
* Definition: M_X(t) = E(e^(tX))
* The k-th moment E(X^k) is the k-th derivative of M_X(t) evaluated at t=0.
    * E(X) = M_X'(0)
    * E(X²) = M_X''(0)
* MGFs uniquely determine a distribution (if they exist).

(Suggested insertion: Worked examples calculating E(X) and Var(X) for a simple discrete distribution. Show how to use M'(0) and M''(0) to find mean and variance if the MGF is given.)`,
                    "mcq": [
                        { "question": "The variance of a random variable X, Var(X), can be calculated using which formula?", "options": ["E(X²) - E(X)", "[E(X)]² - E(X²)", "E(X²) - [E(X)]²", "E(X) - E(X²)"], "correctAnswer": "E(X²) - [E(X)]²", "explanation": "This is the standard computational formula for variance. It is the expected value of X squared minus the square of the expected value of X." },
                        { "question": "A key characteristic of the Poisson distribution is that its mean is equal to its:", "options": ["Standard deviation", "Median", "Mode", "Variance"], "correctAnswer": "Variance", "explanation": "For a Poisson distribution with parameter λ, both the mean (E(X)) and the variance (Var(X)) are equal to λ." },
                        { "question": "If events A and B are independent, what is P(A|B)?", "options": ["P(A)", "P(B)", "P(A)P(B)", "0"], "correctAnswer": "P(A)", "explanation": "If two events are independent, the occurrence of one event (B) does not affect the probability of the other event (A). Therefore, the probability of A given B is simply the probability of A." },
                        { "question": "For a continuous random variable X, what is the probability that X equals any single specific value, P(X=c)?", "options": ["1", "0.5", "0", "Depends on the function"], "correctAnswer": "0", "explanation": "For a continuous random variable, probability is represented by the area under the probability density function curve. The area at a single point is a line, which has zero width and therefore zero area." },
                        { "question": "The memoryless property is a key characteristic of which probability distribution?", "options": ["Normal", "Binomial", "Uniform", "Exponential"], "correctAnswer": "Exponential", "explanation": "The exponential distribution's memoryless property means that the probability of an event occurring in the future is independent of how much time has already passed. It is often used to model waiting times." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 12: Statistical Inference and Hypothesis Testing",
            "image": "https://images.pexels.com/photos/7722866/pexels-photo-7722866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=VK-rnA3-41c",
                "https://www.youtube.com/watch?v=DlwOTOydeyk",
                "https://www.youtube.com/watch?v=idZHQwVohOo"
            ],
            "sections": [
                {
                    "title": "12.1 Sampling Distributions and Central Limit Theorem",
                    "image": "https://images.pexels.com/photos/4031694/pexels-photo-4031694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=yrMHXn57c8Q",
                    "content": `While descriptive statistics summarizes data, inferential statistics uses sample data to draw conclusions about a larger population. This involves estimating population parameters and testing hypotheses about them.

Parameters vs. Statistics:
* Parameter: A numerical characteristic of a population (e.g., population mean μ, population proportion p). Usually unknown.
* Statistic: A numerical characteristic of a sample (e.g., sample mean x̄, sample proportion p̂). Calculated from data.

Sampling Distribution:
The probability distribution of a sample statistic (like x̄) when samples of the same size n are repeatedly drawn from the same population. It describes the sample-to-sample variability of the statistic.

Sampling Distribution of the Sample Mean (x̄):
* Mean of x̄: μ_x̄ = μ (The sample mean x̄ is an unbiased estimator of the population mean μ).
* Standard Deviation of x̄ (Standard Error of the Mean, SEM): σ_x̄ = σ / √n
    The standard error decreases as the sample size n increases, meaning larger samples give more precise estimates.

Central Limit Theorem (CLT):
One of the most important theorems in statistics. It states:
* If random samples of size n are drawn from any population with mean μ and standard deviation σ, then as the sample size n becomes large ( n ≥ 30 is a common rule of thumb), the sampling distribution of the sample mean x̄ will be approximately normal.
* The mean of this approximate normal distribution is μ and the standard deviation is σ/√n.
* If the original population is already normal, the sampling distribution of x̄ is exactly normal for any n.

Significance: The CLT allows us to use normal distribution methods for inference about the mean even if the population is not normally distributed, as long as the sample is large enough.

(Suggested insertion: Diagrams illustrating a sampling distribution and the CLT in action. Formulas for μ_x̄ and σ_x̄.)`,
                    "mcq": { "question": "The Central Limit Theorem (CLT) states that for a large sample size n, the sampling distribution of the sample mean (x̄) is approximately:", "options": ["Uniform", "Poisson", "Normal", "Binomial"], "correctAnswer": "Normal", "explanation": "The CLT is a fundamental theorem stating that the distribution of sample means will be approximately normal, regardless of the original population's distribution, as long as the sample size is sufficiently large (typically n ≥ 30)." }
                },
                {
                    "title": "12.2 Confidence Intervals for Means and Proportions",
                    "image": "https://images.pexels.com/photos/4031694/pexels-photo-4031694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=lfrLO2ID-TY",
                    "content": `A confidence interval (CI) provides a range of plausible values for an unknown population parameter with a specified level of confidence.
Form: Point Estimate ± Margin of Error

1. Confidence Interval for a Population Mean (μ):
* Case 1: Population SD σ known, or n is large (n ≥ 30). Use Z-distribution.
    CI = x̄ ± Z* (σ / √n)
    where Z* is the critical Z-value (e.g., 1.96 for 95% confidence).
* Case 2: Population SD σ unknown, and n is small (n < 30). Use t-distribution (if population is approx. normal).
    CI = x̄ ± t* (s / √n)
    where s is the sample SD and t* is the critical t-value with degrees of freedom (df) = n - 1.

2. Confidence Interval for a Population Proportion (p):
* Point estimate: p̂ = x/n (sample proportion).
* Conditions: np̂ ≥ 10 and n(1-p̂) ≥ 10 for normal approximation.
* CI = p̂ ± Z* √[ p̂(1-p̂) / n ]

Interpretation of Confidence Intervals:
"We are [e.g., 95%] confident that the true population [parameter] lies within the interval (lower bound, upper bound)." This means that if we repeated the sampling process many times, about 95% of the intervals we construct would contain the true population parameter.

Determining Sample Size:
Formulas can be used to find the sample size n needed to achieve a desired margin of error.

(Suggested insertion: Tables of common Z* and t* critical values. Step-by-step worked examples for constructing CIs for a mean (both cases) and a proportion, including interpretation.)`,
                    "mcq": {
                        "question": "What is the correct interpretation of a 95% confidence interval for a population mean μ?",
                        "options": ["There is a 95% probability that the true mean μ is in the calculated interval.", "95% of the sample data falls within the interval.", "If we repeat the sampling process many times, 95% of the calculated intervals would contain the true mean μ.", "There is a 95% probability that the sample mean is the true mean."],
                        "correctAnswer": "If we repeat the sampling process many times, 95% of the calculated intervals would contain the true mean μ.",
                        "explanation": "Confidence level refers to the long-run success rate of the method, not the probability of a single, specific interval containing the parameter. It's a statement about the reliability of the procedure."
                    }
                },
                {
                    "title": "12.3 Hypothesis Tests (z‐Test, t‐Test, Chi‐Square Test)",
                    "image": "https://images.pexels.com/photos/4031694/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=Tyraw3Xue0Q",
                    "content": `Hypothesis Testing is a formal procedure for making decisions about a population based on sample evidence.

Steps in Hypothesis Testing:
1. State Hypotheses:
    * Null Hypothesis (H₀): Statement of no effect or no difference (e.g., μ = 50).
    * Alternative Hypothesis (H₁ or Hₐ): What you are trying to find evidence for (e.g., μ > 50, μ < 50, or μ ≠ 50).
2. Set Significance Level (α): The probability of a Type I error (rejecting H₀ when it's true). Common value is α = 0.05.
3. Calculate the Test Statistic: A value measuring how far the sample statistic is from the null hypothesis value.
4. Determine p-value or Critical Value:
    * p-value: The probability of observing a result as extreme as or more extreme than yours, if H₀ were true.
5. Make a Decision:
    * If p-value ≤ α, Reject H₀. There is statistically significant evidence for H₁.
    * If p-value > α, Fail to reject H₀. There is not enough evidence for H₁.

Common Tests:
* Z-Test for Mean: (Large sample or σ known). Test stat: Z = (x̄ - μ₀) / (σ/√n).
* t-Test for Mean: (Small sample, σ unknown). Test stat: t = (x̄ - μ₀) / (s/√n), df = n-1.
* Z-Test for Proportion: (Large sample). Test stat: Z = (p̂ - p₀) / √[p₀(1-p₀)/n].
* Chi-Square (χ²) Test: For categorical data.
    * Goodness-of-Fit: Tests if observed frequencies fit a hypothesized distribution.
    * Test for Independence: Tests if two categorical variables are associated, using a contingency table.
    * Test Statistic: χ² = Σ [(Observed - Expected)² / Expected]. Compare to critical χ² value.

(Suggested insertion: A flowchart of the testing steps. One worked example for a t-test, a proportion z-test, and a chi-square goodness-of-fit test.)`,
                    "mcq": { "question": "In hypothesis testing, what is a Type I error?", "options": ["Rejecting the null hypothesis when it is true", "Failing to reject the null hypothesis when it is false", "Rejecting the alternative hypothesis when it is true", "Failing to reject the alternative hypothesis when it is false"], "correctAnswer": "Rejecting the null hypothesis when it is true", "explanation": "A Type I error is the mistake of rejecting a true null hypothesis. The probability of committing this error is denoted by the significance level, α." }
                },
                {
                    "title": "12.4 Linear Regression and Correlation Coefficients (Building on Gen Math)",
                    "image": "https://images.pexels.com/photos/4031694/pexels-photo-4031694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=rGUBILI6Zdg",
                    "content": `Correlation:
Measures the strength and direction of a linear association between two quantitative variables.
* Pearson Correlation Coefficient (r):
    * A value between -1 and +1.
    * r ≈ +1: Strong positive linear correlation.
    * r ≈ -1: Strong negative linear correlation.
    * r ≈ 0: Weak or no linear correlation.
* Correlation does NOT imply causation.

Linear Regression:
Finds the equation of the straight line (line of best fit) that best describes the linear relationship.
* Least-Squares Regression Line: ŷ = b₀ + b₁x
    This line minimizes the sum of the squared vertical distances from the data points to the line.
* Slope (b₁): Represents the average change in y for a one-unit increase in x.
    b₁ = r (s_y / s_x)
* Y-intercept (b₀): Predicted value of y when x=0.
    b₀ = ȳ - b₁x̄

Coefficient of Determination (r² or R²):
* r² is the square of the correlation coefficient (0 ≤ r² ≤ 1).
* It represents the proportion of the total variance in the y variable that is explained by the linear relationship with the x variable.
* Example: If r² = 0.81, it means 81% of the variation in y is accounted for by the regression line with x.

Making Predictions:
* Use the regression equation ŷ = b₀ + b₁x.
* Interpolation (predicting within the range of x-data) is generally reliable.
* Extrapolation (predicting outside the range of x-data) is unreliable and risky.

(Suggested insertion: An example calculating r and the regression line equation from a small dataset. Interpretation of the slope and r² in context. A scatter plot with the regression line shown.)`,
                    "mcq": [
                        { "question": "The coefficient of determination, r², represents:", "options": ["The strength of the correlation", "The direction of the correlation", "The proportion of variance in y explained by x", "The slope of the regression line"], "correctAnswer": "The proportion of variance in y explained by x", "explanation": "r² tells us what percentage of the variability in the dependent variable (y) can be accounted for by the linear relationship with the independent variable (x)." },
                        { "question": "The Pearson correlation coefficient, r, must always be between:", "options": ["0 and 1", "-1 and 1", "0 and infinity", "-100 and 100"], "correctAnswer": "-1 and 1", "explanation": "The value of r ranges from -1 (perfect negative linear correlation) to +1 (perfect positive linear correlation), with 0 indicating no linear correlation." },
                        { "question": "In a hypothesis test for the significance of a correlation, what is the null hypothesis (H₀)?", "options": ["ρ = 1", "ρ = -1", "ρ ≠ 0", "ρ = 0"], "correctAnswer": "ρ = 0", "explanation": "The null hypothesis typically represents the 'no effect' or 'no relationship' scenario. For correlation, this means assuming the population correlation coefficient (ρ) is zero." },
                        { "question": "As the sample size (n) in a study increases, what happens to the standard error of the mean (σ/√n)?", "options": ["It increases", "It decreases", "It stays the same", "It becomes negative"], "correctAnswer": "It decreases", "explanation": "The standard error of the mean is σ/√n. Since n is in the denominator, a larger sample size leads to a smaller standard error, indicating a more precise estimate of the population mean." },
                        { "question": "A t-test is typically used to test a hypothesis about a population mean when:", "options": ["The sample size is large and population SD is known", "The sample size is small and population SD is unknown", "The data is categorical", "We are comparing more than two groups"], "correctAnswer": "The sample size is small and population SD is unknown", "explanation": "The t-distribution accounts for the extra uncertainty introduced by having to estimate the population standard deviation (σ) with the sample standard deviation (s), which is particularly important for small sample sizes (n < 30)." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 13: WAEC Further Mathematics Practice",
            "image": "https://images.pexels.com/photos/6693317/pexels-photo-6693317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": [
                "https://www.youtube.com/watch?v=V3DJAHkSbNU",
                "https://www.youtube.com/watch?v=8g9oFJ-P2Hk",
                "https://www.youtube.com/watch?v=h87JMR4MvY8"
            ],
            "sections": [
                {
                    "title": "13.1 Multiple‐Choice Questions and Short‐Answer Problems",
                    "image": "https://images.pexels.com/photos/8923996/pexels-photo-8923996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=ap3IOSDOQD0",
                    "content": `This chapter is dedicated to providing targeted and comprehensive practice for students preparing for the West African Examinations Council (WAEC) Further Mathematics examination. The questions mirror the style, difficulty, and syllabus coverage of WAEC papers to build confidence, enhance problem-solving skills, and refine exam techniques.

A substantial collection of:
* Multiple-Choice Questions (MCQs): Covering all areas of the WAEC Further Mathematics syllabus, including Advanced Algebra, Advanced Functions & Graphs, Advanced Calculus, Vectors, Matrices, and Advanced Probability & Statistics.
* Short-Answer Problems: Requiring a numerical answer or a brief algebraic result without extensive working (similar to some Section A type questions).

Skill Focus: Testing understanding of definitions, theorems, formulas, ability to perform calculations accurately and efficiently, and recognition of problem types. The questions can be organized by topic for focused revision or presented as mixed sets to simulate exam conditions. An answer key with brief explanations is essential for self-assessment.`,
                    "mcq": { "question": "A key strategy for multiple-choice questions is to:", "options": ["Always choose option C", "Spend the most time on the hardest questions first", "Eliminate obviously incorrect answers to narrow down choices", "Guess randomly without reading the question"], "correctAnswer": "Eliminate obviously incorrect answers to narrow down choices", "explanation": "The process of elimination increases your chances of selecting the correct answer, even if you are not 100% sure. It's a more effective strategy than random guessing." }
                },
                {
                    "title": "13.2 Structured Questions with Full Solutions",
                    "image": "https://images.pexels.com/photos/7723354/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=XVqDbBNmcmo",
                    "content": `This section targets the longer, multi-part structured questions typical of WAEC Further Mathematics Paper 2.

Content:
In-depth questions that often integrate concepts from different topic areas and require detailed, logical working. Examples include:
* Solving complex number problems using De Moivre's theorem.
* Full binomial expansions and approximations.
* Finding roots, factors, and sketching higher-degree polynomials.
* Solving exponential and logarithmic equations.
* Applied differentiation (tangents, rates, optimization).
* Applied integration (area, volume, techniques like by parts).
* Solving first and second-order ODEs.
* Vector problems on lines, planes, and geometry.
* Solving systems of equations using matrices or Cramer's rule.
* Problems on advanced probability distributions or statistical inference.

Model Solutions and Marking Schemes:
* Full, detailed step-by-step solutions for each question.
* WAEC-style marking scheme guidelines (allocating marks for method 'M', accuracy 'A', etc.) to help students structure answers to maximize marks.
* Emphasis on using clear diagrams where appropriate (e.g., Argand diagrams, graphs, vectors).`,
                    "mcq": {
                        "question": "In WAEC structured questions, why is showing all your working steps crucial?",
                        "options": ["It makes the paper look longer", "It helps the examiner understand your thought process and award method marks", "It is not important if the final answer is correct", "It is only for geometry questions"],
                        "correctAnswer": "It helps the examiner understand your thought process and award method marks",
                        "explanation": "Examiners award marks for correct methods (M marks) and accuracy (A marks). Even if your final answer is wrong due to a calculation error, you can still score significant method marks if your steps are logical and correct."
                    }
                },
                {
                    "title": "13.3 Past Paper Analysis and Exam Techniques",
                    "image": "https://images.pexels.com/photos/6932280/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=RwU12fD6Z0U",
                    "content": `Analysis of WAEC Further Maths Exam Structure:
Breakdown of papers, number of sections, questions, time, and mark allocation. Analysis of typical topic weighting based on recent trends.

Command Words:
Understanding the specific meaning of command words used in WAEC questions is critical.
* "Solve," "Find," "Determine": Require a calculation to arrive at a final answer.
* "Show that," "Prove that": The answer is given, and you must provide a rigorous, step-by-step logical proof to reach it.
* "Hence," "Deduce": You must use the result from the previous part of the question to solve the current part.

Time Management:
Strategies for allocating time effectively based on the mark allocation for each question.

Answering Techniques:
* How to approach multi-part questions.
* Importance of showing all working and logical steps.
* Maintaining accuracy in calculations.
* How to use a calculator effectively.
* Identifying and avoiding common errors made by students in Further Maths.
* Familiarity with the provided Formula Booklet (if any) to know what is given and what must be memorized.

This section may analyze a few sample questions from WAEC past papers to illustrate key points.`,
                    "mcq": [
                        { "question": "When an exam question says 'Hence, solve...', what does it imply?", "options": ["You should start the problem over with a new method.", "You must use the result from the previous part of the question to solve this part.", "This part of the question is optional.", "The question is unrelated to the previous part."], "correctAnswer": "You must use the result from the previous part of the question to solve this part.", "explanation": "The word 'Hence' is a command word that links parts of a question together, indicating that the preceding result is required for the subsequent step." },
                        { "question": "A good time management strategy during the WAEC Further Maths exam is to:", "options": ["Spend equal time on every question, regardless of marks.", "Do the hardest questions first to get them out of the way.", "Allocate time to questions based on their mark allocation.", "Complete the multiple choice section last."], "correctAnswer": "Allocate time to questions based on their mark allocation.", "explanation": "A question worth 10 marks should be allocated more time than a question worth 3 marks. This ensures you have a fair chance to attempt questions that carry more weight." },
                        { "question": "What does the command word 'Show that' require you to do?", "options": ["Assume the given statement is true and use it.", "Prove the given statement is true by providing a detailed, logical argument.", "Provide a numerical example.", "Find a counterexample."], "correctAnswer": "Prove the given statement is true by providing a detailed, logical argument.", "explanation": "'Show that' or 'Prove that' means the result is given, and you must produce a rigorous mathematical derivation to demonstrate how that result is reached." },
                        { "question": "If you are stuck on a difficult question, what is the best course of action?", "options": ["Leave the entire paper and give up.", "Spend all remaining time trying to solve it.", "Make a mark, move on to other questions you can solve, and return to it later if time permits.", "Guess the answer without any working."], "correctAnswer": "Make a mark, move on to other questions you can solve, and return to it later if time permits.", "explanation": "It is not wise to waste a large amount of time on a single difficult problem. It's better to secure marks on easier questions first and then come back to challenging ones." },
                        { "question": "Reviewing past papers is an effective revision technique primarily because it:", "options": ["Guarantees the same questions will appear again.", "Familiarizes you with the exam format, question style, and time pressure.", "Is less work than studying the textbook.", "Allows you to memorize answers."], "correctAnswer": "Familiarizes you with the exam format, question style, and time pressure.", "explanation": "Past papers help you understand the structure of the exam, the way questions are phrased, the typical difficulty level, and how to pace yourself effectively." }
                    ]
                }
            ]
        },
        {
            "name": "Chapter 14: Cambridge Additional Mathematics (0606) / Further Mathematics (9231) Practice",
            "image": "https://images.pexels.com/photos/6693317/pexels-photo-6693317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "video": ["https://www.youtube.com/watch?v=e-3sAOUESX0", "https://www.youtube.com/watch?v=l8G3Rp63bNM", "https://www.youtube.com/watch?v=MRbpw12mPsE"],
            "sections": [
                {
                    "title": "14.1 Syllabus Mapping and Key Differences",
                    "image": "https://images.pexels.com/photos/5491026/pexels-photo-5491026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=uliXB6X8WJI",
                    "content": `This chapter is for students preparing for Cambridge International Examinations, such as Additional Mathematics (IGCSE 0606) or relevant AS/A Level Further Mathematics papers (e.g., 9231). The focus is on practice that aligns with Cambridge assessment styles, which can differ from other examining bodies like WAEC.

Syllabus Overview:
A detailed mapping of the relevant Cambridge syllabus against other syllabi.
* Identify common topics.
* Highlight topics unique to or with a different emphasis in the Cambridge syllabus. This could include specific aspects of curve sketching, permutations & combinations, or kinematics with calculus.
* Note differences in the depth of treatment. Cambridge questions often emphasize rigorous application and problem-solving in varied contexts.

Depth of Treatment and Style:
* Cambridge emphasizes clear mathematical communication and showing detailed reasoning.
* Familiarity with permitted calculators is expected.
* It's crucial to understand which formulae are provided in Cambridge exam formula booklets versus what needs to be memorized.`,
                    "mcq": {
                        "question": "What is a major reason for mapping the Cambridge syllabus against a local syllabus like WAEC?",
                        "options": ["To prove one syllabus is better than the other.", "To identify unique topics or differences in emphasis for targeted revision.", "To use the same textbook for both without any changes.", "To skip the topics that are not common."],
                        "correctAnswer": "To identify unique topics or differences in emphasis for targeted revision.",
                        "explanation": "Syllabus mapping helps students and teachers focus their efforts on topics that are specific to the Cambridge exam or treated with a different depth, ensuring complete preparation."
                    }
                },
                {
                    "title": "14.2 Timed Mock Exams with Worked Answers (Cambridge Style)",
                    "image": "https://images.pexels.com/photos/207756/pexels-photo-207756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "https://www.youtube.com/watch?v=2w93x77mPsE",
                    "content": `Mock Exam Papers:
* This section should contain one or two full mock exam papers designed based on the structure and style of Cambridge Additional Mathematics (0606) or the relevant AS/A Level Further Mathematics papers.
* The papers should ensure balanced coverage of key syllabus areas.
* Question types should reflect the Cambridge approach, often starting with straightforward parts and building to more complex problem-solving or "show that" questions.

Worked Answers and Mark Schemes:
* Provide full, detailed model solutions showing all steps and reasoning.
* Use Cambridge-style marking schemes, which typically include:
    * M marks for correct method applied.
    * A marks for accuracy, which often depend on preceding M marks.
    * B marks for independent statements or results.
* Emphasize clarity of presentation, correct mathematical notation, and precision. Highlighting common pitfalls or alternative correct approaches is also valuable.
* Encourage students to self-mark and reflect on their performance to identify areas for improvement.`,
                    "mcq": { "question": "In a Cambridge-style mark scheme, what does an 'M1' mark typically stand for?", "options": ["Mistake 1", "Main idea 1", "Method mark 1", "Multiple choice 1"], "correctAnswer": "Method mark 1", "explanation": "M marks are awarded for a correct method applied to the problem. You can earn M marks even if you make a subsequent accuracy error." }
                },
                {
                    "title": "14.3 Revision Checklists and Error Analysis (Cambridge Focus)",
                    "image": "https://images.pexels.com/photos/5491026/jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    "video": "",
                    "content": `Syllabus-based Revision Checklists:
Provide checklists covering all main topics of the relevant Cambridge syllabus so students can track their revision progress and ensure full coverage.

Common Errors and Misconceptions in Cambridge Exams:
Analyze common mistakes seen in Cambridge Principal Examiner Reports. These often include:
* Algebraic manipulation errors (signs, brackets, simplifying).
* Misunderstanding or misapplying calculus rules.
* Incorrect use of trigonometric identities or radians/degrees. In calculus, calculators must be in radian mode.
* Not showing enough working for "show that" questions.
* Misinterpreting complex problem statements.
* Premature rounding: Rounding intermediate steps can lead to an inaccurate final answer. Keep full calculator accuracy or at least 4-5 significant figures during calculations, and only round the final answer as required.

Strategies for Specific Question Types:
* "Show that" questions: Work logically from the given information to the required answer, showing every step.
* Multi-part questions: Be aware that later parts often depend on earlier ones.
* Presentation: Emphasize clear handwriting, logical layout of solutions, and use of diagrams.`,
                    "mcq": [
                        { "question": "In Cambridge exams, for a question that requires a final answer to 3 significant figures, what is a good practice for intermediate steps?", "options": ["Round all intermediate steps to 3 significant figures.", "Keep more significant figures in intermediate steps to avoid premature rounding errors.", "Round all intermediate steps to 1 decimal place.", "Use only whole numbers in intermediate steps."], "correctAnswer": "Keep more significant figures in intermediate steps to avoid premature rounding errors.", "explanation": "Rounding too early in your calculations can lead to an inaccurate final answer. It is best practice to keep full calculator accuracy or at least 4-5 significant figures during intermediate steps and only round the final answer as required." },
                        { "question": "A common source of error in Cambridge calculus questions involving trigonometry is:", "options": ["Using the calculator in Degree mode when Radian mode is required.", "Forgetting the constant of integration, +C.", "Applying the product rule instead of the quotient rule.", "All of the above."], "correctAnswer": "All of the above.", "explanation": "All these are frequent errors. Calculus with trigonometric functions requires radian mode. Forgetting the +C in indefinite integration is a classic mistake. Choosing the wrong differentiation rule is also common." },
                        { "question": "What does the Cambridge command word 'Deduce' imply?", "options": ["A long and complex proof is required.", "Start the problem from scratch.", "Use the immediately preceding result with little or no further calculation.", "The answer is obvious and needs no working."], "correctAnswer": "Use the immediately preceding result with little or no further calculation.", "explanation": "'Deduce' is similar to 'Hence' but often implies an even more direct conclusion that can be drawn from the previous part with minimal extra work." },
                        { "question": "Reviewing Principal Examiner Reports for Cambridge exams is useful because they:", "options": ["Provide the exact questions for the next exam.", "Highlight common student misconceptions and areas of weakness.", "Are shorter than the textbook.", "Contain entertaining stories."], "correctAnswer": "Highlight common student misconceptions and areas of weakness.", "explanation": "These reports give valuable insight into how students performed on past exams, pointing out common errors and misunderstandings that future candidates can learn to avoid." },
                        { "question": "For a Cambridge 'show that' question where the final answer is given, what is the most important part of your solution?", "options": ["Writing the final answer clearly.", "A clear, logical, and detailed progression of steps from the starting point to the given answer.", "A diagram.", "Using a new method not suggested by the question."], "correctAnswer": "A clear, logical, and detailed progression of steps from the starting point to the given answer.", "explanation": "In 'show that' questions, the answer is already known. The marks are awarded for demonstrating a valid and complete mathematical argument that proves the result." }
                    ]
                }
            ]
        }
    ]
}

export type Chapter = (typeof textbook)['chapters'][0];
export type Section = (typeof textbook)['chapters'][0]['sections'][0];
export type MCQ = (typeof textbook)['chapters'][0]['sections'][0]['mcq'];
export type MCQS_ARRAY = (typeof textbook)['chapters'][0]['sections'][3]['mcq'];
