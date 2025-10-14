import Loading from '@/assets/tsb_loading.gif'

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img
        src={Loading}
        alt="Loading"
        className="relative z-10 h-28 w-auto image-pixelated"
      />
    </div>
  )
}

export default LoadingOverlay
