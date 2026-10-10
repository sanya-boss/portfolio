# Project videos

Screen recordings shown in the **Selected work** cards on the home page.
Drop them here with exactly these names — until then the cards show a hatched placeholder:

| File            | Project             |
| --------------- | ------------------- |
| `sarle.mp4`     | SARLE               |
| `queen.mp4`     | QUEEN OF THE BALTIC |
| `ameztrans.mp4` | A-MEZTRANS          |
| `antarra.mp4`   | BLACK ANTARRA       |

Recommended: 720p, no audio, ~2–3 MB each, e.g.

```sh
ffmpeg -i input.mov -vf scale=-2:720 -an -c:v libx264 -crf 28 -preset slow -movflags +faststart sarle.mp4
```
