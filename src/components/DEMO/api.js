
// SAVATAR
export const savatar = [
    {
        name: 'size',
        type: 'string/number',
        default: '45',
        description: 'Expands the button to 100%.'
    },
    {
        name: 'rounded',
        type: 'boolean',
        default: 'false',
        description: 'Applies rounded edges.'
    },
    {
        name: 'color',
        type: 'string',
        default: '',
        description: 'Applies css color to the control, example #ffff or blue.'
    }
]

// SBUTTON 
export const sbutton = [
    {
        name: 'block',
        type: 'boolean',
        default: 'false',
        description: 'Expands the button to 100%.'
    }, {
        name: 'outlined',
        type: 'boolean',
        default: 'false',
        description: 'Makes the background transparent and applies a border.'
    }, {
        name: 'text',
        type: 'boolean',
        default: 'false',
        description: 'Makes the background transparent.'
    }, {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'set a spinner loading.'
    }, {
        name: 'icon',
        type: 'boolean',
        default: 'false',
        description: 'Designates the button as icon.'
    }, {
        name: 'to',
        type: 'object',
        default: 'undefined',
        description: 'Set  route to destination based on <route-link>.'
    }, {
        name: 'large',
        type: 'boolean',
        default: 'false',
        description: 'Makes the component large.'
    }, {
        name: 'x-large',
        type: 'boolean',
        default: 'false',
        description: 'Makes the component extra large..'
    }, {
        name: 'small',
        type: 'boolean',
        default: 'false',
        description: 'Makes the component small.'
    }, {
        name: 'xSmall',
        type: 'boolean',
        default: 'false',
        description: 'Makes the component extra small.'
    }, {
        name: 'color',
        type: 'String',
        default: 'undefined',
        description: 'Applies css color to the control, example #ffff or blue.'
    }
]

// SCHIP 
export const schip = [
    {
        name: 'type',
        type: 'string',
        default: 'primary',
        description: 'Defines the style of the chip'
    },
    {
        name: 'small',
        type: 'boolean',
        default: 'false',
        description: 'Makes the component small.'
    }, {
        name: 'large',
        type: 'boolean',
        default: 'false',
        description: 'Makes the component large.'
    },
]

// SCARD 
export const scard = [
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Sets a loading top bar.'
    },
    {
        name: 'center',
        type: 'boolean',
        default: 'false',
        description: 'Centralized internal elements.'
    },
     {
        name: 'height',
        type: 'string/number',
        default: 'undefined',
        description: 'Set height for the component.'
    },
    {
        name: 'min-height',
        type: 'string/number',
        default: 'undefined',
        description: 'Set minimum height for the component.'
    },
    {
        name: 'max-height',
        type: 'string/number',
        default: 'undefined',
        description: 'Sets maximum height for the component.'
    },
    {
        name: 'width',
        type: 'string/number',
        default: 'undefined',
        description: 'Sets width for the component.'
    },
    {
        name: 'min-width',
        type: 'string/number',
        default: 'undefined',
        description: 'Sets minimum width for the component.'
    },
    {
        name: 'max-width',
        type: 'string/number',
        default: 'undefined',
        description: 'Sets maximum width for the component.'
    },
]

// SCARD 
export const sspinner = [
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Start loading animation.'
    },
    {
        name: 'size',
        type: 'string/number',
        default: '30',
        description: 'Sets size for the component.'
    },
     {
        name: 'type',
        type: 'string',
        default: 'primary',
        description: 'Sets the style of the spinner, between success, primary or danger.'
    }
]

// STEXTFIELD 
export const stextfield = [
    {
        name: 'label',
        type: 'string',
        default: '',
        description: 'Sets a title of the component.'
    },
    {
        name: 'outlined',
        type: 'boolean',
        default: 'false',
        description: 'Makes the background transparent and applies a border.'
    },
     {
        name: 'errors',
        type: 'array/string',
        default: '',
        description: 'Puts the input in an error state and passes through custom error messages.'
    }
]

// STRANSITION 
export const stransition = [
    {
        name: 'transition',
        type: 'string',
        default: 'bounce',
        description: 'Sets style of the transition'
    },

]