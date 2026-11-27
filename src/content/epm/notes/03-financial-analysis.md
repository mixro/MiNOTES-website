# Financial analysis and risk

*Chapter 2 (continued) · EEU 08106 Engineering Project Management*

**Financial analysis** checks whether a project is viable on financial or commercial grounds, and shows the return on the investment. It is part of the feasibility study and of financial appraisal. The common techniques are:

| Technique | Accounts for time value of money? |
|---|---|
| Pay-back period | No |
| Return on investment (ROI) | No |
| Net present value (NPV) | Yes |
| Benefit–cost ratio (BCR) / profitability index (PI) | Yes |
| Internal rate of return (IRR) | Yes |

## 1. Pay-back period

The **time needed to recover the initial investment** from the project's net annual returns (income − expenditure).

- **Uniform returns:** $\text{Pay-back} = \dfrac{\text{Investment}}{\text{Annual net return}}$
- **Uneven returns:** add the annual returns year by year until the total equals the investment.

> **Example 1 (uniform return).** A farmer invests Rs 20 000 in a fish pond and gets a net return of Rs 5 000 a year.
> $\text{Pay-back} = 20\,000 / 5\,000 =$ **4 years**.

> **Example 2 (uneven return).** A horticultural orchard costs Rs 100 000.
>
> | Year | Income | Expenditure | Net return | Cumulative |
> |---|---|---|---|---|
> | 1 | 60 000 | 30 000 | 30 000 | 30 000 |
> | 2 | 70 000 | 30 000 | 40 000 | 70 000 |
> | 3 | 85 000 | 25 000 | 60 000 | 130 000 |
>
> After 2 years, Rs 70 000 is recovered and Rs 30 000 is still needed. Year 3 returns 60 000, so it takes half of year 3: **pay-back = 2.5 years**.

**Drawbacks**

- It **ignores returns after the pay-back period**. Two projects with the same pay-back period are ranked equal even if one earns nothing afterwards and the other earns a lot.
- It gives the **same value to money at any time** (no discounting).

## 2. Return on investment (ROI)

The **annual return as a percentage of the initial investment**:

$$ROI = \frac{\text{Annual net return}}{\text{Investment}} \times 100\%$$

When returns are uneven, use the **average** annual return.

> **Fish pond:** $ROI = \dfrac{5\,000}{20\,000} \times 100 =$ **25%**
>
> **Orchard:** average return $= 130\,000/3 = 43\,333$, $\quad ROI = \dfrac{43\,333}{100\,000} \times 100 =$ **43.3%**

> **Correction.** The notes give the fish-pond ROI as $(5000/10\,000) \times 100 = 50\%$. The investment in Example 1 is **Rs 20 000**, so the ROI is **25%**. (Note also that 4 years' pay-back and 25% ROI are consistent: $1/0.25 = 4$.)

ROI shares the pay-back period's weakness: it cannot tell a project with **immediate returns** (e.g. lift irrigation) from one with a **gestation period** of 2 to 3 years (e.g. a new crop variety). Both methods are fine for a **quick check**, but should be used **together with discounted cash flow methods**.

## 3. Discounted cash flow (DCF)

Money now is worth more than the same amount later. **Discounting is the reverse of compounding.**

- Compounding at 10%: Rs 100 now grows to Rs 110 after 1 year and Rs 121 after 2 years.
- Discounting at 10%: Rs 110 next year is worth Rs 100 now. So **Rs 100** received after 1 year is worth $100/1.1 =$ **Rs 90.91** now, and after 2 years $100/1.21 =$ **Rs 82.64**.

**Present value** of a cash flow $C_n$ received in year $n$ at discount rate $d$:

$$PV = \frac{C_n}{(1+d)^n}$$

The factor $1/(1+d)^n$ is the **discount factor**; tables of it are available. The present value is found for **both the investments and the returns**, and the result is expressed in three measures.

### Net present value (NPV)

- $C$ = sum of the discounted **investments** (present value of costs)
- $B$ = sum of the discounted **returns** (present value of benefits)

$$NPV = B - C$$

A project is viable if $NPV > 0$; **the higher the NPV, the better**.

### Benefit–cost ratio (BCR) or profitability index (PI)

$$BCR = PI = \frac{B}{C}$$

Viable if $B/C > 1$; **the higher the ratio, the better**.

### Internal rate of return (IRR)

The **discount rate at which $B = C$**, i.e. at which $NPV = 0$. It is found **by trial (iteration)**: compute the NPV at different rates until it is close to zero, then interpolate:

$$IRR \approx d_1 + \frac{NPV_1}{NPV_1 - NPV_2}\,(d_2 - d_1)$$

where $NPV_1 > 0$ at rate $d_1$ and $NPV_2 < 0$ at rate $d_2$. **Higher IRR is better**; accept the project if the IRR exceeds the cost of capital.

> **Worked example (orchard, discounted at 10%).** Investment Rs 100 000 now; returns 30 000, 40 000, 60 000 at the end of years 1 to 3.
>
> | Year | Return | Discount factor $1/1.1^n$ | Present value |
> |---|---|---|---|
> | 1 | 30 000 | 0.9091 | 27 273 |
> | 2 | 40 000 | 0.8264 | 33 058 |
> | 3 | 60 000 | 0.7513 | 45 079 |
> | | | **B** | **105 410** |
>
> $NPV = 105\,410 - 100\,000 =$ **Rs 5 410** (viable), $\quad BCR = 105\,410/100\,000 =$ **1.05**
>
> **IRR:** at 12%, NPV = +1 380; at 13%, NPV = −542.
> $IRR \approx 12 + \dfrac{1380}{1380 + 542}(1) \approx$ **12.7%**
>
> Compare with the undiscounted view: the pay-back period said 2.5 years and the ROI said 43%. Once timing is counted, the return is a more modest 12.7% a year.

## Risk and uncertainty

Every project carries risk and uncertainty, so both must be analysed during formulation and appraisal.

| | Risk | Uncertainty |
|---|---|---|
| Meaning | Chance of **adverse consequences** | **Inherently unpredictable** dimensions |
| Measurable? | **Yes**, quantifiable | No |
| Analysed by | **Probability** of occurrence | **Sensitivity analysis** |

**Sources of risk and uncertainty**

- **Technical:** scope, change of technology, quality and quantity of inputs, activity times, estimating errors.
- **Economic:** market, cost, competition, policy changes, exchange rate.
- **Socio-political:** labour, stakeholders.
- **Environmental:** pollution, environmental degradation.
