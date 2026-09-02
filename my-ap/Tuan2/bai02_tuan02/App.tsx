import React, { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

type geoType = {
  lat: string;
  lng: string;
};

type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geoType;
};

type companyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

interface userType {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: addressType;
  phone?: string;
  website?: string;
  company?: companyType;
}

const UserProfileDetail = () => {
  const [user, setUser] = useState<userType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  if (!user) return null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.line}>ID: {user?.id}</Text>
      <Text style={styles.line}>Name: {user?.name}</Text>
      <Text style={styles.line}>Username: {user?.username}</Text>
      <Text style={styles.line}>Email: {user?.email}</Text>
      <Text style={styles.line}>Street: {user?.address?.street}</Text>
      <Text style={styles.line}>Suite: {user?.address?.suite}</Text>
      <Text style={styles.line}>City: {user?.address?.city}</Text>
      <Text style={styles.line}>Zipcode: {user?.address?.zipcode}</Text>
      <Text style={styles.line}>Geo Lat: {user?.address?.geo?.lat}</Text>
      <Text style={styles.line}>Geo Lng: {user?.address?.geo?.lng}</Text>
      <Text style={styles.line}>Phone: {user?.phone}</Text>
      <Text style={styles.line}>Website: {user?.website}</Text>
      <Text style={styles.line}>Company Name: {user?.company?.name}</Text>
      <Text style={styles.line}>CatchPhrase: {user?.company?.catchPhrase}</Text>
      <Text style={styles.line}>BS: {user?.company?.bs}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  line: {
    fontSize: 16,
    marginBottom: 6,
  },
});

export default UserProfileDetail;
