Enhance and expand the raw image prompts into production-grade, image-generation prompts.

Rules:

- Preserve the original intent and content
- Do NOT introduce new brand colors unless explicitly mentioned
- Do NOT alter UI or application styling concepts
- Do NOT rewrite tokens or design system rules
- Focus on: clarity, visual detail, mood, composition, camera, lighting, materials
- Output in a clean numbered list
- Each item should be ONE prompt, not a paragraph

Enhance for:
• lighting
• material detail
• focal length / camera type
• tone & mood
• environment
• realism or stylization (if mentioned)

Format:

1. [Enhanced prompt]
2. [Enhanced prompt]
3. [Enhanced prompt]

START with the enhanced version only. No explanation.

Now enhance the following prompts:

[all prompts in PROMPTS dir]

Enhance prompts

You have theses tools if needed

bun scripts/enhanceImagePrompts.ts \
 brand/design-repo/PROMPTS/asset_prompts_blogpost.md \
 brand/design-repo/PROMPTS/enhanced_image_prompts_blogpost.md

Generate images

bun scripts/generateAssetsFromPrompts.ts \
 brand/design-repo/PROMPTS/enhanced_image_prompts_blogpost.md \
 brand/design-repo/ASSETS/BlogPost/\_staging

Save approved assets

bun scripts/assetTool.ts save BlogPost icon blogpost path/to/asset_1.png
bun scripts/assetTool.ts save BlogPost clipart layout path/to/asset_3.png

Update tracker

bun scripts/assetTool.ts update
