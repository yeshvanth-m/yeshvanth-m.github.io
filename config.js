/* ============================================================
   ✏️  YOUR PORTFOLIO CONTENT — only file you ever need to edit
============================================================ */

const CONFIG = {

  /* ── IDENTITY ── */
  name:        "Yeshvanth Muniraj",
  navBrand:    "$ digital-design-engineer.dev",
  heroTag:     "VLSI · Embedded Systems · RTL Design",
  heroHeading: `Designing silicon that powers the <em>real world.</em>`,
  heroDesc:    "I'm a hardware engineer specialising in digital VLSI design and embedded firmware — working at the intersection of transistors, timing constraints, and real-time software.",

  /* ── HERO CODE SNIPPETS ──
     Use these span classes for syntax highlighting:
       c-kw  = keyword (blue)    c-type = type (teal)
       c-fn  = function (violet) c-num  = number (amber)
       c-cm  = comment (grey)
  ── */
  chip: {
    filename: "top_module.v",
    process:  "TSMC 40nm",
    code: `<span class="c-cm">// 32-bit RISC-V core</span>
<span class="c-kw">module</span> <span class="c-fn">cpu_core</span> ( <br>
  <span class="c-kw">input</span>  <span class="c-type">wire</span>        clk, <br>
  <span class="c-kw">input</span>  <span class="c-type">wire</span>        rst_n, <br>
  <span class="c-kw">input</span>  <span class="c-type">wire</span> [<span class="c-num">31</span>:<span class="c-num">0</span>] instr, <br>
  <span class="c-kw">output</span> <span class="c-type">reg</span>  [<span class="c-num">31</span>:<span class="c-num">0</span>] pc); <br>
  <span class="c-cm">// IF → ID → EX → MEM → WB</span> <br>
  <span class="c-kw">always</span> @(<span class="c-kw">posedge</span> clk) <br>
    <span class="c-kw">if</span> (!rst_n) pc &lt;= <span class="c-num">32'h0</span>; <br>
    <span class="c-kw">else</span> pc <= pc + 4; <br>
<span class="c-kw">endmodule</span>`,
  },

  mainc: {
    filename: "main.c",
    target:   "STM32H7",
    code: `<span class="c-cm">// Bare-metal firmware</span> <br>
<span class="c-kw">#include</span> <span class="c-type">"stm32h7xx.h"</span>
<span class="c-kw">#include</span> <span class="c-type">"can_driver.h"</span>

<span class="c-type">volatile uint32_t</span> tick = <span class="c-num">0</span>;

<span class="c-type">void</span> <span class="c-fn">SysTick_Handler</span>(<span class="c-type">void</span>) {
  tick++;
}
<br>
<span class="c-type">int</span> <span class="c-fn">main</span>(<span class="c-type">void</span>) {
  <span class="c-fn">HAL_Init</span>();
  <span class="c-fn">CAN_Init</span>(&amp;canConfig); <br>
  <span class="c-kw">while</span> (<span class="c-num">1</span>) {
    <span class="c-fn">CAN_Transmit</span>(&amp;frame);
  }
}`,
  },

  /* ── DEBUG TERMINAL LINES ──
     type: "prompt" | "output" | "ok" | "warn" | "error"
  ── */
  debugLines: [
    { type: "prompt", text: "(gdb) target remote :3333"              },
    { type: "output", text: "Remote debugging using :3333"           },
    { type: "ok",     text: "0x08001234 in Reset_Handler"            },
    { type: "prompt", text: "(gdb) break main"                       },
    { type: "ok",     text: "Breakpoint 1 at 0x08001260: main.c:14"  },
    { type: "prompt", text: "(gdb) continue █"                       },
  ],

  /* ── HERO STATS — add or remove objects freely ── */
  stats: [
    { value: "40nm", label: "Min Process" },
    { value: "3+",  label: "Tape-outs"    },
    { value: "5+",   label: "Yrs Exp"     },
  ],

  /* ── ABOUT ── */
  aboutHeading: `From gate-level to <em>bare-metal.</em>`,
  aboutParagraphs: [
    `Hello! I'm <strong>Yeshvanth Muniraj</strong>, a VLSI and Embedded Systems Engineer with a passion for the full hardware stack — from RTL design and physical implementation to bare-metal firmware and RTOS-based applications.`,
    `Currently a digital design engineer at <strong>Analog Devices Inc.</strong>, working on low-power ASICs & SoCs for automotive applications. I hold an M.Tech in VLSI Design from <strong>BITS Pilani</strong>.`,
    `I care deeply about clean RTL, robust timing closure, and firmware that is every bit as precise as the silicon it runs on.`,
  ],

  /* ── SPEC TABLE — rows in the about section ── */
  specs: [
    { key: "HDL",        value: "Verilog, SystemVerilog"           },
    { key: "Firmware",   value: "C, C++, Python, Assembly"         },
    { key: "EDA Tools",  value: "Cadence Xcelium, Genus, Innovus"  },
    { key: "Simulation", value: "VCS, ModelSim, MATLAB/Simulink"   },
    { key: "Protocols",  value: "I²C, SPI, UART, CAN, AXI4, APB"   },
    { key: "RTOS",       value: "FreeRTOS, Zephyr"                 },
    { key: "Platforms",  value: "ARM Cortex-M, AMD SoC FPGAs"     },
  ],

  /* ── SKILL DOMAINS ──
     color: "tb" (blue) | "tt" (teal) | "ta" (amber) | "tv" (violet)
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
      tags:  ["I²C", "SPI", "UART", "CAN", "AXI4", "APB"],
    },
    {
      title: "Hardware Platforms",
      color: "tc",
      tags:  ["AMD Spartan-7", "AMD Artix-7", "AMD Zynq-7000", "AMD Zynq Ultrascale+ MPSoC", " STM32F746-Discovery", "STM32F4 Series"],
    },
  ],

  /* ── PROJECTS ──
     Set featured: true on ONE card to span 2 columns.
     links: [] means no links shown.
  ── */
  githubUrl: "https://github.com/yeshvanth-m",
  projects: [
    {
      featured: true,
      category: "Digital VLSI · FPGA  · Embedded",
      name: "CNN HW Accelerator for Handwritten Digit Recognition",
      desc: "Custom CNN accelerator in Verilog for MNIST digit recognition. Implemented on AMD Zynq-7000 FPGA with an ARM Cortex-A9 host. DMA driver implemented in Pynq Python API for data transfer and control.",
      tags:  ["Verilog", "FPGA", "CNN", "MNIST"],
      links: [{  label: "Blog ↗", url: "https://community.element14.com/challenges-projects/design-challenges/eye-on-intelligence-challenge/b/blog/posts/final-blog-handwritten-recognition-with-custom-cnn-hw-accelerator", label: "Github ↗", url: "https://github.com/yeshvanth-m/CNN-Handwritten-Digit-MNIST/tree/main" }],
    },
    {
      category: "Digital VLSI · FPGA",
      name: "ARM Cortex-M Based Microcontroller on FPGA",
      desc: "A fully functional, ARM Cortex-M Microcontroller integrated and verified on AMD Spartan-7 FPGA. Synthesized and Implemented in Vivado.",
      tags:  ["Vivado", "AXI4-Lite", "AMD Spartan-7"],
      links: [{ label: "YouTube ↗", url: "https://youtu.be/AsovjL7FLLo?si=WcXaA02M4VlKGNAY" }],
    },
    {
      category: "Cryptography · FPGA",
      name: "AES-128 Hardware Accelerator",
      desc: "AES-128 core in Verilog on AMD Zynq Ultrascale+ MPSoC. Integrated as an AXI4-Lite peripheral and verified Vitis SDK. PL Fabric at 100 MHz.",
      tags:  ["Verilog", "Xilinx", "AXI4-Lite"],
      links: [{ label: "github ↗", url: "https://github.com/yeshvanth-m/AES-128" }],
    },
    {
      category: "FPGA · VGA",
      name: "Pong Game on FPGA with VGA Output",
      desc: "Implemented a classic Pong game on Cyclone-V FPGA with VGA output. Utilized Verilog for game logic and VGA controller.",
      tags:  ["Verilog", "FPGA", "VGA", "Game Design"],
      links: [{ label: "Blog ↗", url: "https://community.element14.com/challenges-projects/project14/digitalfever/b/blog/posts/prototyping-with-fpgas---final-project---pong-game" }],
    },
    {
      category: "SCPI · Instrumentation",
      name: "LiFi Audio Streaming with Red Pitaya",
      desc: "Modulate notes with python and transmit via laser. On the receiver side, photodiode captures light signals, demodulates them, and plays audio in real-time.",
      tags:  ["Python", "LiFi", "SCPI"],
      links: [{ label: "github ↗", url: "https://github.com/yeshvanth-m/Wireless-Audio-Transmission-using-Li-Fi" }],
    },
  ],

  /* ── EXPERIENCE ── */
  experience: [
    {
      period:  "2025 — Present",
      company: "Analog Devices Inc.",
      role:    "Digital Design Engineer",
      dept:    "Automotive Electrification · Bangalore, India",
      desc:    "Owned several digital blocks in BMICs and PMICs. Led the design and verification of datapath & control logic in BCD130nm. Collaborated with physical design teams to meet timing closure and power targets.",
      chips:   ["System Design", "SystemVerilog", "Verilog", "Xcelium", "UVM"],
    },
    {
      period:  "2022 — 2024",
      company: "Analog Devices Inc.",
      role:    "Embedded Software Engineer",
      dept:    "Automotive Electrification · Bangalore, India",
      desc:    "Re-architected firmware for fail-safe OTAP, Reduced power consumption by 25% via optimized sleep modes and peripheral management. Pre-silicon bring-up and debugging of SoC with HW-SW Co-Simulation.",
      chips:   ["C", "RTX5", "Cortex-M4/M33", "2.4GHz Radio", "Keil uVision", "Segger J-Link"],
    },
    {
      period:  "2022",
      company: "Analog Devices Inc.",
      role:    "Firmware Intern",
      dept:    "Automotive Electrification · Bangalore, India",
      desc:    "Designed, implemented and protoyped a hand-held sniffer device for propreitaty wireless protocol in C on an ARM Cortex-M4. Developed UI on STM32F746 Discovery with TouchGFX. Presented project to senior leadership and received full-time offer.",
      chips:   ["Product Development", "C++", "TouchGFX", "STM32F746", "ARM Cortex-M7"],
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
  email: "yeshvanthmuniraj123@gmail.com",
  socials: [
    { label: "GitHub",    url: "https://github.com/yeshvanth-m"           },
    { label: "LinkedIn",  url: "https://linkedin.com/in/yeshvanthm"      },
    { label: "YouTube",   url: "https://www.youtube.com/@ymlabs6983"      },
    { label: "Résumé ↓",  url: "/resume.pdf"                              },
  ],
};
