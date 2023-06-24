-- Crear la tabla "productos"

CREATE TABLE
    productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL,
        descripcion VARCHAR(255) NOT NULL,
        imagen VARCHAR(255) NOT NULL
    );

INSERT INTO
    productos (
        nombre,
        precio,
        stock,
        descripcion,
        imagen
    )
VALUES (
        'Laptop HP',
        899.99,
        20,
        'Laptop HP con procesador Intel Core i5 y 8GB de RAM',
        'laptop_hp.jpg'
    ), (
        'PC de Escritorio',
        1299.99,
        10,
        'PC de escritorio con procesador AMD Ryzen 7 y 16GB de RAM',
        'pc_escritorio.jpg'
    ), (
        'Monitor Samsung',
        249.99,
        30,
        'Monitor Samsung de 27 pulgadas con resolución Full HD',
        'monitor_samsung.jpg'
    ), (
        'Teclado Mecánico',
        99.99,
        50,
        'Teclado mecánico para juegos con retroiluminación RGB',
        'teclado_mecanico.jpg'
    ), (
        'Mouse Inalámbrico',
        29.99,
        100,
        'Mouse inalámbrico ergonómico con sensor óptico de alta precisión',
        'mouse_inalambrico.jpg'
    ), (
        'Impresora Multifuncional',
        179.99,
        15,
        'Impresora multifuncional de tinta con escáner y copiadora',
        'impresora.jpg'
    ), (
        'Disco Duro Externo',
        129.99,
        25,
        'Disco duro externo de 1TB con conexión USB 3.0',
        'disco_duro.jpg'
    ), (
        'Tarjeta Gráfica NVIDIA',
        499.99,
        5,
        'Tarjeta gráfica NVIDIA GeForce RTX 3070',
        'tarjeta_grafica.jpg'
    ), (
        'Router Wi-Fi',
        79.99,
        40,
        'Router Wi-Fi de doble banda con velocidades de hasta 1200 Mbps',
        'router_wifi.jpg'
    ), (
        'Altavoces Bluetooth',
        69.99,
        20,
        'Altavoces Bluetooth inalámbricos con sonido estéreo de alta calidad',
        'altavoces_bluetooth.jpg'
    ), (
        'Laptop Dell',
        1099.99,
        15,
        'Laptop Dell con procesador Intel Core i7 y 16GB de RAM',
        'laptop_dell.jpg'
    ), (
        'MacBook Pro',
        1899.99,
        8,
        'MacBook Pro de Apple con procesador M1 y 16GB de RAM',
        'macbook_pro.jpg'
    ), (
        'Monitor LG Ultrawide',
        349.99,
        25,
        'Monitor LG Ultrawide de 34 pulgadas con resolución QHD',
        'monitor_lg.jpg'
    ), (
        'Teclado Retroiluminado',
        79.99,
        30,
        'Teclado mecánico retroiluminado con teclas programables',
        'teclado_retroiluminado.jpg'
    ), (
        'Mouse Gamer',
        49.99,
        50,
        'Mouse gamer con sensor óptico de alta precisión y botones programables',
        'mouse_gamer.jpg'
    ), (
        'Impresora láser',
        299.99,
        12,
        'Impresora láser monocromática de alta velocidad',
        'impresora_laser.jpg'
    ), (
        'SSD Samsung',
        149.99,
        40,
        'SSD Samsung de 1TB con interfaz NVMe y velocidad de lectura/escritura rápida',
        'ssd_samsung.jpg'
    ), (
        'Tarjeta Gráfica AMD',
        399.99,
        7,
        'Tarjeta gráfica AMD Radeon RX 6700 XT',
        'tarjeta_grafica_amd.jpg'
    ), (
        'Switch Ethernet',
        59.99,
        35,
        'Switch Ethernet de 8 puertos para redes domésticas o de oficina',
        'switch_ethernet.jpg'
    ), (
        'Auriculares Inalámbricos',
        129.99,
        18,
        'Auriculares inalámbricos con cancelación de ruido y sonido envolvente',
        'auriculares_inalambricos.jpg'
    ), (
        'Laptop Lenovo',
        799.99,
        20,
        'Laptop Lenovo con procesador AMD Ryzen 5 y 12GB de RAM',
        'laptop_lenovo.jpg'
    ), (
        'iMac',
        1999.99,
        10,
        'iMac de Apple con pantalla Retina 5K de 27 pulgadas y procesador Intel Core i5',
        'imac.jpg'
    ), (
        'Monitor ASUS',
        299.99,
        30,
        'Monitor ASUS de 27 pulgadas con resolución WQHD y tecnología de sincronización adaptativa',
        'monitor_asus.jpg'
    ), (
        'Teclado Inalámbrico',
        59.99,
        50,
        'Teclado inalámbrico delgado y compacto con conexión Bluetooth',
        'teclado_inalambrico.jpg'
    ), (
        'Mouse Ergonómico',
        39.99,
        100,
        'Mouse ergonómico con diseño cómodo y ajustable',
        'mouse_ergonomico.jpg'
    ), (
        'Impresora Todo en Uno',
        149.99,
        15,
        'Impresora todo en uno con impresión, escaneo y copiado',
        'impresora_todo_en_uno.jpg'
    ), (
        'Disco Duro SSD Externo',
        199.99,
        25,
        'Disco duro SSD externo de 2TB con conexión USB-C',
        'disco_duro_ssd_externo.jpg'
    ), (
        'Tarjeta Gráfica MSI',
        599.99,
        5,
        'Tarjeta gráfica MSI GeForce RTX 3080 con 10GB de memoria GDDR6X',
        'tarjeta_grafica_msi.jpg'
    ), (
        'Router Mesh',
        129.99,
        40,
        'Router Mesh de alta velocidad con cobertura ampliada y gestión de red inteligente',
        'router_mesh.jpg'
    ), (
        'Altavoces 2.1',
        89.99,
        20,
        'Altavoces 2.1 con subwoofer para una experiencia de sonido envolvente',
        'altavoces_2.1.jpg'
    );