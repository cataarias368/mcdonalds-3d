#!/bin/bash
# ============================================================
# gen-product-images.sh
# Genera imágenes reales (IA) para los productos del menú
# de McDonald's. Las guarda en public/products/ como PNG
# cuadrado 1024x1024 (ideal para thumbnails de comida).
#
# Estilo: foto publicitaria de comida, fondo neutro oscuro,
# iluminación de estudio, look apetitoso. Coherente con
# la paleta McDonald's (rojo/amarillo).
# ============================================================

set -u
OUT_DIR="/home/z/my-project/pwa-demo-mcdonalds/public/products"
mkdir -p "$OUT_DIR"

# Estilo común para todas las fotos
STYLE="professional fast food product photography, appetizing, on dark slate background, studio lighting, soft shadows, top-down 45 degree angle, high detail, photorealistic, commercial advertising style"

# Lista de productos: nombreArchivo|prompt
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

TOTAL=${#PRODUCTS[@]}
COUNT=0
SUCCESS=0
FAIL=0

for entry in "${PRODUCTS[@]}"; do
  COUNT=$((COUNT + 1))
  name="${entry%%|*}"
  prompt="${entry##*|}, ${STYLE}"
  outfile="$OUT_DIR/${name}.png"

  if [ -f "$outfile" ] && [ -s "$outfile" ]; then
    echo "[$COUNT/$TOTAL] SKIP $name (ya existe)"
    SUCCESS=$((SUCCESS + 1))
    continue
  fi

  echo "[$COUNT/$TOTAL] GEN $name ..."
  if z-ai image -p "$prompt" -o "$outfile" -s 1024x1024 > "/tmp/gen-${name}.log" 2>&1; then
    if [ -f "$outfile" ] && [ -s "$outfile" ]; then
      SIZE=$(stat -c%s "$outfile" 2>/dev/null || echo "?")
      echo "   OK  ${name}.png (${SIZE} bytes)"
      SUCCESS=$((SUCCESS + 1))
    else
      echo "   FAIL $name (archivo no creado)"
      cat "/tmp/gen-${name}.log" | tail -3
      FAIL=$((FAIL + 1))
    fi
  else
    echo "   FAIL $name (CLI error)"
    cat "/tmp/gen-${name}.log" | tail -3
    FAIL=$((FAIL + 1))
  fi
done

echo ""
echo "========================================="
echo "Listo: $SUCCESS OK, $FAIL fallos de $TOTAL"
echo "Output: $OUT_DIR"
ls -la "$OUT_DIR" | tail -n +2
