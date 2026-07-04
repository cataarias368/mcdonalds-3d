#!/bin/bash
# Versión paralela: genera 4 imágenes a la vez.
# Saltea las que ya existen.

OUT_DIR="/home/z/my-project/pwa-demo-mcdonalds/public/products"
mkdir -p "$OUT_DIR"

STYLE="professional fast food product photography, appetizing, on dark slate background, studio lighting, soft shadows, top-down 45 degree angle, high detail, photorealistic, commercial advertising style"

PRODUCTS=(
  "big-mac|Big Mac hamburger, double beef patty, sesame seed bun, lettuce, cheese, special sauce, McDonald's style"
  "quarter-pounder|Quarter Pounder hamburger, large beef patty, melted cheddar cheese, onions, pickles, McDonald's style"
  "cheeseburger|Classic cheeseburger, single beef patty, melted cheese, onions, pickles, ketchup, mustard, soft bun"
  "mcchicken|McChicken sandwich, crispy chicken patty, lettuce, mayonnaise, soft bun, McDonald's style"
  "mcnuggets|Chicken McNuggets, 6 crispy golden nuggets in a box with dipping sauce, McDonald's style"
  "filet-o-fish|Filet-O-Fish sandwich, breaded fish patty, half slice of cheese, tartar sauce, steamed bun"
  "fries|McDonald's french fries, golden crispy fries in red fry carton, McDonald's style"
  "cola|Coca-Cola in McDonald's paper cup with ice and straw, condensation droplets, red cup"
  "latte|McCafe latte coffee in white ceramic cup with latte art, foam on top, warm"
  "vanilla-cone|McDonald's vanilla soft serve ice cream cone, classic swirl, golden waffle cone"
  "sundae-chocolate|Hot fudge chocolate sundae, vanilla soft serve with chocolate sauce, clear cup"
  "apple-pie|McDonald's apple pie, golden crispy rectangular pastry, sprinkled with sugar"
  "egg-mcmuffin|Egg McMuffin breakfast sandwich, English muffin, egg, cheese, Canadian bacon, McDonald's style"
  "hotcakes|McDonald's hotcakes, stack of three golden pancakes with butter and maple syrup, breakfast"
  "mcflurry|McFlurry with Oreo cookies, vanilla soft serve with crushed Oreo pieces, clear cup with spoon"
)

# Filtrar las que faltan
PENDING=()
for entry in "${PRODUCTS[@]}"; do
  name="${entry%%|*}"
  outfile="$OUT_DIR/${name}.png"
  if [ -f "$outfile" ] && [ -s "$outfile" ]; then
    echo "SKIP $name (ya existe)"
  else
    PENDING+=("$entry")
  fi
done

echo ""
echo "Pendientes: ${#PENDING[@]}"
echo ""

# Generar de a 4 en paralelo
gen_one() {
  local entry="$1"
  local name="${entry%%|*}"
  local prompt="${entry##*|}, $STYLE"
  local outfile="$OUT_DIR/${name}.png"
  local log="/tmp/gen-${name}.log"
  
  if z-ai image -p "$prompt" -o "$outfile" -s 1024x1024 > "$log" 2>&1; then
    if [ -f "$outfile" ] && [ -s "$outfile" ]; then
      echo "OK   $name"
      return 0
    fi
  fi
  echo "FAIL $name"
  return 1
}

export -f gen_one
export OUT_DIR STYLE

i=0
while [ $i -lt ${#PENDING[@]} ]; do
  batch=()
  for j in 0 1 2 3; do
    idx=$((i + j))
    if [ $idx -lt ${#PENDING[@]} ]; then
      batch+=("${PENDING[$idx]}")
    fi
  done
  
  echo "--- Lote (desde $i) ---"
  pids=()
  for entry in "${batch[@]}"; do
    gen_one "$entry" &
    pids+=($!)
  done
  
  # Esperar a que termine el lote
  for pid in "${pids[@]}"; do
    wait "$pid"
  done
  
  i=$((i + 4))
done

echo ""
echo "=== RESULTADO FINAL ==="
ls -la "$OUT_DIR" | tail -n +2
echo ""
COUNT=$(ls "$OUT_DIR"/*.png 2>/dev/null | wc -l)
echo "Total imágenes: $COUNT / ${#PRODUCTS[@]}"
