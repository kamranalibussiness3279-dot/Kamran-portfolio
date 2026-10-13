#!/bin/bash
set -e

FONT="/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

# Create 11s audio beat
ffmpeg -y -f lavfi -i "sine=frequency=130:duration=11" -c:a aac -b:a 128k /tmp/beat11.aac

# Generate 11s video matching exact storyboard
ffmpeg -y -loop 1 -i public/pomelli_creative_image_9_16_1012.png -i /tmp/beat11.aac -t 11 \
  -filter_complex "\
    [0:v]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,\
    drawbox=y=0:h=180:color=black@0.65:t=fill,\
    drawbox=y=ih-340:h=340:color=black@0.75:t=fill,\
    drawtext=fontfile=${FONT}:text='URBAN THREAD':fontcolor=white:fontsize=42:x=(w-text_w)/2:y=45,\
    drawtext=fontfile=${FONT}:text='KARACHI STREETWEAR':fontcolor='#ff6b00':fontsize=18:x=(w-text_w)/2:y=105,\
    drawtext=fontfile=${FONT}:text='STOP BUYING THIN, LOW-QUALITY HOODIES':fontcolor='#ffffff':fontsize=30:x=(w-text_w)/2:y=h-280:enable='between(t,0,4)',\
    drawtext=fontfile=${FONT}:text='Hoodie on a hanger · Pulls off':fontcolor='#94a3b8':fontsize=20:x=(w-text_w)/2:y=h-220:enable='between(t,0,4)',\
    drawtext=fontfile=${FONT}:text='HEAVY FABRIC · SOFT INSIDE':fontcolor='#ff6b00':fontsize=34:x=(w-text_w)/2:y=h-280:enable='between(t,4,6)',\
    drawtext=fontfile=${FONT}:text='Holds its shape wash after wash':fontcolor='#ffffff':fontsize=22:x=(w-text_w)/2:y=h-220:enable='between(t,4,6)',\
    drawtext=fontfile=${FONT}:text='ONLY PKR 4,500*':fontcolor='#38bdf8':fontsize=36:x=(w-text_w)/2:y=h-280:enable='between(t,6,7)',\
    drawtext=fontfile=${FONT}:text='Cash on Delivery across Pakistan':fontcolor='#22c55e':fontsize=24:x=(w-text_w)/2:y=h-220:enable='between(t,6,7)',\
    drawtext=fontfile=${FONT}:text='ORDER ONLINE IN 30 SECONDS':fontcolor='#ff6b00':fontsize=32:x=(w-text_w)/2:y=h-280:enable='gte(t,7)',\
    drawtext=fontfile=${FONT}:text='Pay cash at your door':fontcolor='#ffffff':fontsize=24:x=(w-text_w)/2:y=h-220:enable='gte(t,7)'\
    [v]" \
  -map "[v]" -map 1:a -c:v libx264 -preset fast -pix_fmt yuv420p -c:a aac -shortest public/Urban-Thread-TikTok.mp4

# Also copy/link urban_thread_tiktok_creative.mp4 so both work
cp public/Urban-Thread-TikTok.mp4 public/urban_thread_tiktok_creative.mp4

# Generate poster frame at 0.5s
ffmpeg -y -ss 00:00:01 -i public/Urban-Thread-TikTok.mp4 -vframes 1 -q:v 2 public/Urban-Thread-poster.jpg

echo "Video and Poster generated successfully!"
