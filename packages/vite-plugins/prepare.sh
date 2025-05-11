# copy all .d.ts files from src to dist
mkdir -p dist/types
for file in src/types/*.d.ts; do
  cp "$file" "dist/$(dirname "$file" | sed 's|src/||')/"
done

# minify all the build files
for file in dist/*.js; do
  terser "$file" --compress --mangle --output "${file%.js}.js"
done
