import { View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';

// Datos de ejemplo para las categorías
const categories = [
  { id: '1', title: 'Música', color: 'bg-pink-600' },
  { id: '2', title: 'Podcasts', color: 'bg-emerald-800' },
  { id: '3', title: 'Eventos en vivo', color: 'bg-purple-700' },
  { id: '4', title: 'Hecho para ti', color: 'bg-blue-950' },
  { id: '5', title: 'Nuevos Lanzamientos', color: 'bg-lime-700' },
  { id: '6', title: 'Latina', color: 'bg-blue-500' },
  { id: '7', title: 'Pop', color: 'bg-slate-500' },
  { id: '8', title: 'Hip-Hop', color: 'bg-indigo-500' },
  { id: '9', title: 'Cumbia', color: 'bg-blue-400' },
  { id: '10', title: 'Anime', color: 'bg-blue-500' },
];

interface CategoryCardProps {
  title: string;
  color: string;
}

const SearchScreen = () => {
  // Aplicamos la interfaz de props al componente
  const CategoryCard = ({ title, color }: CategoryCardProps) => (
    <TouchableOpacity className={`h-24 rounded-lg p-2 m-1 flex-1 justify-end ${color}`}>
      <CustomText variant="medium" className="text-white font-bold">{title}</CustomText>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-zinc-950 p-4">
      {/* Encabezado */}
      <CustomText variant="large" className="text-purple-500 font-bold mt-12 mb-4">Informacion</CustomText>
      
      <View className="bg-zinc-800 rounded-lg flex-row items-center p-2 mb-4">
        <CustomText className="text-zinc-400 mx-2 text-xl">Esta es una pagina creada por Ricardo Arias, si estas viendo esto significa que o eres el milo o q andas de metiche en mi github, sea cual sea de los 2 escribir esto me dio pereza asi q tienes esto en lugar de verdadera informacion</CustomText>
      </View>
      <CustomText variant="medium" className="text-purple-500 font-bold mb-2">Explorar todo</CustomText>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard title={item.title} color={item.color} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;