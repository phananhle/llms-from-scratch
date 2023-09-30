# Large Language Models from scratch

This repository contains the source code for a uniquely designed interactive webpage that allows you to watch the YouTube video [Large Language Models from Scratch](https://www.youtube.com/watch?v=lnA9DMvHtfI) in a new way: by scrolling through frames.

The website displays video frames and corresponding descriptions as you scroll down the page. It has been structured to improve user engagement and to make it easier to follow along with the content of the video.

## How to View the Webpage on Your Browser

1. First, clone the repository to your local machine using `git clone https://github.com/phananhle/llms-from-scratch.git`

2. Open the 'src' folder and double-click the 'index.html' file, which will open the webpage in your default web browser.

## Project Structure

This project has the following file and directory structure:

```
├── LICENSE
├── README.md
├── assets
│   └── material
│       ├── Large Language Models from scratch.mp4
│       └── Large Language Models from scratch_Transcript.rtf
└── src
    ├── algorithms
    │   ├── deleteduplicates.py
    │   └── renameandsort.py
    ├── images
    ├── index.html
    ├── script.js
    └── styles.css
```

- `LICENSE`: Contains the license information.
- `README.md`: This file.
- `assets`: Contains the materials used in the project, including the original video and transcript.
- `src`: This is the source code of the project.
  - `algorithms`: Contains Python scripts used in the processing of frames and generating descriptions.
  - `images`: This directory holds all images (frames from the video) used in the project.
  - `index.html`: The main HTML file.
  - `script.js`: The JavaScript file that handles scrolling and image transitions.
  - `styles.css`: The CSS file that styles the page according to specifications.

## Acknowledgments and Resources

The inspiration for this project is taken from the video "[Large Language Models from Scratch](https://www.youtube.com/watch?v=lnA9DMvHtfI)" by Steve Seitz on YouTube. A big thank you to Steve Seitz for providing such an insightful and meaningful lecture. This project aims to break down and present the content in a more interactive way.

All sources are cited to their respective authors and creators. If you find this project useful or inspiring, please feel free to fork, star, or contribute to this repository.