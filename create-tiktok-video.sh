#!/bin/bash
set -e

FONT="/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

# Create audio file
ffmpeg -y -f lavfi -i "sine=frequency=130:duration=15" -c:a aac -b:a 128k /tmp/beat.aac

# Generate video
ffmpeg -y -loop 1 -i public/pomelli_creative_image_9_16_1012.png -i /tmp/beat.aac -t 15 \
  -filter_complex "\
    [0:v]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,\
    drawbox=y=0:h=200:color=black@0.65:t=fill,\
    drawbox=y=ih-340:h=340:color=black@0.75:t=fill,\
    drawtext=fontfile=${FONT}:text='URBAN THREAD':fontcolor=white:fontsize=42:x=(w-text_w)/2:y=50,\
    drawtext=fontfile=${FONT}:text='KARACHI STREETWEAR':fontcolor='#ff6b00':fontsize=20:x=(w-text_w)/2:y=110,\
    drawtext=fontfile=${FONT}:text='STOP BUYING THIN HOODIES':fontcolor='#ffffff':fontsize=36:x=(w-text_w)/2:y=h-280:enable='between(t,0,3.5)',\
    drawtext=fontfile=${FONT}:text='Most streetwear feels flimsy and sags':fontcolor='#94a3b8':fontsize=20:x=(w-text_w)/2:y=h-220:enable='between(t,0,3.5)',\
    drawtext=fontfile=${FONT}:text='FEEL THE WEIGHTY HOOD':fontcolor='#ff6b00':fontsize=36:x=(w-text_w)/2:y=h-280:enable='between(t,3.5,8)',\
    drawtext=fontfile=${FONT}:text='Durable Weave · Soft Inside · Heavy Drape':fontcolor='#ffffff':fontsize=22:x=(w-text_w)/2:y=h-220:enable='between(t,3.5,8)',\
    drawtext=fontfile=${FONT}:text='PKR 4,500* — RELAXED CUT':fontcolor='#38bdf8':fontsize=26:x=(w-text_w)/2:y=h-165:enable='between(t,3.5,8)',\
    drawtext=fontfile=${FONT}:text='BUILT FOR EVERYDAY WEAR':fontcolor='#ffffff':fontsize=36:x=(w-text_w)/2:y=h-280:enable='between(t,8,12)',\
    drawtext=fontfile=${FONT}:text='Drop-Shoulder Cut That Holds Its Shape':fontcolor='#94a3b8':fontsize=22:x=(w-text_w)/2:y=h-220:enable='between(t,8,12)',\
    drawtext=fontfile=${FONT}:text='Oversized Tees PKR 2,800 · Hoodies PKR 4,500':fontcolor='#ff6b00':fontsize=22:x=(w-text_w)/2:y=h-165:enable='between(t,8,12)',\
    drawtext=fontfile=${FONT}:text='CASH ON DELIVERY (COD)':fontcolor='#22c55e':fontsize=36:x=(w-text_w)/2:y=h-280:enable='gte(t,12)',\
    drawtext=fontfile=${FONT}:text='Across Pakistan · Pay at Doorstep':fontcolor='#ffffff':fontsize=22:x=(w-text_w)/2:y=h-220:enable='gte(t,12)',\
    drawtext=fontfile=${FONT}:text='ORDER ONLINE IN 30 SECONDS':fontcolor='#ff6b00':fontsize=24:x=(w-text_w)/2:y=h-165:enable='gte(t,12)'\
    [v]" \
  -map "[v]" -map 1:a -c:v libx264 -preset fast -pix_fmt yuv420p -c:a aac -shortest public/urban_thread_tiktok_creative.mp4

echo "DONE"
