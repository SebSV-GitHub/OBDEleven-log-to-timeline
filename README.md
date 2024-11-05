# OBDEleven Log to Timeline 🚗📝

A simple script that converts OBDEleven car diagnostic logs into a readable timeline format.

## Table of Contents 📋

- [OBDEleven Log to Timeline 🚗📝](#obdeleven-log-to-timeline-)
  - [Table of Contents 📋](#table-of-contents-)
  - [About ℹ️](#about-ℹ️)
  - [Features ✨](#features-)
  - [Installation 🛠️](#installation-️)
  - [Usage 🚀](#usage-)
  - [Contributing 🤝](#contributing-)
  - [License 📄](#license-)

## About ℹ️

`OBDEleven Log to Timeline` is a tool designed to help car enthusiasts and mechanics convert raw OBDEleven logs into an easy-to-read timeline. This script provides better insights into vehicle diagnostics by arranging log entries chronologically.

OBDEleven is a popular tool for car diagnostics, but the logs it generates can be difficult to interpret without some processing. This script solves that problem by transforming the log data into a structured timeline, allowing for a clearer understanding of the sequence of events and any anomalies.

## Features ✨

- 🛠️ Parse OBDEleven logs.
- 📊 Convert parsed logs into a readable timeline.
- 💾 Output timeline as text or CSV for easier analysis.

## Installation 🛠️

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SebSV-GitHub/OBDEleven-log-to-timeline.git
   cd OBDEleven-log-to-timeline
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Usage 🚀

> [!IMPORTANT]
> Check the configuration file in `config/default.json`. All the important information about handling the input and output files is in that file; modify it if needed.

1. **Prepare Your Log File** 📄
   Ensure that you have an OBDEleven log file saved in `.txt` format.

2. **Run the Script** 🖥️
   Run the script, specifying the path to your log file:

   ```bash
   npm start
   ```

3. **Output** 📈
   The script will generate a timeline that is saved to an output file.

## Contributing 🤝

Contributions are welcome! If you have suggestions for new features or improvements, please open an issue or create a pull request.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
