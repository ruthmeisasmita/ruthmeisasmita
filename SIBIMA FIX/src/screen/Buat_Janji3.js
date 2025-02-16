import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Buat_Janji3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Buat_Janji2')}>
          <Ionicons name="arrow-back" size={20} color="#FBBF24" />
        </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Janji Bimbingan</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../../Assetsibima/janjiBimbingan5.png')}
          style={styles.image}
        />
        <Text style={styles.heading}>Penjadwalan Bimbingan</Text>
        <View style={styles.status}>
        <Ionicons name="checkmark-circle" size={48} color="#32CD32" />
          <Text style={styles.statusText}>Berhasil</Text>
        </View>
        <Text style={styles.description}>
          Jadwal bimbingan dengan dosen telah berhasil dibuat. Silakan lihat chat untuk melihat status penjadwalan
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Chat_Dosen1')} style={styles.button}>
          <Text style={styles.buttonText}>CHAT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Buat_Janji3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    paddingHorizontal: 2,
    marginTop: 40,
  },
  arrowContainer: {
    width: 25, 
    height: 25, 
    borderRadius: 20, 
    borderColor: "#FBBF24", 
    borderWidth: 2, 
    justifyContent: "center",
    alignItems: "center",
  },  
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginRight: 13,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  status: {
    alignItems: 'center',
    marginVertical: 10,
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10, 
  },
  description: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#3470A2',
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});