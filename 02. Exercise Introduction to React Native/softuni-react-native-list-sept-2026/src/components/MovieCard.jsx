import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { colors } from "../theme";
import { formatDuration } from "../utils/dateTimeUtils";
import GenreTags from "./GenreTag";

export default function MovieCard({
  title,
  year,
  director,
  genre,
  durationMinutes,
  posterUrl,
  onSelect,
}) {
  return (
    <Pressable style={styles.card} onPress={onSelect}>
      <Image source={{ uri: posterUrl }} style={styles.poster} />

      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.meta}>
          {year} • {formatDuration(durationMinutes)}
        </Text>
        <Text style={styles.director}>{director}</Text>

        <GenreTags genre={genre} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  poster: {
    width: 90,
    height: 135,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  meta: {
    color: colors.accent,
    fontSize: 13,
    marginTop: 6,
  },
  director: {
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
    marginBottom: 10,
  },
});
