import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { useRouter } from 'expo-router';
import CustomText from '../../components/CustomText';

const ReproduccionScreen = () => {
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const [progress, setProgress] = useState(0);

  const song = {
    title: 'El hijo de Hernández',
    artist: 'El Cuarteto De Nos',
    albumArt: require('../../assets/images/Cancion.png'),
    file: require('../../assets/music/El-hijo-de-Hernandez.mp3'),
  };

  async function playSound() {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
      return;
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      song.file,
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (!status.isLoaded) return;
    setPosition(status.positionMillis);
    setDuration(status.durationMillis ?? 1);
    setProgress(status.positionMillis / (status.durationMillis ?? 1));

    if (status.didJustFinish) {
      setIsPlaying(false);
      setProgress(1);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  function formatTime(ms: number) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <View className="flex-1 bg-black p-6 justify-between">
      {/* Encabezado */}
      <View className="flex-row justify-between items-center mt-8">
        <TouchableOpacity onPress={() => router.back()}>
          <CustomText className="text-white">←</CustomText> 
        </TouchableOpacity>
        <CustomText variant="medium" className="text-purple-500 font-bold text-center flex-1">REPRODUCIENDO</CustomText>
        <View style={{ width: 20 }} />
      </View>

      {/* Carátula del Álbum */}
      <View className="items-center my-8">
        <Image source={song.albumArt} className=" rounded-lg"  style={{ width: 320, height: 320 }} />
      </View>

      {/* Información de la canción */}
      <View className="items-center mb-4">
        <CustomText variant="large" className="text-white font-bold">{song.title}</CustomText>
        <CustomText variant="medium" className="text-gray-400">{song.artist}</CustomText>
      </View>

      {/* ✅ Barra de Progreso con estilos nativos */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>
        <View style={styles.timeRow}>
          <CustomText className="text-gray-400 text-xs">
            {formatTime(position)}
          </CustomText>
          <CustomText className="text-gray-400 text-xs">
            {formatTime(duration)}
          </CustomText>
        </View>
      </View>

      {/* Controles de Reproducción */}
      <View className="flex-row justify-around items-center mb-8">
        <TouchableOpacity>
          <CustomText className="text-white text-2xl">↺</CustomText> 
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText className="text-white text-4xl">«</CustomText> 
        </TouchableOpacity>
        <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
          <CustomText className="text-white text-5xl">
            {isPlaying ? '⏸' : '▶'}
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText className="text-white text-4xl">»</CustomText> 
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText className="text-white text-2xl">⇄</CustomText> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    width: '100%',
    marginBottom: 12,
  },
  progressBackground: {
    height: 6,
    backgroundColor: '#333',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
});

export default ReproduccionScreen;
