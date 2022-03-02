import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function DynamicTabs({parents, children}) {
    const [value, setValue] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        if(parents && value === null){
            setValue(parents[0].label)
        }
    }, [parents, value])

    return (
        <Box sx={{ width: '100%', typography: 'body1', m: 1, p: 0  }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {parents.map(ele => (
                            <Tab label={ele.label} key={ele.label} value={ele.label}  />
                        ))}
                    </TabList>
                </Box>
                {parents.map(ele => (
                    <TabPanel key={ele.label} value={ele.label}>
                        {ele.child()}
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}
