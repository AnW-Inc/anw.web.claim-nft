export const inputStyles = {
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            border: '2px solid',
            _focus: {
              borderColor: '#31D49E',
              boxShadow: 'none',
            },
          },
        },
      },
      sizes: {
        lg: {
          field: {
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: '24px',
          },
        },
      },
    },
  },
}
