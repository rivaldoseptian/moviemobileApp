import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { gql, useQuery } from "@apollo/client";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  card: {
    width: 150,
    height: 100,
    marginVertical: 10,
    marginBottom: 175,
    elevation: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  texts: {
    margin: 0,
    padding: 0,
  },
  iconContainer: {
    position: "absolute",
    bottom: -93,
    left: 3,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    borderRadius: 15,
    paddingHorizontal: 6,
    elevation: 4,
  },
  ratingText: {
    marginLeft: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  textcontent: {
    position: "absolute",
    bottom: -145,
    left: 18,
  },
});

const GET_MOVIES = gql`
  query Movies {
    movies {
      title
      genre {
        name
      }
      imgUrl
      rating
      id
    }
  }
`;

const CustomCard = ({ navigation }) => {
  const { loading, data, error } = useQuery(GET_MOVIES);

  if (loading) return <ActivityIndicator size={"large"} />;
  console.log(data)
  console.log(error);
  if (error) return <Text>Error</Text>;
  return (
    <View style={styles.cardContainer}>
      {data.movies?.map((movie) => {
        return (
          <Card style={styles.card} key={movie.id}>
            <Card.Cover
              source={{
                uri: movie.imgUrl,
              }}
            />
            <View style={styles.iconContainer}>
              <Icon name="star" size={20} color="yellow" />
              <Text style={styles.ratingText}> {movie.rating}/10</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              title="Go to Details"
              onPress={() => navigation.navigate("Detail", { id: movie.id })}
            >
              <Card.Title title={movie.title} />
            </TouchableOpacity>
            <Text style={styles.textcontent}>{movie.genre.name}</Text>
          </Card>
        );
      })}
    </View>
  );
};

export default CustomCard;
