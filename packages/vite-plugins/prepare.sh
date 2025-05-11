# copy all .d.ts files from src to dist
mkdir dist/types
for file in src/types/*.d.ts; do
  cp "$file" "dist/$(dirname "$file" | sed 's|src/||')/"
done
