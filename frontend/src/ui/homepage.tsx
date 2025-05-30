
const Homepage: React.FC = () => {
    const stats = {
        upcomingShiftsToday: 3,
        unassignedSlotsToday: 7,
        totalStaff: 45,
        shiftsNext7Days: 22,
    };

    return (
        <div style={styles.dashboardContainer}>
            <h2 style={styles.pageTitle}>Dashboard</h2>

            <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                    <h3>Upcoming Shifts Today</h3>
                    <p style={styles.statValue}>{stats.upcomingShiftsToday}</p>
                </div>
                <div style={styles.statCard}>
                    <h3>Unassigned Slots Today</h3>
                    <p style={styles.statValue}>{stats.unassignedSlotsToday}</p>
                </div>
                <div style={styles.statCard}>
                    <h3>Total Registered Staff</h3>
                    <p style={styles.statValue}>{stats.totalStaff}</p>
                </div>
                <div style={styles.statCard}>
                    <h3>Shifts Next 7 Days</h3>
                    <p style={styles.statValue}>{stats.shiftsNext7Days}</p>
                </div>
            </div>

            <h3 style={styles.sectionTitle}>Quick Actions</h3>
            <div style={styles.quickActions}>
                {/* <Link to="/shifts" style={styles.actionButton}>Create New Shift</Link>
                <Link to="/staff" style={styles.actionButton}>Add New Staff</Link>
                <Link to="/attendance" style={styles.actionButton}>Mark Today's Attendance</Link> */}
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    dashboardContainer: {
        padding: '20px',
    },
    pageTitle: {
        fontSize: '32px',
        marginBottom: '30px',
        color: '#333',
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px',
    },
    statCard: {
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        textAlign: 'center',
    },
    statValue: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#3498db',
        margin: '10px 0 0',
    },
    sectionTitle: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    quickActions: {
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
    },
    actionButton: {
        backgroundColor: '#2ecc71',
        color: 'white',
        textDecoration: 'none',
        padding: '12px 25px',
        borderRadius: '5px',
        fontSize: '18px',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
    },
};

export default Homepage;