// import React, { useEffect } from "react";
// import { TouchableOpacity, Linking } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { useRoute } from "@react-navigation/native";
// import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { movieDetail } from "../store/action/actionCreator";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   textPadding: {
//     padding: 16,
//   },
//   iconContainer: {
//     position: "absolute",
//     bottom: 210,
//     left: 9,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingVertical: 4,
//     paddingHorizontal: 6,
//   },
//   ratingText: {
//     marginLeft: 1,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "black",
//   },
//   genre: {
//     position: "absolute",
//     bottom: 210,
//     left: 90,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingVertical: 4,
//     paddingHorizontal: 6,
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   genre1: {
//     position: "absolute",
//     bottom: 190,
//     left: 90,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingVertical: 4,
//     paddingHorizontal: 6,
//     fontSize: 14,
//     fontWeight: "normal",
//   },
//   author: {
//     position: "absolute",
//     bottom: 210,
//     left: 160,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingVertical: 4,
//     paddingHorizontal: 6,
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   author1: {
//     position: "absolute",
//     bottom: 190,
//     left: 160,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingVertical: 4,
//     paddingHorizontal: 6,
//     fontSize: 14,
//     fontWeight: "normal",
//   },
//   cast: {
//     borderRadius: 5,
//     elevation: 3,
//     shadowOffset: { width: 1, height: 1 },

//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     marginHorizontal: 4,
//     marginVertical: 6,
//     padding: 10,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   rating: {
//     position: "absolute",
//     bottom: 190,
//     left: 160,
//   },
// });

// const CardDetail = () => {
//   const route = useRoute();
//   const id = route.params.id;
//   const movie = useSelector((state) => state.movie.movie);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(movieDetail(id));
//   }, []);

//   const handlePress = () => {
//     Linking.openURL("https://www.youtube.com/watch?v=ZlNFpri-Y40");
//   };
//   return (
//     <ScrollView styles={styles.container}>
//       <Image
//         source={{
//           uri: movie.imgUrl,
//         }}
//         style={{
//           width: "100%",
//           height: 500,
//           resizeMode: "stretch",
//           borderBottomLeftRadius: 10,
//           borderBottomRightRadius: 10,
//         }}
//       />

//       <View style={styles.textPadding}>
//         <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 10 }}>
//           {movie.title}
//         </Text>
//         <Text
//           style={{
//             fontSize: 14,
//             fontWeight: "normal",
//             marginBottom: 8,
//             marginTop: 25,
//           }}
//         >
//           Rating
//         </Text>
//         <Text style={styles.genre}>
//           {movie.Genre ? movie.Genre.name : "Unknown"}
//         </Text>
//         <Text style={styles.genre1}>Genre</Text>
//         <Text style={styles.author}>
//           {movie.User ? movie.User.username : "Unknown"}
//         </Text>
//         <Text style={styles.author1}>Author</Text>
//         <View style={styles.iconContainer}>
//           <Icon name="star" size={20} color="orange" />
//           <Text style={styles.ratingText}> {movie.rating}/10</Text>
//         </View>
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: "bold",
//             marginBottom: 8,
//             position: "absolute",
//             bottom: 160,
//             left: 11,
//           }}
//         >
//           Synopsis
//         </Text>
//         <Text style={{ fontSize: 16 }}>{movie.synopsis}</Text>
//       </View>
//       <TouchableOpacity onPress={handlePress} style={{ paddingLeft: 16 }}>
//         <Text style={{ color: "blue", fontSize: 15 }}> See Trailer </Text>
//       </TouchableOpacity>
//       <Text
//         style={{
//           fontSize: 20,
//           fontWeight: "bold",
//           paddingLeft: 16,
//           marginTop: 10,
//         }}
//       >
//         CAST
//       </Text>
//       <View
//         style={{
//           padding: 16,
//           flexDirection: "row",
//           justifyContent: "flex-start",
//         }}
//       >
//         <View
//           style={{
//             alignItems: "center",
//             marginRight: 16,
//           }}
//         >
//           <Image
//             source={{
//               uri: "https://pyxis.nymag.com/v1/imgs/6ba/cad/a415d256d8ba3a627f1f9899d37a76a642-CUT-Jonathan-Majors-LEDE.rvertical.w570.jpg",
//             }}
//             style={{
//               width: 70,
//               height: 70,
//               borderRadius: 10,
//               resizeMode: "center",
//             }}
//           />
//           <Text>Nama</Text>
//         </View>
//         <View
//           style={{
//             alignItems: "center",
//             marginRight: 16,
//           }}
//         >
//           <Image
//             source={{
//               uri: "https://pyxis.nymag.com/v1/imgs/6ba/cad/a415d256d8ba3a627f1f9899d37a76a642-CUT-Jonathan-Majors-LEDE.rvertical.w570.jpg",
//             }}
//             style={{
//               width: 70,
//               height: 70,
//               borderRadius: 10,
//               resizeMode: "center",
//             }}
//           />
//           <Text>Nama</Text>
//         </View>
//         <View
//           style={{
//             alignItems: "center",
//             marginRight: 16,
//           }}
//         >
//           <Image
//             source={{
//               uri: "https://pyxis.nymag.com/v1/imgs/6ba/cad/a415d256d8ba3a627f1f9899d37a76a642-CUT-Jonathan-Majors-LEDE.rvertical.w570.jpg",
//             }}
//             style={{
//               width: 70,
//               height: 70,
//               borderRadius: 10,
//               resizeMode: "center",
//             }}
//           />
//           <Text>Nama</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default CardDetail;
