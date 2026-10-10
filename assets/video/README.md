# Project videos

Screen recordings shown in the **Selected work** cards on the home page.
Drop them here with exactly these names, plus a first-frame poster in `posters/<name>.webp` (shown while the video loads):

| File            | Project             |
| --------------- | ------------------- |
| `sarle.mp4`     | SARLE               |
| `queen.mp4`     | QUEEN OF THE BALTIC |
| `ameztrans.mp4` | A-MEZTRANS          |
| `antarra.mp4`   | BLACK ANTARRA       |

Recommended: 720p, no audio, ~2–3 MB each, e.g.

```sh
ffmpeg -i input.mov -vf scale=1280:-2 -an -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart sarle.mp4
ffmpeg -ss 1 -i sarle.mp4 -frames:v 1 -c:v libwebp -quality 78 posters/sarle.webp
```
