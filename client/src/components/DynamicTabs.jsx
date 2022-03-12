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
        <Box sx={{ typography: 'body1', p: 1}}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} sx={{
                        borderTop: '1px solid red', 
                        borderLeft: '1px solid red', 
                        borderRight: '1px solid red', 
                        mb: 1
                    }}>
                        {parents.map(ele => (
                            <Tab label={ele.label} key={ele.label} value={ele.label}  />
                        ))}

                        {children?.map(ele => (
                            <Tab label={ele.label} key={ele.label} value={ele.label} />
                        ))}
                    </TabList>

                    
                </Box>
                {parents.map(ele => (
                    <TabPanel key={ele.label} value={ele.label} sx={{p: 0, pr: 0}} >
                        {ele.child()}
                    </TabPanel>
                ))}
                {children?.map(ele => (
                    <TabPanel key={ele.label} value={ele.label} sx={{p: 0, pr: 0}}>
                        {ele.child()}
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}
