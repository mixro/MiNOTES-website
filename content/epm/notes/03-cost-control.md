# Cost and earned value

> Starter notes. Replace with your own.

**Earned value management (EVM)** combines scope, schedule and cost to show how a project is really performing.

## The three base values

- **PV** (planned value): budgeted cost of the work scheduled to date.
- **EV** (earned value): budgeted cost of the work actually done.
- **AC** (actual cost): what the work done actually cost.

## Variances and indices

| Measure | Formula | Good when |
|---|---|---|
| Cost variance | $CV = EV - AC$ | $CV > 0$ (under budget) |
| Schedule variance | $SV = EV - PV$ | $SV > 0$ (ahead) |
| Cost performance index | $CPI = EV / AC$ | $CPI > 1$ |
| Schedule performance index | $SPI = EV / PV$ | $SPI > 1$ |

## Forecasting

$$EAC = \frac{BAC}{CPI}, \qquad ETC = EAC - AC, \qquad VAC = BAC - EAC$$

where **BAC** is the budget at completion.

### Worked example

BAC = TSh 100 M. At month 6: PV = 50 M, EV = 40 M, AC = 45 M.

- $CPI = 40/45 = 0.89$, so the project is over budget.
- $SPI = 40/50 = 0.80$, so it is behind schedule.
- $EAC = 100 / 0.89 \approx 112.5$ M.

## Cash flow and appraisal

- **Payback period**: time for cumulative cash flow to reach zero.
- **Net present value**: $NPV = \sum_{t=0}^{n} \dfrac{CF_t}{(1+r)^t}$. Accept if $NPV > 0$.
