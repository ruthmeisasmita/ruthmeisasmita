import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Beranda = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar and Notification */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput placeholder="cari" style={styles.searchInput} />
        </View>
        <TouchableOpacity>
        <FontAwesome name="bell" size={24} style={styles.bellIcon} />
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../Assetsibima/profil.png')} style={styles.profileImage} />
          </TouchableOpacity>
          <View>
            <Text style={styles.profileName}>Halo, Cha Eunwoo</Text>
            <Text style={styles.profileText}>Tingkatkan semangat perkuliahanmu</Text>
            <Text style={styles.profileText}> bersama SIBIMA UNSRI.</Text>
          </View>
        </View>
        <View style={styles.profileFooter}>
          <View>
            <Text style={styles.profileFooterText}><FontAwesome name="book" size={16} /> Semester 4</Text>
            <Text style={styles.profileFooterText}><FontAwesome name="book" size={16} /> Tersisa 3 semester lagi</Text>
          </View>
          <View style={styles.ipkContainer}>
            <Text style={styles.ipkText}>IPK</Text>
            <Text style={styles.ipkValue}>3.8</Text>
          </View>
        </View>
      </View>

      {/* Navigation Icons */}
      <View style={styles.navContainer}>
        <View style={styles.navItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Janji_bimbingan')}>
          <View style={styles.navIconContainer}>
            <Image source={require('../../Assetsibima/janji_bimbingan.png')} style={styles.navIcon} />
          </View>
          </TouchableOpacity>
          <Text style={styles.navText}>Janji</Text>
          <Text style={styles.navText}>Bimbingan</Text>
        </View>
        <View style={styles.navItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Progres_IPK_SKS')}> 
          <View style={styles.navIconContainer}>
            <Image source={require('../../Assetsibima/progresIPK.png')} style={styles.navIcon} />
          </View>
          </TouchableOpacity>
          <Text style={styles.navText}>Progres IPK</Text>
          <Text style={styles.navText}> & SKS</Text>
        </View>
        <View style={styles.navItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Milestone')}>
          <View style={styles.navIconContainer}>
            <Image source={require('../../Assetsibima/milestone.png')} style={styles.navIcon} />
          </View>
        </TouchableOpacity>
          <Text style={styles.navText}>Milestone</Text>
        </View>
        <View style={styles.navItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Status_USEPT')}> 
          <View style={styles.navIconContainer}>
            <Image source={require('../../Assetsibima/status_USEPT.png')} style={styles.navIcon} />
          </View>
        </TouchableOpacity>
          <Text style={styles.navText}>Status</Text>
          <Text style={styles.navText}>USEPT</Text>
        </View>
      </View>

      {/* Information Section */}
      <View style={styles.infoHeader}>
        <Text style={styles.infoTitle}>Informasi</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Informasi')} style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      
      {/* Instruksi Bimbingan */}
      <View style={styles.infoCard}>
        <Image source={require('../../Assetsibima/intruksi_bimbingan.png')} style={styles.infoImage} />
        <View>
          <Text style={styles.infoCardTitle}>Instruksi Bimbingan</Text>
          <Text style={styles.infoCardText}>Ikuti langkah-langkah mudah ini </Text>
          <Text style={styles.infoCardText}>untuk memaksimalkan pengalaman</Text>
          <Text style={styles.infoCardText}>bimbingan Anda. Selamat belajar </Text>
          <Text style={styles.infoCardText}>dan sukses selalu! </Text>
          <TouchableOpacity  onPress={() => navigation.navigate('Intruksi_bimbingan')} style={styles.infoCardButton}>
            <Text style={styles.infoCardButtonText}>Lihat</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Jarak antara Instruksi Bimbingan dan Jadwal Dosen */}
      <View style={styles.spacing} />

      {/* Jadwal Dosen */}
      <View style={styles.infoCard}>
        <Image source={require('../../Assetsibima/jadwal_dosen.png')} style={styles.infoImage} />
        <View>
          <Text style={styles.infoCardTitle}>Jadwal Dosen</Text>
          <Text style={styles.infoCardText}>Temukan jadwal dosen anda</Text>
          <Text style={styles.infoCardText}>dengan cepat dan mudah. Pilih </Text>
          <Text style={styles.infoCardText}>dosen dan lihat jadwal kuliah serta</Text>
          <Text style={styles.infoCardText}>rencanakan pertemuan anda </Text>
          <Text style={styles.infoCardText}>dengan tepat!</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('Jadwal_dosen')} style={styles.infoCardButton}>
            <Text style={styles.infoCardButtonText}>Lihat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 50,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    color: '#4b5563',
  },
  bellIcon: {
    marginLeft: 16,
    color: '#FFC727',
  },
  profileCard: {
    backgroundColor: '#7CC3FF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileText: {
    fontSize: 12,
    color: '#ffffff',
  },
  graduateImage: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
  },
  profileFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#99D1FF',
    borderRadius: 10,
    padding: 8,
    marginTop: 16,
  },
  profileFooterText: {
    fontSize: 14,
    color: '#1e3a8a',
  },
  ipkContainer: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  ipkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  ipkValue: {
    backgroundColor: '#fbbf24',
    color: '#92400e',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 4,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  navItem: {
    alignItems: 'center',
    marginVertical: 10, // Atur jarak antar item navigasi
  },
  navIconContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 50,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  navIcon: {
    width: 40,
    height: 40,
  },
  navText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#1f2937',
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  infoButton: {
    backgroundColor: '#7CC3FF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  infoButtonText: {
    color: '#1e3a8a',
  },
  infoCard: {
    flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.15,  
        shadowRadius: 8,      
        shadowOffset: { width: 0, height: 4 },  
        elevation: 4,
  },
  infoImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  infoCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  infoCardText: {
    fontSize: 11,
    color: '#4b5563',
    marginTop: 4,
  },
  infoCardButton: {
    backgroundColor: '#7CC3FF',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  infoCardButtonText: {
    color: '#1e3a8a',
  },
  spacing: {
    marginVertical: 10, // Jarak antara Instruksi Bimbingan dan Jadwal Dosen
  },
});