const RightButtonIcon = ({onNext}) => {
    return (
        <svg
            onClick={onNext}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    );
}

export default RightButtonIcon;