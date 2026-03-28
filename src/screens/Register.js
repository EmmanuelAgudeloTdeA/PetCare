import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';
import ProgressBar from '../components/ProgressBar';
import ScreenHeader from '../components/ScreenHeader';
import { calculateAge, formatDate } from '../utils/dateUtils';
import { RegisterPetStyles as styles } from '../styles/screens/RegisterPetStyles';
import { COLORS } from '../../assets/styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const FIELDS = [
  { key: 'name',    iconName: 'pricetag-outline', label: 'Nombre',  placeholder: 'Ej: Luna, Max, Milo...' },
  { key: 'species', iconName: 'paw-outline',       label: 'Especie', placeholder: 'Ej: Perro, Gato, Loro...' },
  { key: 'breed',   iconName: 'flask-outline',     label: 'Raza',    placeholder: 'Ej: Golden Retriever, Persa...' },
];

const MAX_DATE = new Date();
const MIN_DATE = new Date(1990, 0, 1);

const RegisterPetScreen = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [filledCount, setFilledCount] = useState(0);
  const [focusedField, setFocusedField] = useState(null);

  const fieldValues = { name, species, breed, weight };
  const fieldSetters = { name: setName, species: setSpecies, breed: setBreed, weight: setWeight };

  useEffect(() => {
    const textFields = [name, species, breed, weight];
    const textFilled = textFields.filter((f) => f.trim().length > 0).length;
    const dateFilled = birthDate ? 1 : 0;
    const total = textFilled + dateFilled;
    setFilledCount(total);
    setIsFormValid(total === 5);
  }, [name, species, breed, birthDate, weight]);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) setBirthDate(selectedDate);
  };

  const handleRegister = () => {
    Alert.alert(
      'Mascota Registrada',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${calculateAge(birthDate)}\nPeso: ${weight} kg`,
      [{ text: 'Aceptar', style: 'default' }],
    );
  };

  const handleClear = () => {
    Object.values(fieldSetters).forEach((setter) => setter(''));
    setBirthDate(null);
    setFocusedField(null);
  };

  const getInputStyle = (value, field) => {
    if (focusedField === field) return [styles.input, styles.inputFocused];
    if (value.trim().length > 0) return [styles.input, styles.inputValid];
    return [styles.input];
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScreenHeader
          iconName="clipboard-outline"
          title="Registrar Mascota"
          subtitle="Completa todos los datos de tu nueva mascota"
        />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Card style={styles.progressCardPadding}>
            <ProgressBar
              progress={filledCount / 5}
              label="Progreso del formulario"
              counter={`${filledCount} de 5 campos`}
              color={isFormValid ? '#6BCB77' : '#52B788'}
            />
          </Card>

          <Card title="Datos básicos">
            {FIELDS.map((field) => (
              <View key={field.key} style={styles.fieldWrapper}>
                <View style={styles.fieldLabel}>
                  <Text style={styles.fieldLabelText}>
                    {field.label} <Text style={styles.required}>*</Text>
                  </Text>
                </View>
                <TextInput
                  style={getInputStyle(fieldValues[field.key], field.key)}
                  value={fieldValues[field.key]}
                  onChangeText={fieldSetters[field.key]}
                  placeholder={field.placeholder}
                  placeholderTextColor="#B0A99F"
                  onFocus={() => setFocusedField(field.key)}
                  onBlur={() => setFocusedField(null)}
                />
                {fieldValues[field.key].trim().length > 0 && (
                  <View style={styles.validationRow}>
                    <Ionicons name="checkmark-circle" size={13} color={COLORS.success} />
                    <Text style={styles.validationText}> {field.label} válido</Text>
                  </View>
                )}
              </View>
            ))}
          </Card>

          <Card title="Datos físicos">
            <View style={styles.inputRow}>
              <View style={[styles.fieldWrapper, styles.inputHalf]}>
                <View style={styles.fieldLabel}>
                  <Ionicons name="calendar-outline" size={16} color={COLORS.textSecondary} style={styles.fieldIcon} />
                  <Text style={styles.fieldLabelText}>
                    Fecha de nac. <Text style={styles.required}>*</Text>
                  </Text>
                </View>

                <TouchableOpacity
                  style={[styles.input, birthDate ? styles.inputValid : null]}
                  onPress={() => setShowPicker(true)}
                  activeOpacity={0.8}
                >
                  <Text style={birthDate ? styles.dateText : styles.datePlaceholder}>
                    {birthDate ? formatDate(birthDate) : 'Seleccionar fecha'}
                  </Text>
                  <Ionicons name="calendar" size={16} color={birthDate ? COLORS.primary : '#B0A99F'} />
                </TouchableOpacity>

                {birthDate && (
                  <View style={styles.validationRow}>
                    <Ionicons name="checkmark-circle" size={13} color={COLORS.success} />
                    <Text style={styles.validationText}> {calculateAge(birthDate)}</Text>
                  </View>
                )}

                {showPicker && (
                  <DateTimePicker
                    value={birthDate || new Date()}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    maximumDate={MAX_DATE}
                    minimumDate={MIN_DATE}
                    onChange={handleDateChange}
                  />
                )}
              </View>

              <View style={[styles.fieldWrapper, styles.inputHalf]}>
                <View style={styles.fieldLabel}>
                  <Ionicons name="scale-outline" size={16} color={COLORS.textSecondary} style={styles.fieldIcon} />
                  <Text style={styles.fieldLabelText}>
                    Peso <Text style={styles.required}>*</Text>
                  </Text>
                </View>
                <TextInput
                  style={getInputStyle(weight, 'weight')}
                  value={weight}
                  onChangeText={setWeight}
                  placeholder="kg"
                  placeholderTextColor="#B0A99F"
                  keyboardType="decimal-pad"
                  onFocus={() => setFocusedField('weight')}
                  onBlur={() => setFocusedField(null)}
                />
                {weight.trim().length > 0 && (
                  <View style={styles.validationRow}>
                    <Ionicons name="checkmark-circle" size={13} color={COLORS.success} />
                    <Text style={styles.validationText}> OK</Text>
                  </View>
                )}
              </View>
            </View>
          </Card>

          <View style={styles.buttonRow}>
            <OutlineButton
              label="Limpiar"
              onPress={handleClear}
              style={styles.clearButtonFlex}
            />
            <PrimaryButton
              label="Registrar"
              onPress={handleRegister}
              disabled={!isFormValid}
              style={styles.registerButtonFlex}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPetScreen;
