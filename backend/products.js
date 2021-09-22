const products = [
    {
        name: "MSI Gaming GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 Video Card RTX 3060 Ti Gaming X 8G LHR",
        price: 919.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-672-V02.jpg",
        type: "GPU",
        brand: "MSI",
        platform: "NVIDIA"
    },
    {
        name: "MSI GeForce GTX 1050 Ti 4GB GDDR5 PCI Express 3.0 x16 ATX Video Card GTX 1050 Ti 4GT OC",
        price: 279.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-055-08.jpg",
        type: "GPU",
        brand: "MSI",
        platform: "NVIDIA"
    },
    {
        name: "GIGABYTE GeForce GT 1030 2GB GDDR5 PCI Express 3.0 x16 Video Card GV-N1030OC-2GI",
        price: 89.14,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-004-Z01.jpg",
        type: "GPU",
        brand: "GIGABYTE",
        platform: "NVIDIA"
    },
    {
        name: "ASUS ROG STRIX Radeon RX 6700 XT OC Edition Gaming Graphics Card (AMD RDNA 2, PCIe 4.0, 12GB GDDR6, HDMI 2.1, DisplayPort 1.4a, Axial-tech Fan Design, 2.9-slot, Super Alloy Power II, GPU Tweak II) - ROG-STRIX-RX6700XT-O12G-GAMING",
        price: 1152.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-498-14.jpg",
        type: "GPU",
        brand: "AMD",
        platform: "NVIDIA"
    },
    {
        name: "Intel Core i9-11900K - Core i9 11th Gen Rocket Lake 8-Core 3.5 GHz LGA 1200 125W Intel UHD Graphics 750 Desktop Processor - BX8070811900K",
        price: 549.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-231-V04.jpg",
        type: "CPU",
        brand: "Intel",
        platform: "LGA 1200"
    },
    {
        name: "AMD Ryzen 7 5800X - Ryzen 7 5000 Series Vermeer (Zen 3) 8-Core 3.8 GHz Socket AM4 105W Desktop Processor - 100-100000063WOF",
        price: 399.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-665-V01.jpg",
        type: "CPU",
        brand: "AMD",
        platform: "AM4"
    },
    {
        name: "AMD Ryzen 5 5600X - Ryzen 5 5000 Series Vermeer (Zen 3) 6-Core 3.7 GHz Socket AM4 65W Desktop Processor - 100-100000065BOX",
        price: 272.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-666-V01.jpg",
        type: "CPU",
        brand: "AMD",
        platform: "AM4"
    },
    {
        name: "AMD Athlon 3000G Picasso (Zen+) 3.5GHz Dual-Core Unlocked OC AM4 Processor with Vega 3 Graphics",
        price: 81.89,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/AN0MS200611PyH1c.jpg",
        type: "CPU",
        brand: "AMD",
        platform: "AM4"
    },


    {
        name: "ASUS ROG STRIX B550-F GAMING AM4 AMD B550 SATA 6Gb/s ATX AMD Motherboard",
        price: 179.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-312-V03.jpg",
        type: "Motherboard",
        brand: "ASUS",
        platform: "AM4"
    },
    {
        name: "MSI MPG X570 GAMING EDGE WIFI Gaming Motherboard AMD AM4 SATA 6Gb/s M.2 USB 3.2 Gen 2 HDMI ATX",
        price: 189.98,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-144-261-V07.jpg",
        type: "Motherboard",
        brand: "MSI",
        platform: "AM4"
    },
    {
        name: "GIGABYTE Z590 AORUS ELITE AX LGA 1200 Intel Z590 ATX Motherboard with Triple M.2, PCIe 4.0, USB 3.2 Gen2X2 Type-C, Intel WIFI 6, 2.5GbE LAN",
        price: 239.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-145-263-V01.jpg",
        type: "Motherboard",
        brand: "GIGABYTE",
        platform: "LGA 1200"
    },
    {
        name: "ASUS Z590 WIFI GUNDAM EDITION LGA 1200 Intel Z590 SATA 6Gb/s ATX Intel Motherboard",
        price: 308.89,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-468-12.jpg",
        type: "Motherboard",
        brand: "ASUS",
        platform: "LGA 1200"
    },
    {
        name: "CORSAIR Vengeance RGB Pro 16GB (2 x 8GB) 288-Pin DDR4 DRAM DDR4 3200 (PC4 25600) Desktop Memory Model CMW16GX4M2C3200C16",
        price: 89.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-231-V04.jpg",
        type: "RAM",
        brand: "Corsair",
        platform: "DDR4"
    },
    {
        name: "G.SKILL TridentZ RGB Series 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Intel XMP 2.0 Desktop Memory Model F4-3200C16D-16GTZR",
        price: 86.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-232-476-S01.jpg",
        type: "RAM",
        brand: "G.Skill",
        platform: "DDR4"
    },
    {
        name: "AMD Ryzen 5 5600X - Ryzen 5 5000 Series Vermeer (Zen 3) 6-Core 3.7 GHz Socket AM4 65W Desktop Processor - 100-100000065BOX",
        price: 272.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-666-V01.jpg",
        type: "CPU",
        brand: "AMD",
        platform: "AM4"
    },
    {
        name: "AMD Athlon 3000G Picasso (Zen+) 3.5GHz Dual-Core Unlocked OC AM4 Processor with Vega 3 Graphics",
        price: 81.89,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/AN0MS200611PyH1c.jpg",
        type: "CPU",
        brand: "AMD",
        platform: "AM4"
    },
    {
        name: "CORSAIR RMx Series RM850x CP-9020180-NA 850W ATX12V / EPS12V 80 PLUS GOLD Certified Full Modular Power Supply",
        price: 129.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-234-V14.jpg",
        type: "PSU",
        brand: "Corsair",
        platform: "850W"
    },
    {
        name: "EVGA SuperNOVA 650 G3, 220-G3-0650-Y1, 80+ GOLD, 650W Fully Modular, EVGA ECO Mode with New HDB Fan, Includes FREE Power On Self Tester, Compact 150mm Size, Power Supply",
        price: 79.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/17-438-094-01.jpg",
        type: "PSU",
        brand: "EVGA",
        platform: "650W"
    }, 
    {
        name: "Fractal Design Meshify C Black ATX High-Airflow Compact Light Tint Tempered Glass Mid Tower Computer Case, FD-CA-MESH-C-BKO-TGL",
        price: 89.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-352-084-V01.jpg",
        type: "Case",
        brand: "Fractal Design",
        platform: "ATX"
    },
    {
        name: "NZXT H510 - Compact ATX Mid-Tower PC Gaming Case - Front I/O USB Type-C Port - Tempered Glass Side Panel - Cable Management System - Water-Cooling Ready - Steel Construction - White/Black, CA-H510B-W1",
        price: 73.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-146-317-V01.jpg",
        type: "Case",
        brand: "NZXT",
        platform: "ATX"
    },
    {
        name: "Corsair 5000D Airflow Tempered Glass Mid-Tower ATX PC Case, White, CC-9011211-WW",
        price: 164.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-139-162-V21.jpg",
        type: "Case",
        brand: "Corsair",
        platform: "ATX"
    },
    {
        name: "Montech AIR 100 LITE MICRO-ATX Tower with Two Silent Fans Pre Installed, Ultra-Minimal Design, Fine Mesh Front Panel, High Airflow, Unique Side Swivel Tempered Glass, Dust Protection, Black",
        price: 59.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/AK91S210615W8kqK.jpg",
        type: "Case",
        brand: "Montech",
        platform: "Micro-ATX"
    },
    {
        name: "DeepCool MACUBE 110 Micro ATX Case with Full-size Magnetic Tempered Glass Removable HDD Cage and Built-in Graphics Card Holder - Black",
        price: 58.99,
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/11-853-088-01.jpg",
        type: "Case",
        brand: "DeepCool",
        platform: "Micro-ATX"
    }
]