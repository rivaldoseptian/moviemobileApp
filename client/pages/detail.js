import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { IconButton } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { Linking } from "react-native";
import { gql, useQuery } from "@apollo/client";
import Icon from "react-native-vector-icons/MaterialIcons";

const { height } = Dimensions.get("window");

const CardDetail = () => {
  const imageOpacity = new Animated.Value(0);
  const imageTranslate = new Animated.Value(height);
  const route = useRoute();
  const id = route.params.id;

  const GET_MOVIE = gql`
    query Movie($movieId: ID!) {
      movie(id: $movieId) {
        title
        trailerUrl
        genre {
          name
        }
        id
        imgUrl
        rating
        synopsis
        casts {
          name
          profilePict
          movieId
          id
        }
        user {
          username
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(data?.movie || {});
  }, [data]);

  if (loading) return <ActivityIndicator size={"large"} />;
  if (error) return <Text>Error</Text>;

  const handlePress = () => {
    Linking.openURL(data.movie.trailerUrl);
  };

  const handleOnLoad = () => {
    Animated.parallel([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(imageTranslate, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: imageOpacity,
            transform: [{ translateY: imageTranslate }],
          },
        ]}
      >
        <Image
          source={{
            uri: data.movie.imgUrl,
          }}
          style={styles.image}
          onLoad={handleOnLoad}
        />
      </Animated.View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data.movie.title}</Text>
        <View style={styles.row}>
          <Text style={styles.author}></Text>
        </View>
        <Text style={styles.genre}>
          {movie.genre ? data.movie.genre.name : "Unknown"}
        </Text>
        <Text style={styles.genre1}>Genre</Text>
        <Text style={styles.author}>{data.movie.user.username}</Text>
        <Text style={styles.author1}>Author</Text>
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="orange" />
          <Text style={styles.ratingText}>{data.movie.rating}/10</Text>
        </View>
        <Text style={styles.textrating}>Rating</Text>
        <View style={styles.play}>
          <IconButton
            icon={() => (
              <Icon name="play-circle-outline" size={30} color="#000" />
            )}
            onPress={handlePress}
          />
          <Text>PlayTrailler</Text>
        </View>

        <View style={styles.separator} />
        <View style={{ height: 400 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
            Synopsis
          </Text>
          <View>
            <Text style={styles.synopsis}>{data.movie.synopsis}</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: 16,
            marginTop: 10,
          }}
        >
          CAST
        </Text>
        <View
          style={{
            height: 125,
            padding: 16,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {data.movie.casts?.map((cast) => {
            return (
              <View
                key={cast.id}
                style={{
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <Image
                  source={{
                    uri: cast.profilePict,
                  }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 10,
                    resizeMode: "center",
                  }}
                />
                <Text>{cast.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  genre: {
    position: "absolute",
    bottom: 620,
    left: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 15,
    fontWeight: "bold",
  },
  genre1: {
    position: "absolute",
    bottom: 600,
    left: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 14,
    fontWeight: "normal",
  },
  imageContainer: {
    height: 500,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "stretch",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 60,
  },
  author: {
    fontSize: 18,
    color: "#666",
    marginRight: 10,
  },

  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  iconContainer: {
    position: "absolute",
    bottom: 620,
    left: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  synopsis: {
    fontSize: 18,
    lineHeight: 24,
    color: "#222",
  },
  ratingText: {
    marginLeft: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  author: {
    position: "absolute",
    bottom: 620,
    left: 160,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 15,
    fontWeight: "bold",
  },
  author1: {
    position: "absolute",
    bottom: 600,
    left: 160,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 14,
    fontWeight: "normal",
  },
  textrating: {
    position: "absolute",
    bottom: 600,
    left: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  play: {
    position: "absolute",
    bottom: 640,
    left: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
});

export default CardDetail;
