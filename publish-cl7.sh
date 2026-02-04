#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting Clearline7 Publication Sequence..."

# 1. Build everything one last time to be sure
pnpm build

# 2. Publish foundation packages first
echo "📦 Publishing @clearline7/types..."
pnpm --filter @clearline7/types publish --access public --no-git-checks

echo "📦 Publishing @clearline7/set-definitions..."
pnpm --filter @clearline7/set-definitions publish --access public --no-git-checks

echo "📦 Publishing @clearline7/theme..."
pnpm --filter @clearline7/theme publish --access public --no-git-checks

# 3. Publish the consumer packages
echo "📦 Publishing @clearline7/components..."
pnpm --filter @clearline7/components publish --access public --no-git-checks

echo "✅ All packages published to NPM!"
