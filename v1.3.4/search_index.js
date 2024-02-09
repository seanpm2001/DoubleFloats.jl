var documenterSearchIndex = {"docs":
[{"location":"appropriate/#The-Types","page":"Appropriate Uses","title":"The Types","text":"","category":"section"},{"location":"appropriate/#Double64","page":"Appropriate Uses","title":"Double64","text":"","category":"section"},{"location":"appropriate/","page":"Appropriate Uses","title":"Appropriate Uses","text":"Double64 is the accuracy stalwart.  Very good values are likely to result.","category":"page"},{"location":"appropriate/","page":"Appropriate Uses","title":"Appropriate Uses","text":"When used with reasonably sized values, the computations should limit the accrual of relative error to 10⋅𝘂², where 𝘂 is the relative rounding unit, the unitinthelastplace of the significand, often eps(x)/2. It is possible to accrue relative error steadily; so some experimentation has guided algorithmic selection. At worst, a sequence of 100000 arithmetic and elementary operations might admit a relative error of 100000 * 10⋅𝘂². The worst is unlikely.","category":"page"},{"location":"appropriate/","page":"Appropriate Uses","title":"Appropriate Uses","text":"One right way to use this type is","category":"page"},{"location":"appropriate/","page":"Appropriate Uses","title":"Appropriate Uses","text":"map your input from Float64s to Double64s\ncompute with Double64s\nmap your resultant values from Double64s to Float64s","category":"page"},{"location":"appropriate/","page":"Appropriate Uses","title":"Appropriate Uses","text":"The values obtained with cascaded arithimetic and composed elementary functions are reliable and their utility is desireable.","category":"page"},{"location":"appropriate/#what-it-is","page":"Appropriate Uses","title":"what it is","text":"","category":"section"},{"location":"appropriate/","page":"Appropriate Uses","title":"Appropriate Uses","text":"What is that? 𝘂 is the last bit of the significand as a quantity, so a result that has a relative error of 1000000⋅𝘂 is as a report that the final ceil(Int, log2(1_000_000)) bits of the result's significand are to be treated as inexactness rather than quantification. That means, for a Float64 value (with a 53-bit significand) 53-20 bits remain reliable, while ~38% of the precision has become unavailable to applications involve other's health, wealth, and well-being that are shepherded by responsible persons.","category":"page"},{"location":"appropriate/#how-it-is-used","page":"Appropriate Uses","title":"how it is used","text":"","category":"section"},{"location":"appropriate/","page":"Appropriate Uses","title":"Appropriate Uses","text":"Were one working with Float32s (a 24-bit significand), the entire result would have become unreliable. With Double, the relative error accompanying any basic arithmetic operation is 10⋅𝘂² (10×𝘂^𝟐). It is reasonable to see this squaring as pulling in almost second significand's bits.  Our possibly accrued relative error does eat into the number of reliable bits in this second order significance. Nonetheless, if your use requires less than one million successive arithmetic operations, the result obtained is reliable as a Float64 or as a Float32.","category":"page"},{"location":"references/#References","page":"References","title":"References","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"[Double-Double Building Blocks]\nM. Joldes, V. Popescu, and J.M. Muller.\nTight and rigourous error bounds for basic building blocks of double-word arithmetic\n2016, working paper.","category":"page"},{"location":"references/","page":"References","title":"References","text":"https://hal.archives-ouvertes.fr/hal-01351529v2/document","category":"page"},{"location":"references/","page":"References","title":"References","text":"[Triple-Double Building Blocks]\nChristoph Quirin Lauter.\nBasic building blocks for a triple-double intermediate format\n2005, research report.","category":"page"},{"location":"references/","page":"References","title":"References","text":"https://hal.inria.fr/inria-00070314/document","category":"page"},{"location":"references/","page":"References","title":"References","text":"[Multiple Precision]\nV. Popescu.\nTowards fast and certified multiple-precision librairies.\n2017, thesis.","category":"page"},{"location":"references/","page":"References","title":"References","text":"https://hal.archives-ouvertes.fr/tel-01534090/document      ","category":"page"},{"location":"references/","page":"References","title":"References","text":"[mpfun]\nA Thread-Safe Arbitrary Precision Computation Package\nDavid H. Bailey ∗\nMarch 20, 2017","category":"page"},{"location":"references/","page":"References","title":"References","text":"http://www.davidhbailey.com/dhbpapers/mpfun2015.pdf     http://www.davidhbailey.com/dhbsoftware/mpfun-fort-v15.tar.gz     http://www.davidhbailey.com/dhbsoftware/mpfun-mpfr-v07.tar.gz","category":"page"},{"location":"references/","page":"References","title":"References","text":"[Faithful Floats]\nM. Lange and S.M. Rump.\nFaithfully Rounded Floating-point Computations\n2017, preprint.","category":"page"},{"location":"references/","page":"References","title":"References","text":"http://www.ti3.tu-harburg.de/paper/rump/LaRu2017b.pdf      ","category":"page"},{"location":"references/","page":"References","title":"References","text":"Nelson H.F. Beebe\nThe Mathematical-Function Computation Handbook\nSpringer, 2017, book","category":"page"},{"location":"references/","page":"References","title":"References","text":"J.-M. Muller, N. Brisebarre, F. de Dinechin, C.-P. Jeannerod, V. Lefevre,\n    G. Melquiond, N. Revol, D. Stehle, and S. Torres.\nHandbook of Floating-Point Arithmetic\nBirkhauser Boston, 2010, book","category":"page"},{"location":"linearalgebra/#Linear-Algebra","page":"Linear Algebra","title":"Linear Algebra","text":"","category":"section"},{"location":"linearalgebra/#Using","page":"Linear Algebra","title":"Using","text":"","category":"section"},{"location":"linearalgebra/","page":"Linear Algebra","title":"Linear Algebra","text":"using DoubleFloats, LinearAlgebra","category":"page"},{"location":"linearalgebra/#Vectors-and-Matrices","page":"Linear Algebra","title":"Vectors and Matrices","text":"","category":"section"},{"location":"linearalgebra/","page":"Linear Algebra","title":"Linear Algebra","text":"using DoubleFloats, LinearAlgebra\n\nn = 25\nvector = rand(Double64, n)\nmatrix = reshape(rand(Double64,n*n),n,n)","category":"page"},{"location":"linearalgebra/#Matrix-Predicates","page":"Linear Algebra","title":"Matrix Predicates","text":"","category":"section"},{"location":"linearalgebra/","page":"Linear Algebra","title":"Linear Algebra","text":"iszero, isone, isdiag \nissquare, issymmetric, ishermitian \nisposdef, isposdef!\nistril, istriu","category":"page"},{"location":"linearalgebra/#Matrix-Operations","page":"Linear Algebra","title":"Matrix Operations","text":"","category":"section"},{"location":"linearalgebra/","page":"Linear Algebra","title":"Linear Algebra","text":"+, -, *, /\nrank, cond, norm, opnorm\ndiagind, diag\ntranspose, adjoint\ninv, pinv","category":"page"},{"location":"linearalgebra/#Matrix-Functions","page":"Linear Algebra","title":"Matrix Functions","text":"","category":"section"},{"location":"linearalgebra/","page":"Linear Algebra","title":"Linear Algebra","text":"det, logdet, logabsdet, tr\neigvals, eigvals!, eigvecs, eigen\nsvdvals, svdvals!, svd","category":"page"},{"location":"linearalgebra/#Matrix-Factorizations","page":"Linear Algebra","title":"Matrix Factorizations","text":"","category":"section"},{"location":"linearalgebra/","page":"Linear Algebra","title":"Linear Algebra","text":"general: lu, lu!, qr, qr!\nsquare: schur, schur!, hessenberg, hessenberg!\nsquare+symmetric, Hermitian: cholesky, cholesky!","category":"page"},{"location":"linearalgebra/#Functions-of-Matrices-(diagonalizable-and-square-only)","page":"Linear Algebra","title":"Functions of Matrices (diagonalizable & square only)","text":"","category":"section"},{"location":"linearalgebra/","page":"Linear Algebra","title":"Linear Algebra","text":"sqrt, cbrt\nmatrix^power\nexp, log\nsin, cos, tan, csc, sec, cot\nasin, acos, atan, acsc, asec, acot\nsinh, cosh, tanh, csch, sech, coth\nasinh, acosh, atanh, acsch, asech, acoth\nmatrixfunction(function, matrix)","category":"page"},{"location":"special/#Special-Functions","page":"Special Functions","title":"Special Functions","text":"","category":"section"},{"location":"special/","page":"Special Functions","title":"Special Functions","text":"DoubleFloats supports some special functions of real values.","category":"page"},{"location":"special/","page":"Special Functions","title":"Special Functions","text":"x below is any of Double64, Double32, Double16","category":"page"},{"location":"special/#Bessel-Functions","page":"Special Functions","title":"Bessel Functions","text":"","category":"section"},{"location":"special/","page":"Special Functions","title":"Special Functions","text":"besselj0(x), besselj1(x)`\nbesselj(0, x), besselj(1, x)\nbessely0(x), bessely1(x)\nbessely(0, x), bessely(1, x)\nbesselj(nu::Int, x)\nBessel function of the first kind\nbessely(nu::Int, x)\nBessel function of the second kind","category":"page"},{"location":"special/#Gamma-Functions","page":"Special Functions","title":"Gamma Functions","text":"","category":"section"},{"location":"special/","page":"Special Functions","title":"Special Functions","text":"gamma(x)\ngamma function\nloggamma(x), lgamma(x)\nlog gamma function","category":"page"},{"location":"special/#Error-Functions","page":"Special Functions","title":"Error Functions","text":"","category":"section"},{"location":"special/","page":"Special Functions","title":"Special Functions","text":"erf(x)\nerror function\nerfc(x)\ncomplementary error function (1-erf(x))","category":"page"},{"location":"special/#Elliptic-Integrals","page":"Special Functions","title":"Elliptic Integrals","text":"","category":"section"},{"location":"special/","page":"Special Functions","title":"Special Functions","text":"elliptick(x)\nComplete Elliptic Integral of the First Kind","category":"page"},{"location":"construction/#Construction","page":"Construction","title":"Construction","text":"","category":"section"},{"location":"construction/#from-Integers,-Floats-and-Rationals","page":"Construction","title":"from Integers, Floats and Rationals","text":"","category":"section"},{"location":"construction/","page":"Construction","title":"Construction","text":"using DoubleFloats\n\na1 = Double64(22) / 7\na2 = df64\"22\" / df64\"7\"\na1 === a2\n\nb1 = Double32(\"5.12345\") # prevent early conversion to Float64\nb2 = df32\"5.12345\"\nb1 === b2\n\nc1 = Double16(22//7)\nc2 = df16\"22\" / df16\"7\"\nc1 === c2","category":"page"},{"location":"construction/#from-two-Reals","page":"Construction","title":"from two Reals","text":"","category":"section"},{"location":"construction/","page":"Construction","title":"Construction","text":"using DoubleFloats\n\na = 10.0\nb = cbrt(10.0)\nc = DoubleFloat(a, b)","category":"page"},{"location":"construction/","page":"Construction","title":"Construction","text":"using this form is necessary when constructing a DoubleFloat from two numbers","category":"page"},{"location":"random/#Random","page":"Random Numbers","title":"Random","text":"","category":"section"},{"location":"random/","page":"Random Numbers","title":"Random Numbers","text":"julia> rand(Double64)\n0.2654749880242928\n\njulia> rand(Double32, 4)\n4-element Array{DoubleFloat{Float32},1}:\n 0.62278694\n 0.14700651\n 0.42059994\n 0.8824145 \n\njulia> randpm(Double32)\n-0.78260666\n\njulia> randpm(Double64, 4)\n4-element Array{DoubleFloat{Float64},1}:\n  0.8066283194653339\n  0.3846875811169719\n -0.8318619362182055\n -0.1718555031982676\n\njulia> rand(ComplexDF32)\n0.7863289 + 0.9202755im\n\njulia> randpm(ComplexDF32,5)\n5-element Array{Complex{DoubleFloat{Float32}},1}:\n -0.22268367 + 0.94761634im\n   0.9173372 - 0.51481026im\n  0.22448015 + 0.20910525im\n -0.25364602 + 0.4772849im \n -0.52076036 - 0.40857565im","category":"page"},{"location":"stringshowparse/#Show,-String,-Parse","page":"Show, String, Parse","title":"Show, String, Parse","text":"","category":"section"},{"location":"stringshowparse/#Show","page":"Show, String, Parse","title":"Show","text":"","category":"section"},{"location":"stringshowparse/","page":"Show, String, Parse","title":"Show, String, Parse","text":"julia> x = sqrt(Double64(2)) / sqrt(Double64(6))\n0.5773502691896257\n\njulia> show(IOContext(Base.stdout,:compact=>false),x)\n5.7735026918962576450914878050194151e-01\n\njulia> showall(x)\n0.5773502691896257645091487805019415\n\njulia> showtyped(x)\nDouble64(0.5773502691896257, 3.3450280739356326e-17)\n\njulia> c = ComplexDF32(sqrt(df32\"2\"), cbrt(df32\"3\"))\n1.4142135 + 1.4422495im\n\njulia> showall(c)\n1.414213562373095 + 1.442249570307406im\n\njulia> showtyped(c)\nComplexDF32(Double32(1.4142135, 2.4203235e-8), Double32(1.4422495, 3.3793125e-8))","category":"page"},{"location":"stringshowparse/#String","page":"Show, String, Parse","title":"String","text":"","category":"section"},{"location":"stringshowparse/","page":"Show, String, Parse","title":"Show, String, Parse","text":"julia> using DoubleFloats\n\njulia> x = sqrt(Double64(2)) / sqrt(Double64(6))\n0.5773502691896257\n\njulia> string(x)\n\"5.7735026918962576450914878050194151e-01\"\n\njulia> c = ComplexDF32(sqrt(df32\"2\"), cbrt(df32\"3\"))\n1.4142135 + 1.4422495im\n\njulia> string(c)\n\"1.414213562373094 + 1.442249570307406im\"\n\njulia> stringtyped(c)\n\"ComplexD32(Double32(1.4142135, 2.4203233e-8), Double32(1.4422495, 3.3793125e-8))\"","category":"page"},{"location":"stringshowparse/#Parse","page":"Show, String, Parse","title":"Parse","text":"","category":"section"},{"location":"stringshowparse/","page":"Show, String, Parse","title":"Show, String, Parse","text":"julia> x = sqrt(Double64(2)) / sqrt(Double64(6))\n0.5773502691896257\n\njulia> Meta.parse(stringtyped(x)\n:(Double64(0.5773502691896257, 3.3450280739356326e-17))","category":"page"},{"location":"characteristics/#Characteristics","page":"Characteristics","title":"Characteristics","text":"","category":"section"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"This package provides extended precision versions of Float64, Float32, Float16.","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"type name significand exponent ◊ base type significand exponent\nDouble64 106 bits 11 bits ◊ Float64 53 bits 11 bits\nDouble32 48 bits 8 bits ◊ Float32 24 bits 8 bits\nDouble16 22 bits 5 bits ◊ Float16 11 bits 5 bits","category":"page"},{"location":"characteristics/#Representation","page":"Characteristics","title":"Representation","text":"","category":"section"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"Double64 is a magnitude ordered, nonoverlapping pair of Float64Double32 is a magnitude ordered, nonoverlapping pair of Float32Double16 is a magnitude ordered, nonoverlapping pair of Float16","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"(+, -, *) are error-free, (/, sqrt) are least-error\nelementary functions are quite accurate\noften better than C \"double-double\" libraries","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"ComplexDF64 is a (real, imag) pair of Double64ComplexDF32 is a (real, imag) pair of Double32ComplexDF16 is a (real, imag) pair of Double16","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"elementary functions are quite accurate\nfunctions and their inverses round-trip well","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"","category":"page"},{"location":"characteristics/#Accuracy","page":"Characteristics","title":"Accuracy","text":"","category":"section"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"For Double64 arguments within 0.0..2.0","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"expect the abserr of elementary functions to be 1e-30 or better\nexpect the relerr of elementary functions to be 1e-28 or better","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"When used with reasonably sized values, expect successive DoubleFloat ops to add no more than 10⋅𝘂² to the cumulative relative error (𝘂 is the relative rounding unit, usually 𝘂 = eps(x)/2). Relative error can accrue steadily. After 100,000 DoubleFloat ops with reasonably sized values, the relerr could approach 100,000 * 10⋅𝘂². In practice these functions are considerably more resiliant: our algorithms come frome seminal papers and extensive numeric investigation.","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"","category":"page"},{"location":"characteristics/#Absolute-and-Relative-Error","page":"Characteristics","title":"Absolute and Relative Error","text":"","category":"section"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"results for f(x), x in 0..1","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"function abserr relerr\nexp 1.0e-31 1.0e-31\nlog 1.0e-31 1.0e-31\n  \nsin 1.0e-31 1.0e-31\ncos 1.0e-31 1.0e-31\ntan 1.0e-31 1.0e-31\n  \nasin 1.0e-31 1.0e-31\nacos 1.0e-31 1.0e-31\natan 1.0e-31 1.0e-31\n  \nsinh 1.0e-31 1.0e-29\ncosh 1.0e-31 1.0e-31\ntanh 1.0e-31 1.0e-29\n  \nasinh 1.0e-31 1.0e-29\natanh 1.0e-31 1.0e-30","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"results for f(x), x in 1..2","category":"page"},{"location":"characteristics/","page":"Characteristics","title":"Characteristics","text":"function abserr relerr\nexp 1.0e-30 1.0e-31\nlog 1.0e-31 1.0e-31\n  \nsin 1.0e-31 1.0e-31\ncos 1.0e-31 1.0e-28\ntan 1.0e-30 1.0e-30\n  \natan 1.0e-31 1.0e-31\n  \nsinh 1.0e-30 1.0e-31\ncosh 1.0e-30 1.0e-31\ntanh 1.0e-31 1.0e-31\n  \nasinh 1.0e-31 1.0e-31","category":"page"},{"location":"capabilities/#Capabilities","page":"Capabilities","title":"Capabilities","text":"","category":"section"},{"location":"capabilities/#predicates","page":"Capabilities","title":"predicates","text":"","category":"section"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"Predicates are functions that ask \"yes or no\" questions of their argument[s].       You can ask of a number \"Is this zero?\" or \"Is this one?\" and these predicates     (iszero, isone) will work as expected with almost all numerical types.     The built-in numerical types let you query finiteness (isfinite, isinf).    ","category":"page"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"These are the predicates made available for use with DoubleFloats:    ","category":"page"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"  iszero, isnonzero, isone                 #  value == 0, value != 0, value == 1\n  ispositive, isnegative,                  #  value >  0, value <  0\n  isnonnegative, isnonpositive,            #  value >= 0, value <= 0   \n  isinteger, isfractional,                 #  value == round(value)\n  issubnormal,                             #  zero(T) < abs(value) < floatmin(T)\n  isnormal,                                #  !isinf(value) && !isnan(value) && !issubnormal(value)\n  isfinite, isinf,                         #  abs(value) != Inf, abs(value) == Inf\n  isposinf, isneginf,                      #  value == Inf, value == -Inf\n  isnan                                    #  value is not a number (eg 0/0)","category":"page"},{"location":"capabilities/#the-basic-arithmetic-operations","page":"Capabilities","title":"the basic arithmetic operations","text":"","category":"section"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"addition, subtraction \nmultiplication, square, cube\nreciprocation, division, square root, cube root","category":"page"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"There are arithmetic operations that take two Float64s or Float32s or Float16s and return the corresponding Double64 or Double32 or Double16.  These operations are available in functional form as add2, sub2, mul2, div2 and in infix form using \"⊕ ⊖ ⊗ ⊘\" ( \\oplus \\ominus \\otimes \\oslash).","category":"page"},{"location":"capabilities/#rounding","page":"Capabilities","title":"rounding","text":"","category":"section"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"RoundNearest, RoundUp, RoundDown\nRoundToZero, RoundFromZero\nspread   – the nearest integer to x, away from zero; spread complements trunc.\ntld(x,y) = trunc(x/y)\nsld(x,y) = spread(s/y)","category":"page"},{"location":"capabilities/#elementary-mathematical-functions","page":"Capabilities","title":"elementary mathematical functions","text":"","category":"section"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"log, exp\nsin, cos, tan, csc, sec, cot\nsinpi, cospi, tanpi\nasin, acos, atan, acsc, asec, acot\nsinh, cosh, tanh, csch, sech, coth\nasinh, acosh, atanh, acsch, asech, acoth","category":"page"},{"location":"capabilities/#linear-algebra","page":"Capabilities","title":"linear algebra","text":"","category":"section"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"isdiag, ishermitian, isposdef, issymmetric, istril, istriu\nnorm, det, dot, tr, condskeel, logdet, logabsdet\ntranspose, adjoint, tril, triu\ndiag, diagind\nfactorize, lu, lufact, qr, qrfact","category":"page"},{"location":"capabilities/#also","page":"Capabilities","title":"also","text":"","category":"section"},{"location":"capabilities/","page":"Capabilities","title":"Capabilities","text":"rand for uniform variates in [0,1)\nrandn for canonical normal variates\nisapprox (default rtol=eps(1.0)^(37/64))","category":"page"},{"location":"#DoubleFloats.jl","page":"Overview","title":"DoubleFloats.jl","text":"","category":"section"},{"location":"#Math-with-85-accurate-bits.","page":"Overview","title":"Math with 85+ accurate bits.","text":"","category":"section"},{"location":"#Extended-precision-float-and-complex-types","page":"Overview","title":"Extended precision float and complex types","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"N.B. Double64 is the most performant type [β]","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"","category":"page"},{"location":"#Installation","page":"Overview","title":"Installation","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"pkg> add DoubleFloats","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"or","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"julia> using Pkg\njulia> Pkg.add(\"DoubleFloats\")","category":"page"},{"location":"#More-Performant-Than-BigFloat","page":"Overview","title":"More Performant Than BigFloat","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"Comparing Double64 and BigFloat after setting BigFloat precision to 106 bits.","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"op speedup\n+ 11x\n* 18x\n\\ 7x\ntrig 3x-6x","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"these results are from BenchmarkTools, on one machine","category":"page"},{"location":"#Examples","page":"Overview","title":"Examples","text":"","category":"section"},{"location":"#Double64,-Double32,-Double16","page":"Overview","title":"Double64, Double32, Double16","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"julia> using DoubleFloats\n\njulia> dbl64 = sqrt(Double64(2)); 1 - dbl64 * inv(dbl64)\n0.0\njulia> dbl32 = sqrt(Double32(2)); 1 - dbl32 * inv(dbl32)\n0.0\njulia> dbl16 = sqrt(Double16(2)); 1 - dbl16 * inv(dbl16)\n0.0\n\njulia> typeof(ans) === Double16\ntrue","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"note: floating-point constants must be used with care, they are evaluated as Float64 values before additional processing","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"julia> Double64(0.2)\n2.0000000000000001110223024625156540e-01\n\njulia> Double64(2)/10\n1.9999999999999999999999999999999937e-01\n\njulia> df64\"0.2\"\n1.9999999999999999999999999999999937e-01","category":"page"},{"location":"#Complex-functions","page":"Overview","title":"Complex functions","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"\njulia> x = ComplexDF64(sqrt(df64\"2\"), cbrt(df64\"3\"))\n1.4142135623730951 + 1.4422495703074083im\n\njulia> y = acosh(x)\n1.402873733241199 + 0.8555178360714634im\n\njulia> x - cosh(y)\n7.395570986446986e-32 + 0.0im","category":"page"},{"location":"#show,-string,-parse","page":"Overview","title":"show, string, parse","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"julia> using DoubleFloats\n\njulia> x = sqrt(Double64(2)) / sqrt(Double64(6))\n0.5773502691896257\n\njulia> string(x)\n\"5.7735026918962576450914878050194151e-01\"\n\njulia> show(IOContext(Base.stdout,:compact=>false),x)\n5.7735026918962576450914878050194151e-01\n\njulia> showtyped(x)\nDouble64(0.5773502691896257, 3.3450280739356326e-17)\n\njulia> showtyped(parse(Double64, stringtyped(x)))\nDouble64(0.5773502691896257, 3.3450280739356326e-17)\n\njulia> Meta.parse(stringtyped(x))\n:(Double64(0.5773502691896257, 3.3450280739356326e-17))\n\njulia> x = ComplexDF32(sqrt(d32\"2\"), cbrt(d32\"3\"))\n1.4142135 + 1.4422495im\n\njulia> string(x)\n\"1.414213562373094 + 1.442249570307406im\"\n\njulia> stringtyped(x)\n\"ComplexDF32(Double32(1.4142135, 2.4203233e-8), Double32(1.4422495, 3.3793125e-8))\"","category":"page"},{"location":"#golden-ratio","page":"Overview","title":"golden ratio","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"julia> using DoubleFloats\n\njulia> ϕ = Double32(MathConstants.golden)\n1.61803398874989490\njulia> phi = \"1.61803398874989484820+\"\njulia> ϕ⁻¹ = inv(ϕ)\n6.18033988749894902e-01\n\njulia> ϕ == 1 + ϕ⁻¹\ntrue\njulia> ϕ === ϕ * ϕ⁻¹ + ϕ⁻¹\ntrue","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"typed value computed value ~abs(golden - computed)\nMathConstants.golden 1.6180339887498948482045868+ 0.0\nFloat64(MathConstants.golden) 1.618033988749895 1.5e-16\nDouble32(MathConstants.golden) 1.618033988749894_90 5.2e-17\nDouble64(MathConstants.golden) 1.6180339887498948482045868343656354 2.7e-33","category":"page"},{"location":"#Questions","page":"Overview","title":"Questions","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"Usage questions can be posted on the Julia Discourse forum.  Use the topic Numerics (a \"Discipline\") and a put the package name, DoubleFloats, in your question (\"topic\").","category":"page"},{"location":"#Contributions","page":"Overview","title":"Contributions","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"Contributions are very welcome, as are feature requests and suggestions. Please open an issue if you encounter any problems. The contributing page has a few guidelines that should be followed when opening pull requests.","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"[β]: If you want to get involved with moving Double32 performance forward, great. I would provide guidance. Otherwise, for most purposes you are better off using Float64 than Double32 (Float64 has more significant bits, wider exponent range, and is much faster).","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"","category":"page"}]
}
