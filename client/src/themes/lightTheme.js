import { createTheme } from '@mui/material/styles'


// // Create theme instance
export const lightTheme = createTheme({

    palette: {
    //     mode: 'dark',
        background: {
            //default: "#F3F3F3",
            page: "#F3F3F3",
            paper: "#ffffff"
        },
    //     primary: {
    //         main: "#E2DBDB"
    //     },
    //     text: {
    //         primary: '#EEE7E7'
    //     }
    },

    components: {
        MuiButton: {
            defaultProps: {
                size: "medium",
                variant: "contained",
                color: 'primary',
                disableRipple: true,
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    color: 'primary',
                    padding: '0px',
                    marginTop: '0px'
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    
                    backgroundColor: '#1876d2',
                    color: '#FBFCFD',
                    padding: '0px',
                    marginTop: '0px'
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    //marginTop: '16px',
                    //backgroundColor: '#eeeeee',
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                size: 'small',
                fullWidth: true,
                InputLabelProps: {
                    shrink: true,
                    color: 'primary'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: '0px'
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 1,
                square: false
            }, 
            styleOverrides: {
                root: {
                    padding: 10,
                    overflow: 'hidden',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }
            }
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    padding: '8px'
                }
            }
        },
    },

    overrides: {
        MuiAccordionSummary: {
            root: {
                padding: '0px',
                marginTop: '0px',
                //margin: '3px'
            }
        },
        MuiAccordionDetails: {
            root: {
                
                //marginTop: '16px',
                //backgroundColor: '#eeeeee',
            }
        },


        MuiStepper: {
            root: {
                padding: '8px'
            }
        },

        MuiButton: {
            root: {
                //borderRadius: 20,
                textTransform: 'none' // Prevent All Caps
            }
        }
    },


    props: {
        MuiPaper: {
            elevation: 1,
            square: true,
        }
    }
})
