import { View, Text, StyleSheet, Pressable } from "react-native";

import { colors } from "../theme";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

export default function GenreTags({ genre }) {
  const { selectedGenre, setSelectedGenre } = useContext(MovieContext);
  const genres = genre.split(",").map((g) => g.trim());

  const pressHandler = (name) => {
    setSelectedGenre(name === selectedGenre ? null : name);
  };

  return (
    <View style={styles.row}>
      {genres.map((name, index) => (
        <Pressable
          style={[styles.tag, selectedGenre === name && styles.tagActive]}
          key={index}
          onPress={() => pressHandler(name)}
        >
          <Text
            style={[styles.text, selectedGenre === name && styles.textActive]}
          >
            {name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagActive: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  text: {
    color: colors.textMuted,
    fontSize: 12,
  },
  textActive: {
    color: colors.background,
    fontWeight: "bold",
  },
});
