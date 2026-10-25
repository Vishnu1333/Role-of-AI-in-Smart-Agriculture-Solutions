# Fieldwise AI — Audit and Validation Status

**Project:** Role of AI in Smart Agriculture Solutions (PRG4206 Machine Learning)  
**Status:** Corrected source archive; empirical and bibliographic review remains partial.

## Catalogue structure

- The source catalogue contains 58 records: 55 records dated 2021–2026 and 3 older foundational records, flagged separately.
- The 55 core records are distributed as 11 records per each of the five assignment areas.
- A catalogue count and an active DOI link do not establish that every author, title, dataset, model, metric, finding, or limitation has been verified against the complete paper.
- Review and conceptual papers use not-applicable wording for empirical dataset/metric fields where appropriate. Fields that have not been extracted are described as not reported or not independently extracted rather than filled with guessed values.

## Quantitative examples currently used in the charts and case-study cards

The following source-specific values were checked against the linked publisher/source records available during this audit. They are examples, not a complete verification of all 58 records.

- **Li et al. (2022), wheat yield prediction:** Random Forest with NIRv: R² = 0.74 and RMSE = 758 kg/ha; Random Forest with EVI: R² = 0.73 and RMSE = 762 kg/ha. Both rows use the same study so the comparison is within-study. DOI: https://doi.org/10.1016/j.compag.2022.106790
- **Qi et al. (2022), tomato virus detection:** SE-YOLOv5: mAP@0.5 = 94.10%; reported test accuracy = 91.07%. DOI: https://doi.org/10.1016/j.compag.2022.106780
- **Tassis et al. (2021), coffee leaf biotic stress:** U-Net mIoU = 94.25%; PSPNet mIoU = 93.54%; Mask R-CNN precision = 73.90% and recall = 71.90%. These metrics remain separate. DOI: https://doi.org/10.1016/j.compag.2021.106191
- **Dang et al. (2023), cotton weed detection:** YOLOv4 mAP@0.5 = 95.22% and YOLOv3-tiny mAP@0.5 = 88.14% on CottonWeedDet12. DOI: https://doi.org/10.1016/j.compag.2023.107655
- **Chen et al. (2021), paddy-rice irrigation:** the paper's simulation reports 23 mm less irrigation and 21 mm less drainage without significant yield reduction in the studied setting. This is a study-specific simulation finding, not a universal savings estimate. DOI: https://doi.org/10.1016/j.agwat.2021.106838
- **Foundational image benchmarks:** Ferentinos (2018) reports a best accuracy of 99.53% in its study; Mohanty et al. (2016) reports 99.35% held-out accuracy on PlantVillage. These are older controlled image-classification studies and are not directly comparable to field deployment results. DOIs: https://doi.org/10.1016/j.compag.2018.01.009 and https://doi.org/10.3389/fpls.2016.01419

The DOI links above are the direct bibliographic lookup paths for the selected examples. Check the original paper, not just the abstract, before using any result in the final report.

## Chart data boundaries

- Published study metrics are shown with their task, metric, year, and source. Values from unlike tasks and metrics are contextual examples and are not combined into a universal leaderboard.
- The wheat-yield comparison is constrained to two configurations from one publication.
- Disease/pest chart bars identify the individual metric being shown (e.g., mAP, mIoU, precision, recall, or accuracy) and must not be interpreted as interchangeable measures.
- The 30-day irrigation time series is **synthetic demonstration data**, not real farm observations, and remains marked that way in the interface.
- Dynamic landscape counts are calculated from the catalogue data. Counts alone do not validate publication claims.

## Build and dependency validation

- TypeScript type-check was run against the current source using the available TypeScript package: `node node_modules/typescript/bin/tsc -b --pretty false`.
- A clean `npm ci` did not complete within the validation environment's available time. The original uploaded archive contained platform-specific macOS ARM64 dependencies, while this validation runtime is Linux; its Rollup package did not include the required Linux native module.
- For that reason, a fresh Vite production build is **not claimed** for this archive. The archive intentionally excludes bundled `node_modules`, stale `dist/` output, and TypeScript incremental build artifacts. On the target Mac, run:

```bash
npm ci
npm run typecheck
npm run build
npm run dev
```

## Remaining academic work

Before citing a record in the final report, group members should inspect the original paper, confirm its bibliographic details and relevant result, and record the evidence used. The website catalogue is a research aid; it does not substitute for the required 3,000–5,000-word critical literature review, reference list, group workload matrix, and presentation.
