
export default theme => ({
	 root: {
    // marginTop: '20px',
    // marginLeft: '20px',
    padding: '10px 0px 0px 20px',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    fontSize:20,
  },filterContainer: {
	    display: 'flex',
	    paddingLeft: '10px',
	    marginTop: '10px',
	    justifyContent: 'flex-start',
	    alignItems: 'center',
  },marginRight15: {
    marginRight: '15px'
  },
  tableContainer: {
    marginTop: '10px',
    width: '100%',
    overflowX: 'auto',
  },tableSpan:{
  	fontWeight:'bold',
  },tableHead:{
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },tableButton:{
    marginLeft: -17,
  }
})