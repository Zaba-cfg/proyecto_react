const products = [
  {
    id: "1",
    name: "Procesador Intel Core i5 10400F 4.3GHz Turbo 1200 Comet Lake",
    price: 72000,
    category: "procesadores",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18900_Procesador_Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake_e07a1d28-med.jpg",
    stock: 19,
    description: "Procesador de Intel.",
  },
  {
    id: "2",
    name: "Procesador AMD Ryzen 5 5600 4.4GHz Turbo + Wraith Stealth Cooler",
    price: 106500,
    category: "procesadores",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31686_Procesador_AMD_Ryzen_5_5600_4.4GHz_Turbo___Wraith_Stealth_Cooler_4f696861-med.jpg",
    stock: 13,
    description: "Procesador de AMD.",
  },
  {
    id: "3",
    name: "Procesador Intel Core i3 10100F 4.3GHz Turbo Socket 1200 Comet Lake",
    price: 31299,
    category: "procesadores",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23223_Procesador_Intel_Core_i3_10100F_4.3GHz_Turbo_Socket_1200_Comet_Lake_6ea64940-med.jpg",
    stock: 15,
    description: "Procesador de Intel.",
  },
  {
    id: "4",
    name: "Mother ASUS TUF B450M-PLUS II AM4",
    price: 50550,
    category: "motherboards",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21972_Mother_ASUS_TUF_B450M-PLUS_II_AM4_f445a9d2-med.jpg",
    stock: 10,
    description: "Placa madre de ASUS.",
  },
  {
    id: "5",
    name: "Mother MSI X570-A PRO AM4",
    price: 75350,
    category: "motherboards",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15692_Mother_MSI_X570-A_PRO_AM4_bbf981bd-med.jpg",
    stock: 11,
    description: "Placa madre de MSI.",
  },
  {
    id: "6",
    name: "Mother ASUS ROG STRIX B550-A Gaming AM4",
    price: 102650,
    category: "motherboards",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25162_Mother_ASUS_ROG_STRIX_B550-A_Gaming_AM4_92d1ac66-med.jpg",
    stock: 7,
    description: "Placa madre de ASUS.",
  },
  {
    id: "7",
    name: "Placa de Video XFX Radeon RX 6500 XT Black 4GB GDDR6 Speedster QICK210",
    price: 99700,
    category: "placas de video",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30405_Placa_de_Video_XFX_Radeon_RX_6500_XT_Black_4GB_GDDR6_Speedster_QICK210_f534d98b-med.jpg",
    stock: 3,
    description: "Placa de video de AMD.",
  },
  {
    id: "8",
    name: "Placa de Video XFX Radeon RX 6600 XT 8GB GDDR6 SPEEDSTER SWFT210",
    price: 170850,
    category: "placas de video",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28094_Placa_de_Video_XFX_Radeon_RX_6600_XT_8GB_GDDR6_SPEEDSTER_SWFT210_d4facb91-med.jpg",
    stock: 5,
    description: "Placa de video de AMD.",
  },
  {
    id: "9",
    name: "Placa de Video XFX Radeon RX 6750 XT ULTRA 12GB GDDR6 Speedster",
    price: 239750,
    category: "placas de video",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34294_Placa_de_Video_XFX_Radeon_RX_6750_XT_ULTRA_12GB_GDDR6_Speedster_33c89c63-med.jpg",
    stock: 4,
    description: "Placa de video de AMD.",
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductsId = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId))
    }, 500)
  })
}

export const getProductsCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory))
    }, 500)
  })
}
