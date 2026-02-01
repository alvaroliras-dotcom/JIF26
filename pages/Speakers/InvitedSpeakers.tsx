
import React from 'react';
import SpeakerCard from '../../components/SpeakerCard';

const InvitedSpeakers: React.FC = () => {
  const placeholderBio = "Specialist in photochemistry and related photophysical processes, with research focused on molecular systems and light-induced phenomena.";
  
  const speakers = [
    { name: "Sergio Navalón Oltra", affiliation: "Universitat Politècnica de València", bio: placeholderBio },
    { name: "Ángel Orte Gutiérrez", affiliation: "Universidad de Granada", bio: placeholderBio },
    { name: "Inmaculada Andreu Ros", affiliation: "Universitat Politècnica de València / Universidad de Granada", bio: placeholderBio },
    { name: "Olga Crespo Zaragoza", affiliation: "Universidad de Zaragoza", bio: placeholderBio },
    { name: "Carla Casadevall Serrano", affiliation: "Universitat Rovira i Virgili", bio: placeholderBio },
    { name: "Leyre Marzo Puerta", affiliation: "Universidad Autónoma de Madrid", bio: placeholderBio },
    { name: "Luis Bañares Morcillo", affiliation: "Universidad Complutense de Madrid", bio: placeholderBio },
    { name: "Christophe Lescop", affiliation: "Institut des Sciences Chimiques de Rennes (ISCR)", bio: placeholderBio },
    { name: "Claire Deo", affiliation: "EMBL Heidelberg", bio: placeholderBio },
    { name: "Gilles Lemercier", affiliation: "Université de Reims Champagne-Ardenne", bio: placeholderBio },
    { name: "Fabrice Odobel", affiliation: "Université de Nantes", bio: placeholderBio },
    { name: "Elsa Cassette", affiliation: "Université Paris-Saclay", bio: placeholderBio },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">4.2 Invited Lectures</h1>
        <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {speakers.map((speaker, idx) => (
          <SpeakerCard key={idx} {...speaker} role="Invited" />
        ))}
      </div>
    </div>
  );
};

export default InvitedSpeakers;
