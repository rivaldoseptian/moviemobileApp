import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

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

const CustomTable = () => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          title="Go to Details"
          onPress={() => navigation.navigate("Detail")}
        >
          <Text>movie</Text>
        </TouchableOpacity>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />

        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}> 9/10</Text>
        </View>
        <Card.Title title="black panther wakanda forever" />
        <Text style={styles.textcontent}>action</Text>
      </Card>
    </View>
  );
};

export default CustomTable;
