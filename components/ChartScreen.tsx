import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RowData {
    planet: string;
    sign: string;
    lord: string;
    degree: string;
    house: string;
}
interface ChartScreenProps {
    data: RowData[];
}
const ChartScreen: React.FC<ChartScreenProps> = ({ data }) => {
    return (
        <View>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderCell}>Planet</Text>
                    <View style={styles.verticalDivider} />
                    <Text style={styles.tableHeaderCell}>Sign</Text>
                    <View style={styles.verticalDivider} />
                    <Text style={styles.tableHeaderCell}>Lord</Text>
                    <View style={styles.verticalDivider} />
                    <Text style={styles.tableHeaderCell}>Degree</Text>
                    <View style={styles.verticalDivider} />
                    <Text style={styles.tableHeaderCell}>House</Text>
                </View>
                {data.map((row, index) => (
                    <React.Fragment key={index}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>{row.planet}</Text>
                            <View style={styles.verticalDivider} />
                            <Text style={styles.tableCell}>{row.sign}</Text>
                            <View style={styles.verticalDivider} />
                            <Text style={styles.tableCell}>{row.lord}</Text>
                            <View style={styles.verticalDivider} />
                            <Text style={styles.tableCell}>{row.degree}</Text>
                            <View style={styles.verticalDivider} />
                            <Text style={styles.tableCell}>{row.house}</Text>
                        </View>
                    </React.Fragment>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1E1D',
    },
    tableContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(211, 211, 211, 0.1)', // Light green with opacity
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(211, 211, 211, 0.2)', // Light green with opacity
    },
    tableHeaderCell: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
        paddingVertical: 8,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
        paddingVertical: 8,
    },
    verticalDivider: {
        width: 1,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
    },
    horizontalDivider: {
        height: 1,
        backgroundColor: 'rgba(211, 211, 211, 0.8)',
        marginVertical: 8,
    },
});

export default ChartScreen;