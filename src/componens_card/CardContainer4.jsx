import React from "react";
import Card from "./Card";

const CardContainer1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xs"> 
        <Card
          title="5 Hal Kemewahan Estafet Api Obor Olimpiade Paris 2024"
          description="Olimpiade Paris 2024 akan dibuka di Sungai Seine pada Jumat, 26 Juli 2024. Lebih dari 10 ribu atlet diperkirakan akan ambil bagian dalam 329 pertandingan di Olimpiade Paris. Secara keseluruhan, akan ada 32 cabang olahraga dan 329 medali emas yang akan diperebutkan. Pesta olahraga dunia ini akan berakhir pada 11 Agustus 2024."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CAR-3LbN3Spma8PBJmS3e-y1ZEjvoXH1LXX3m-y-Dw&s"
          detail="Lihat Selengkapnya"
        />
      </div>
    </div>
  );
};

export default CardContainer1;
