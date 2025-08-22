export const menuCategory = {
    home: {
        categroy: 'home',
        menuList: [
            {
                id: 0,
                title: '홈',
                route: '/',
                iconSrc: '/icons/icon.svg',
            },
        ]
    },
    order: {
        categroy: 'order',
        menuList: [
            {
                id: 0,
                title: '접수목록',
                route: '/order',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 1,
                title: '입금현황',
                route: '/deposit',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 2,
                title: '고객A/S',
                route: '/customer',
                iconSrc: '/icons/icon.svg',
            }
        ]
    },
    product: {
        categroy: 'product',
        menuList: [
            {
                id: 0,
                title: '상품관리',
                route: '/product',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 1,
                title: '옵션관리',
                route: '/option',
                iconSrc: '/icons/icon.svg',
            },
        ]
    },
    schedule: {
        categroy: 'schedule',
        menuList: [
            {
                id: 0,
                title: '일정관리',
                route: '/schedule',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 1,
                title: '일감관리',
                route: '/task',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 2,
                title: '워크플로우',
                route: '/workflow',
                iconSrc: '/icons/icon.svg',
            }
        ]
    },
    hr: {
        categroy: 'hr',
        menuList: [
            {
                id: 0,
                title: '조직관리',
                route: '/organization',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 1,
                title: '직원관리',
                route: '/employee',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 2,
                title: '권한관리',
                route: '/permission',
                iconSrc: '/icons/icon.svg',
            }
        ]
    },
    etc: {
        categroy: 'etc',
        menuList: [
            {
                id: 0,
                title: '통계',
                route: '/statistics',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 1,
                title: '거래처',
                route: '/client',
                iconSrc: '/icons/icon.svg',
            },
            {
                id: 2,
                title: '재고관리',
                route: '/inventory',
                iconSrc: '/icons/icon.svg',
            }
        ]
    }
}