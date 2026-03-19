/* ============================================================
   ✏️  YOUR PORTFOLIO CONTENT — only file you ever need to edit
============================================================ */

const CONFIG = {

  /* ── IDENTITY ── */
  name:       "Your Name",
  navBrand:   "$ vlsi-engineer.dev",
  heroTag:    "VLSI · Embedded Systems · RTL Design",
  heroHeading: `Designing silicon that powers the <em>real world.</em>`,
  heroDesc:   "I'm a hardware engineer specialising in VLSI design and embedded firmware — working at the intersection of transistors, timing constraints, and real-time software.",

  /* ── HERO CODE SNIPPET ──
     Use these span classes for syntax highlighting:
       c-kw  = keyword (blue)    c-type = type (teal)
       c-fn  = function (violet) c-num  = number (amber)
       c-cm  = comment (grey)
  ── */
  chip: {
    filename: "top_module.v",
    process:  "TSMC 28nm",
    code: `<span class="c-cm">// 32-bit RISC-V processor core</span>
<span class="c-kw">module</span> <span class="c-fn">cpu_core</span> (
  <span class="c-kw">input</span>  <span class="c-type">wire</span>        clk,
  <span class="c-kw">input</span>  <span class="c-type">wire</span>        rst_n,
  <span class="c-kw">input</span>  <span class="c-type">wire</span> [<span class="c-num">31</span>:<span class="c-num">0</span>] instr,
  <span class="c-kw">output</span> <span class="c-type">reg</span>  [<span class="c-num">31</span>:<span class="c-num">0</span>] pc
);
  <span class="c-cm">// IF → ID → EX → MEM → WB</span>
  <span class="c-kw">always</span> @(<span class="c-kw">posedge</span> clk)
    <span class="c-kw">if</span> (!rst_n) pc &lt;= <span class="c-num">32'h0</span>;
<span class="c-kw">endmodule</span>`,
  },

  /* ── HERO STATS — add or remove objects freely ── */
  stats: [
    { value: "28nm", label: "Min Process" },
    { value: "12+",  label: "Tape-outs"   },
    { value: "5+",   label: "Yrs Exp"     },
  ],

  /* ── ABOUT ── */
  aboutHeading: `From gate-level to <em>bare-metal.</em>`,
  aboutParagraphs: [
    `Hello! I'm <strong>Your Name</strong>, a VLSI and Embedded Systems Engineer with a passion for the full hardware stack — from RTL design and physical implementation to bare-metal firmware and RTOS-based applications.`,
    `Currently a design engineer at <strong>Company Name</strong>, working on low-power SoC architecture and digital back-end flows. I hold an M.Tech in VLSI Design from <strong>University Name</strong>.`,
    `I care deeply about clean RTL, robust timing closure, and firmware that is every bit as precise as the silicon it runs on.`,
  ],

  /* ── SPEC TABLE — rows in the about section ── */
  specs: [
    { key: "HDL",        value: "Verilog, SystemVerilog, VHDL"     },
    { key: "Firmware",   value: "C, C++, Python, Assembly"         },
    { key: "EDA Tools",  value: "Cadence Genus, Innovus, Virtuoso" },
    { key: "Simulation", value: "VCS, ModelSim, MATLAB/Simulink"   },
    { key: "Protocols",  value: "I²C, SPI, UART, CAN, AXI4, APB"  },
    { key: "RTOS",       value: "FreeRTOS, Zephyr"                 },
    { key: "Platforms",  value: "STM32, ESP32, ARM Cortex-M"       },
  ],

  /* ── SKILL DOMAINS ──
     color options: "tb" (blue) | "tt" (teal) | "ta" (amber) | "tv" (violet)
  ── */
  skills: [
    {
      title: "RTL & Digital Design",
      color: "tb",
      tags:  ["Verilog", "SystemVerilog", "VHDL", "FSM Design", "Pipelining"],
    },
    {
      title: "Physical Design & Verification",
      color: "tt",
      tags:  ["Synthesis", "STA", "P&R", "DRC / LVS", "UVM", "Formal Verification"],
    },
    {
      title: "Embedded Firmware",
      color: "ta",
      tags:  ["C / C++", "FreeRTOS", "Zephyr", "ARM Cortex-M", "Bare-metal"],
    },
    {
      title: "Interfaces & Protocols",
      color: "tv",
      tags:  ["I²C", "SPI", "UART", "CAN", "AXI4", "APB", "USB"],
    },
  ],

  /* ── PROJECTS ──
     Set featured: true on ONE card to make it span 2 columns (the hero project).
     links: [] means no links shown.
  ── */
  githubUrl: "https://github.com/yourusername",
  projects: [
    {
      featured: true,
      category: "RTL · VLSI",
      name: "32-bit RISC-V RV32I Processor Core",
      desc: "A fully synthesisable, 5-stage pipelined RISC-V RV32I core in SystemVerilog with full hazard detection, forwarding, branch prediction, and AXI4-Lite memory interface. Synthesised on TSMC 28nm achieving 500 MHz at typical corner. Verified via UVM testbench at 98% functional coverage.",
      tags:  ["SystemVerilog", "UVM", "Cadence Genus", "AXI4", "TSMC 28nm"],
      links: [{ label: "paper ↗", url: "#" }, { label: "github ↗", url: "#" }],
    },
    {
      category: "Embedded",
      name: "FreeRTOS CAN Bus Datalogger",
      desc: "Multi-task FreeRTOS firmware for STM32H7 logging CAN frames to SD card at 1 Mbps, with UART CLI and real-time ID-mask filtering.",
      tags:  ["C", "FreeRTOS", "STM32", "CAN"],
      links: [{ label: "github ↗", url: "#" }],
    },
    {
      category: "Analog · VLSI",
      name: "Low-Power SAR ADC — 180nm CMOS",
      desc: "10-bit 1 MS/s successive-approximation ADC in TSMC 180nm. 420 µW at 1.8 V. Full schematic, layout, DRC and LVS verified in Cadence Virtuoso.",
      tags:  ["Cadence Virtuoso", "SPICE", "180nm"],
      links: [{ label: "paper ↗", url: "#" }],
    },
    {
      category: "FPGA",
      name: "AES-128 Hardware Accelerator",
      desc: "AES-128 core in Verilog on Xilinx Artix-7. 1.2 Gbps throughput, AXI4-Lite interface for SoC integration.",
      tags:  ["Verilog", "Xilinx", "AXI4-Lite"],
      links: [{ label: "github ↗", url: "#" }],
    },
    {
      category: "Embedded · IoT",
      name: "ESP32 BLE Sensor Gateway",
      desc: "Zephyr firmware for ESP32-S3 bridging BLE sensors to MQTT over Wi-Fi. OTA updates and runtime config via I²C EEPROM.",
      tags:  ["C", "Zephyr", "ESP32", "BLE / MQTT"],
      links: [{ label: "github ↗", url: "#" }],
    },
  ],

  /* ── EXPERIENCE ── */
  experience: [
    {
      period:  "2022 — Present",
      company: "Acme Semiconductors",
      role:    "Senior VLSI Design Engineer",
      dept:    "Digital Implementation · Chennai, India",
      desc:    "Led RTL-to-GDSII flow for a low-power IoT SoC on TSMC 28nm. Improved timing closure time by 35% through scripted constraint automation in Tcl. Mentored junior engineers on back-end flows and UVM methodology.",
      chips:   ["Cadence Innovus", "Genus", "Tempus STA", "SystemVerilog", "UVM"],
    },
    {
      period:  "2020 — 2022",
      company: "Embedded Tech Pvt. Ltd.",
      role:    "Embedded Firmware Engineer",
      dept:    "Firmware & BSP · Bangalore, India",
      desc:    "Developed BSP and application firmware for STM32-based industrial control boards. Ported FreeRTOS to two new platforms and reduced boot time by 40% through linker-script optimisation.",
      chips:   ["C", "FreeRTOS", "STM32", "CAN / SPI / I²C", "GDB / OpenOCD"],
    },
    {
      period:  "2019",
      company: "IIT Research Lab",
      role:    "Research Intern",
      dept:    "VLSI CAD Group",
      desc:    "Implemented a simulated-annealing floorplanner for mixed-signal SoCs in Python and benchmarked against industry tools on MCNC suites.",
      chips:   ["Python", "EDA Scripting", "Tcl"],
    },
  ],

  /* ── PUBLICATIONS ── */
  publications: [
    {
      title: "Low-Power 10-bit SAR ADC with Dynamic Comparator in 180nm CMOS",
      venue: "IEEE International Symposium on Circuits and Systems (ISCAS)",
      year:  "2023",
    },
    {
      title: "Timing Closure Optimisation in Deep-Sub-Micron Flows Using ML-Guided Buffering",
      venue: "VLSI Design Conference (VLSID)",
      year:  "2022",
    },
    {
      title: "Simulated-Annealing Based Floorplanner for Mixed-Signal SoCs",
      venue: "IEEE TENCON",
      year:  "2020",
    },
  ],

  /* ── CONTACT ── */
  contactDesc: "Whether it's a design review, a consulting engagement, or just a conversation about low-power design — feel free to reach out.",
  email: "hello@yourname.dev",
  socials: [
    { label: "GitHub",         url: "https://github.com/yourusername"  },
    { label: "LinkedIn",       url: "https://linkedin.com/in/yourname" },
    { label: "Google Scholar", url: "https://scholar.google.com"       },
    { label: "Résumé ↓",       url: "/resume.pdf"                      },
  ],
};
