const mongoose = require("mongoose");
const Product = require("../models/products.model");
// const hereMaps = require("../utils/hereMaps");

mongoose
  .connect("mongodb://127.0.0.1/3rik")
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

async function seedPlaces() {
  const product = [
    {
      title: "Jam Hujan Meteor",
      price: "2500000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Mengubah setiap detik menjadi pertunjukan cahaya gemerlap seperti hujan meteor di langit malam.",
    },
    {
      title: "Topi Antigravitasi",
      price: "650000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Topi futuristik dengan teknologi anti-gravitasi, membuatnya melayang beberapa sentimeter di atas kepala Anda.",
    },
    {
      title: "Pulpen Multidimensi",
      price: "50000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Pulpen yang menggambarkan gambar holografik tiga dimensi saat Anda menulis, membawa tulisan ke level baru.",
    },
    {
      title: "Sandal Berjalan Sendiri",
      price: "180000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Sandal yang memiliki kemampuan untuk berjalan sendiri, membawa Anda ke mana pun tanpa usaha berjalan.",
    },
    {
      title: "Speaker Mimpi",
      price: "1200000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Speaker yang memainkan lagu-lagu yang dicontohkan dari impian Anda, menghadirkan suara dunia bawah sadar.",
    },
    {
      title: "Kereta Awan",
      price: "3500000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kereta layang pribadi di awan, memberikan pemandangan spektakuler dan perjalanan yang tak terlupakan.",
    },
    {
      title: "Pisau Teleportasi",
      price: "750000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Pisau yang memungkinkan Anda 'berpindah' makanan favorit dari tempat lain, menghadirkan kelezatan dari penjuru dunia.",
    },
    {
      title: "Penghapus Masa Lalu",
      price: "4200000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Penghapus unik yang menghapus kenangan buruk dari ingatan Anda, memberi kesempatan untuk memulai halaman baru.",
    },
    {
      title: "Kacamata Realitas Seru",
      price: "560000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kacamata yang mengubah sekitar Anda menjadi permainan realitas seru, di mana Anda adalah pemain utama.",
    },
    {
      title: "Tas Dimensi",
      price: "890000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Tas kecil yang memiliki ruang tak terbatas di dalamnya, cocok untuk membawa segala sesuatu yang Anda butuhkan.",
    },
    {
      title: "Kamera Impian",
      price: "1750000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kamera canggih yang dapat menangkap momen dari dunia impian Anda, membawa fantasi menjadi nyata.",
    },
    {
      title: "Peralatan Cipta Awan",
      price: "980000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Alat yang mengubah ide-ide kreatif Anda menjadi awan berbentuk unik, menginspirasi semua yang melihat.",
    },
    {
      title: "Sepatu Pelangi",
      price: "650000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Sepatu yang mengubah jejak langkah Anda menjadi jejak pelangi, meninggalkan keindahan di mana pun Anda pergi.",
    },
    {
      title: "Topeng Empati",
      price: "420000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Topeng yang mengubah Anda dapat merasakan perasaan dan pengalaman orang lain, memperkuat empati.",
    },
    {
      title: "Lukisan Holografik",
      price: "1350000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Lukisan yang menghidupkan gambar dengan hologram, memberi dimensi baru pada karya seni.",
    },
    {
      title: "Dompet Waktu",
      price: "780000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Dompet yang mengandung kapsul waktu pribadi, memungkinkan Anda menyimpan momen berharga untuk masa depan.",
    },
    {
      title: "Kursi Anti-Stres",
      price: "550000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kursi yang secara otomatis mengubah suasana hati Anda menjadi damai dengan kombinasi suara dan pijatan lembut.",
    },
    {
      title: "Kompas Petualangan",
      price: "250000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kompas yang selalu menunjukkan arah ke petualangan baru, menjadikan eksplorasi tak berujung.",
    },
    {
      title: "Lensa Realitas",
      price: "1100000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Lensa khusus yang mengungkapkan sisi magis dalam rutinitas harian, membuka mata pada keajaiban sekitar.",
    },
    {
      title: "Kotak Musik Euforia",
      price: "380000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kotak musik yang memainkan melodi yang disesuaikan dengan perasaan Anda, membawa rasa euforia.",
    },
    {
      title: "Jam Hujan Meteor",
      price: "2500000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Mengubah setiap detik menjadi pertunjukan cahaya gemerlap seperti hujan meteor di langit malam.",
    },
    {
      title: "Topi Antigravitasi",
      price: "650000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Topi futuristik dengan teknologi anti-gravitasi, membuatnya melayang beberapa sentimeter di atas kepala Anda.",
    },
    {
      title: "Pulpen Multidimensi",
      price: "50000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Pulpen yang menggambarkan gambar holografik tiga dimensi saat Anda menulis, membawa tulisan ke level baru.",
    },
    {
      title: "Sandal Berjalan Sendiri",
      price: "180000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Sandal yang memiliki kemampuan untuk berjalan sendiri, membawa Anda ke mana pun tanpa usaha berjalan.",
    },
    {
      title: "Speaker Mimpi",
      price: "1200000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Speaker yang memainkan lagu-lagu yang dicontohkan dari impian Anda, menghadirkan suara dunia bawah sadar.",
    },
    {
      title: "Kereta Awan",
      price: "3500000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kereta layang pribadi di awan, memberikan pemandangan spektakuler dan perjalanan yang tak terlupakan.",
    },
    {
      title: "Pisau Teleportasi",
      price: "750000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Pisau yang memungkinkan Anda 'berpindah' makanan favorit dari tempat lain, menghadirkan kelezatan dari penjuru dunia.",
    },
    {
      title: "Penghapus Masa Lalu",
      price: "4200000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Penghapus unik yang menghapus kenangan buruk dari ingatan Anda, memberi kesempatan untuk memulai halaman baru.",
    },
    {
      title: "Kacamata Realitas Seru",
      price: "560000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kacamata yang mengubah sekitar Anda menjadi permainan realitas seru, di mana Anda adalah pemain utama.",
    },
    {
      title: "Tas Dimensi",
      price: "890000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Tas kecil yang memiliki ruang tak terbatas di dalamnya, cocok untuk membawa segala sesuatu yang Anda butuhkan.",
    },
    {
      title: "Kamera Impian",
      price: "1750000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kamera canggih yang dapat menangkap momen dari dunia impian Anda, membawa fantasi menjadi nyata.",
    },
    {
      title: "Peralatan Cipta Awan",
      price: "980000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Alat yang mengubah ide-ide kreatif Anda menjadi awan berbentuk unik, menginspirasi semua yang melihat.",
    },
    {
      title: "Sepatu Pelangi",
      price: "650000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Sepatu yang mengubah jejak langkah Anda menjadi jejak pelangi, meninggalkan keindahan di mana pun Anda pergi.",
    },
    {
      title: "Topeng Empati",
      price: "420000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Topeng yang mengubah Anda dapat merasakan perasaan dan pengalaman orang lain, memperkuat empati.",
    },
    {
      title: "Lukisan Holografik",
      price: "1350000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Lukisan yang menghidupkan gambar dengan hologram, memberi dimensi baru pada karya seni.",
    },
    {
      title: "Dompet Waktu",
      price: "780000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Dompet yang mengandung kapsul waktu pribadi, memungkinkan Anda menyimpan momen berharga untuk masa depan.",
    },
    {
      title: "Kursi Anti-Stres",
      price: "550000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kursi yang secara otomatis mengubah suasana hati Anda menjadi damai dengan kombinasi suara dan pijatan lembut.",
    },
    {
      title: "Kompas Petualangan",
      price: "250000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kompas yang selalu menunjukkan arah ke petualangan baru, menjadikan eksplorasi tak berujung.",
    },
    {
      title: "Lensa Realitas",
      price: "1100000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Lensa khusus yang mengungkapkan sisi magis dalam rutinitas harian, membuka mata pada keajaiban sekitar.",
    },
    {
      title: "Kotak Musik Euforia",
      price: "380000",
      // image: "https://source.unsplash.com/collection/2349781/1280x720",
      location: "indonesia",
      description:
        "Kotak musik yang memainkan melodi yang disesuaikan dengan perasaan Anda, membawa rasa euforia.",
    },
  ];

  //   const newPlace = await Promise.all(
  //     places.map(async (place) => {
  //       let geoData = await hereMaps.geometry(place.location);
  //       if (!geoData) {
  //         geoData = { type: "Point", coordinates: [116.32883, -8.90952] };
  //       }
  //       return {
  //         ...place,
  //         author: "643d36579773b789e91ef660",
  //         images: {
  //           url: "public\\images\image1681876521153-260851838.jpg",
  //           filename: image1681876521153-260851838.jpg",
  //         },
  //         geometry: { ...geoData },
  //       };
  //     })
  //   );

  try {
    const newProduct = product.map((produc) => {
      return {
        ...produc,
        author: "6501abc2687f848e0167f1ac",
        images: {
          url: "public\\images\\image_1694934137037_1000000000.jpg",
          filename: "image_1694934137037_1000000000.jpg",
        },
      };
    });
    await Product.deleteMany({});
    await Product.insertMany(newProduct);
    console.log("Data berhasil disimpan");
  } catch (err) {
    console.log("Terjadi kesalahan saat menyimpan data:", err);
  } finally {
    mongoose.disconnect();
  }
}

seedPlaces();
