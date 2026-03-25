[2026-03-23 13:56] - Updated by Junie
{
    "TYPE": "correction",
    "CATEGORY": "Layout overlap",
    "EXPECTATION": "The Performance section (or its animated images) should not overlay the Features section; layout should flow without covering the next section.",
    "NEW INSTRUCTION": "WHEN implementing scroll animations in sections THEN ensure no overlap with following sections"
}

[2026-03-23 13:59] - Updated by Junie
{
    "TYPE": "negative",
    "CATEGORY": "Bug persists",
    "EXPECTATION": "The Performance section should not overlay the Features section; layout must flow correctly across viewports.",
    "NEW INSTRUCTION": "WHEN using a pinned ScrollTrigger in Performance THEN enable pinSpacing and set end to push next section"
}

